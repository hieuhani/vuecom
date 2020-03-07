import { trim } from './string'

export function hasClass (element: Element, className: string) {
  if (!element || !className) return false;
  if (className.indexOf(' ') !== -1) throw new Error('Class name should not contain spaces.');

  if (element.classList) {
      return element.classList.contains(className);
  } else {
      return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  }
}

export function addClass (element: Element, classes: string) {
  if (!element) return;

  let currentClass = element.className;
  const classList = (classes || '').split(' ');

  for (let i = 0, j = classList.length; i < j; i++) {
      const className = classList[i];
      if (!className) continue;

      if (element.classList) {
          element.classList.add(className);
      } else if (!hasClass(element, className)) {
          currentClass += ' ' + className;
      }
  }

  if (!element.classList) {
      element.className = currentClass;
  }
}

export function removeClass (element: Element, classes: string) {
  if (!element || !classes) return;

  const classList = classes.split(' ');
  let currentClass = ' ' + element.className + ' ';

  for (let i = 0, j = classList.length; i < j; i++) {
      const className = classList[i];
      if (!className) continue;

      if (element.classList) {
          element.classList.remove(className);
      } else if (hasClass(element, className)) {
          currentClass = currentClass.replace(' ' + className + ' ', ' ');
      }
  }

  if (!element.classList) {
      element.className = trim(currentClass);
  }
}

export function isVisible(element: HTMLElement) {
  return Boolean(element) &&
      Boolean(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
