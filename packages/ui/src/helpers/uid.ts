export function uid (baseId: string) {
  return baseId + '-' + Math.random().toString(36).substr(2, 9);
}
