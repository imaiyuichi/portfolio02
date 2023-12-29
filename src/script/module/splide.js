import Splide from '@splidejs/splide';

export function SplideSlide() {
  new Splide('.splide', {
    // autoplay: true, // 自動再生
    type: 'loop', // ループ
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    // interval: 5000, // 自動再生の間隔
    speed: 2000, // スライダーの移動時間
    focus: 'center', // アクティブなスライドを中央にする
    updateOnMove: true, // is-activeクラスを移動前に更新する
    // padding: '20%', // スライダーの左右の余白
    gap: 50,
    perPage: 3.5,
    pagination: true,
    breakpoints: {
      768: {
        perPage: 1.3,
        gap: 20,
      },
    },
  }).mount();
}
