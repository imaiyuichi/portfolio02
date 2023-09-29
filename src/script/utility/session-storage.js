export const SessionStorage = {
  init() {
    if (!window.sessionStorage.getItem("visited")) {
      window.sessionStorage.setItem("visited", "true");
    }
  },
  isVisited() {
    return window.sessionStorage.getItem("visited");
  },
};
