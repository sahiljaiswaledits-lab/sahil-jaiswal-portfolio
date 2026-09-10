import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function profilePhotoSyncPlugin(): Plugin {
  return {
    name: 'profile-photo-sync',
    configureServer(server) {
      server.middlewares.use('/api/sync-profile-photo', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: Buffer) => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const { image } = JSON.parse(body);
              if (image && typeof image === 'string') {
                const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                const targetDir = path.resolve(__dirname, 'public/assets/profile');
                if (!fs.existsSync(targetDir)) {
                  fs.mkdirSync(targetDir, { recursive: true });
                }
                fs.writeFileSync(path.join(targetDir, 'sahil-jaiswal.jpg'), buffer);
                fs.writeFileSync(path.join(targetDir, 'sahil-jaiswal.png'), buffer);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
                return;
              }
            } catch (err) {
              console.error('Failed to sync profile photo:', err);
            }
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'invalid data' }));
          });
        } else {
          res.statusCode = 404;
          res.end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  // Use root '/' for Vercel deployments, and subpath '/sahil-jaiswal-portfolio/' for GitHub Pages
  const isVercel = Boolean(process.env.VERCEL);
  const base = isVercel ? '/' : (process.env.BASE_PATH || '/sahil-jaiswal-portfolio/');

  return {
    base,
    plugins: [react(), tailwindcss(), profilePhotoSyncPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
