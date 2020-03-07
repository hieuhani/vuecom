import Vue, { DirectiveOptions } from 'vue';
import { DirectiveBinding } from 'vue/types/options'

import { on } from '../helpers/event'
import { isVisible } from '../helpers/element'

interface ClickOutsideHandler {
  nodeList: HTMLElement[]
  ctx: string
  startClick: Event | undefined
  seed: number
  onMouseDown: any
  onMouseUp: any
}
export const clickOutsideHandler: ClickOutsideHandler = {
  nodeList: [],
  ctx: '@@clickOutsideContext',
  startClick: undefined,
  seed: 0,
  onMouseDown(e: MouseEvent) {
    clickOutsideHandler.startClick = e;
  },
  onMouseUp(e: MouseEvent) {
    clickOutsideHandler.nodeList
      .forEach((node: any) => node[clickOutsideHandler.ctx].documentHandler(e, clickOutsideHandler.startClick));
  }
};

export function bindClickOutsideHandler() {
  if (!Vue.prototype.$isServer && typeof window !== 'undefined' && window.document) {
    on(window.document, 'mousedown', clickOutsideHandler.onMouseDown);
    on(window.document, 'mouseup', clickOutsideHandler.onMouseUp);
  }
}

export function createDocumentHandler(element: any, binding: DirectiveBinding, vnode: any) {
  return function (mouseup: MouseEvent, mousedown: MouseEvent) {
    if (!isVisible(element) ||
      !vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target) { return; }

    const targets = [mousedown.target, mouseup.target]
    for (let i = 0; i < targets.length; i++) {
      const targetElement = targets[i]
      if (element === targetElement || element.contains(targetElement)) {
        return;
      }
    }

    if (binding.expression &&
      element[clickOutsideHandler.ctx].methodName &&
      vnode.context[element[clickOutsideHandler.ctx].methodName]) {
      vnode.context[element[clickOutsideHandler.ctx].methodName]();
    } else {
      element[clickOutsideHandler.ctx].bindingFn && element[clickOutsideHandler.ctx].bindingFn();
    }
  };
}

/**
 * v-click-outside
 * @example
 * ```vue
 * <div v-click-outside="handleClose">
 * ```
 */
const ClickOutSide: DirectiveOptions = {
  bind(element: any, binding, vnode) {
    clickOutsideHandler.nodeList.push(element);
    const id = clickOutsideHandler.seed++;
    element[clickOutsideHandler.ctx] = {
      id,
      documentHandler: createDocumentHandler(element, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update(element: any, binding, vnode) {
    element[clickOutsideHandler.ctx].documentHandler = createDocumentHandler(element, binding, vnode);
    element[clickOutsideHandler.ctx].methodName = binding.expression;
    element[clickOutsideHandler.ctx].bindingFn = binding.value;
  },

  unbind(element: any) {
    let len = clickOutsideHandler.nodeList.length;

    for (let i = 0; i < len; i++) {
      if ((clickOutsideHandler.nodeList[i] as any)[clickOutsideHandler.ctx].id === element[clickOutsideHandler.ctx].id) {
        clickOutsideHandler.nodeList.splice(i, 1);
        break;
      }
    }

    delete element[clickOutsideHandler.ctx];
  }
};

export default ClickOutSide

bindClickOutsideHandler();
