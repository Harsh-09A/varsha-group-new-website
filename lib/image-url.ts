export function getImageUrl(key: string | null) {
  if (!key) return null;
  return `/api/images/${key}`;
}