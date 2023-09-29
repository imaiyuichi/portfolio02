/**
 * @description スクロール禁止
 */

const body = document.querySelector("body");
let currentScrollTop = 0;

const scrollEventNone = () => {
  currentScrollTop = window.pageYOffset;
  body.style.position = "fixed";
  body.style.top = `${currentScrollTop * -1}px`;
  body.style.left = "0";
  body.style.width = "100%";
};

/**
 * @description スクロール解除
 */
const scrollEventAuto = () => {
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.width = "";
  window.scrollTo(0, currentScrollTop);
};

/**
 * 背景固定切り替え機能
 * @description 背景をスクロール禁止または解除する機能です。
 * @param {boolean} state スクロールを禁止するか解除するかを切り替える真偽値。true=>固定 / false=>解除。
 */
export const disableNativeScroll = (state) => {
  state ? scrollEventNone() : scrollEventAuto();
};
