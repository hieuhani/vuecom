interface KeyMap {
  [key: string]: any;
}
export const keymap: KeyMap = {
  tab: ['Tab', 9],
  enter: ['Enter', 13],
  esc: ['Escape', 27],
  space: [' ', 'Space', 32],
  left: ['ArrowLeft', 'Left', 37],
  up: ['ArrowUp', 'Up', 38],
  right: ['ArrowRight', 'Right', 39],
  down: ['ArrowDown', 'Down', 40],
}

export const isKey = (key: string, e: KeyboardEvent) => {
  const keyCode = e.key || e.keyCode;

  return keymap[key] && keymap[key].indexOf(keyCode) !== -1;
}
