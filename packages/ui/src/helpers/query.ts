import { VNode } from 'vue'

export function querySelector(items: any, name: string, maxDepth = 3, currentDepth = 0): VNode | null {
  let result;

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const children = item.$children || (item.componentInstance || {}).$children || item.children;

    if ((item.$options || {}).name === name ||
      ((item.$options || {}).extends || {}).name === name ||
      ((item.componentInstance || {}).$options || {}).name === name ||
      (((item.componentInstance || {}).$options || {}).extends || {}).name === name) {
      result = item;
    }

    if (children && children.length > 0 && currentDepth < maxDepth && !result) {
      result = querySelector(children, name, maxDepth, currentDepth + 1);
    }

    if (result) {
      break;
    }
  }

  return result;
}
