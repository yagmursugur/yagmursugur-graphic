// Must match the basePath set in next.config.ts. Raw `<a>`/`<img>` tags
// referencing public/ files don't get Next's automatic basePath rewriting,
// so anything outside next/link or next/image needs this prefix manually.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Canonical production URL (includes the GitHub Pages basePath). Used to
// build absolute URLs for Open Graph/Twitter metadata, which social link
// crawlers require — relative paths won't resolve for them.
export const siteUrl = "https://yagmursugur.github.io/yagmursugur-graphic/";
