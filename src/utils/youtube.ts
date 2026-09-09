/**
 * Extracts the 11-character YouTube video ID from various YouTube URL formats
 * (shorts, watch?v=, youtu.be, embed, mobile m.youtube.com).
 */
export function extractYouTubeVideoId(url: string): string {
  if (!url) return '';

  // YouTube Shorts: youtube.com/shorts/VIDEO_ID
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) return shortsMatch[1];

  // Standard or Mobile watch URL: youtube.com/watch?v=VIDEO_ID or m.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch && watchMatch[1]) return watchMatch[1];

  // Short link: youtu.be/VIDEO_ID
  const shortLinkMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortLinkMatch && shortLinkMatch[1]) return shortLinkMatch[1];

  // Direct embed: youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch && embedMatch[1]) return embedMatch[1];

  // Plain 11-char ID
  const trimmed = url.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  return '';
}

/**
 * Builds an inline 9:16 autoplaying, muted, looping YouTube embed URL.
 * Looping a single video requires loop=1 and playlist={videoId}.
 */
export function getInlineReelEmbedUrl(
  url: string,
  options: {
    autoplay?: boolean;
    mute?: boolean;
    loop?: boolean;
    controls?: boolean;
  } = {}
): string {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return '';

  const {
    autoplay = true,
    mute = true,
    loop = true,
    controls = false,
  } = options;

  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: mute ? '1' : '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    controls: controls ? '1' : '0',
    disablekb: '1',
    fs: '0',
    iv_load_policy: '3',
    enablejsapi: '1',
  });

  if (loop) {
    params.set('loop', '1');
    params.set('playlist', videoId); // Essential for YouTube single video loop
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

/**
 * Builds an embed URL for when a visitor clicks to play a Reel inside its card:
 * - autoplay=1 (starts playback immediately upon click)
 * - playsinline=1 (keeps player inside the vertical card on iOS/Android)
 * - controls=1 (standard player controls: pause/play, seek, volume)
 * - rel=0, modestbranding=1
 */
export function getReelPlayerUrl(url: string): string {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return '';

  const params = new URLSearchParams({
    autoplay: '1',
    playsinline: '1',
    controls: '1',
    rel: '0',
    enablejsapi: '1',
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

/**
 * Converts any standard YouTube URL into an embed URL.
 */
export function getYouTubeEmbedUrl(url: string, autoPlay: boolean = true): string {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return url;

  const params = new URLSearchParams({
    autoplay: autoPlay ? '1' : '0',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    enablejsapi: '1',
  });

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}
