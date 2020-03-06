export function assert(condition: any, msg: string) {
  if (!condition) throw new Error(`[vuecom-ui] ${msg}`);
}
