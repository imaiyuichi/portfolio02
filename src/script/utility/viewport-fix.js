import { BESTVIEW } from "../variables";
const viewport = document.querySelector('meta[name="viewport"]');

/**
 * 360px未満のデバイスのビューポートを固定する
 */
export const viewportSpFix = () => {
  const value =
    window.outerWidth > BESTVIEW.SP.WIDTH
      ? "width=device-width,initial-scale=1"
      : `width=${BESTVIEW.SP.WIDTH}`;
  if (viewport.getAttribute("content") !== value)
    viewport.setAttribute("content", value);
};
