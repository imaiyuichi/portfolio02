import { BREAKPOINT } from './variables';
import { viewportSpFix } from './utility/viewport-fix';
// import { viewportSize, viewportSizeSp } from './utility/viewport-size';

// export const app = () => {
//   window.addEventListener('load', () => {
//     viewportSpFix();
//     viewportSize();
//   });

//   window.addEventListener('resize', () => {
//     viewportSpFix();
//     viewportSize();
//   });

//   // 横のリサイズイベントのみを検知する
//   let windowWidth = window.innerWidth;

//   if (BREAKPOINT >= windowWidth) viewportSizeSp();

//   window.addEventListener('resize', () => {
//     if (BREAKPOINT >= windowWidth) {
//       if (windowWidth === window.innerWidth) return;
//       windowWidth = window.innerWidth;
//       viewportSizeSp();
//     }
//   });
// };
export const app = () => {
  console.log('next-sinblog');
};
