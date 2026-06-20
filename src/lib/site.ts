// Must match the basePath set in next.config.ts. Raw `<a>`/`<img>` tags
// referencing public/ files don't get Next's automatic basePath rewriting,
// so anything outside next/link or next/image needs this prefix manually.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
