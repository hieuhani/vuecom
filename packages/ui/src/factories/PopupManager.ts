export class PopupManager {
  zIndex = 1000;

  nextZIndex() {
    return this.zIndex++;
  }
}

export const popupManager = new PopupManager();
export default popupManager;
