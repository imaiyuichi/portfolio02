# Cellsource-Corporate-microCMS

## 🐶 Local Environment Setup

- Node.js >=16.0.0 install
- Create an .env file and copy the contents of .envlocal.
- package install

```bash
npm install
```

・frontend build start

```bash
npm run dev:test
```

open <http://localhost:3000/>

## 💻 Production Upload

```bash
npm run build:ssg
```

upload all files under dist

## 👉 Git Flow

- main: コードが安定している状態
- test: テスト用のブランチ<https://cellsource.lig-test2.work/>と同期しているのでクライアントやディレクター確認に使用できる
- feature: 機能の追加用。main から分岐して、main と test に適宜マージする

## 📦 Components

- pages ディレクトリに配置するファイルはルーティングのみを担い、コンテンツやスタイルは全て /src/components/配下の PageHoge コンポーネントで管理する
- セクション単位で分化したファイルについては`/partials`に逃してください
- 接頭辞を揃えるように意識してください ex) PageHoge 、ButtonHoge、 BaseHoge、CardHoge

## 🌙 Font

- Hiragino UD Sans W4 & W5: TypeSquare
- Avenir Next: SVG 実装

本サイトのフォントのスタイリングはデザインルールによって管理されています。<br>
ユニークなスタイル以外は`global.scss`に定義されているフォントスタイルを適用するようにしてください。<br>
※ .astro ファイル内でスタイルの上書きを行うとそちらが優先されるので、デザインルールの一括変更した際にスタイリングが適用されません。注意してください。

## 😌 Image

```bash
import { Image } from "@astrojs/image/components";
import { getHoge } from "../apis/microcms";

const hogeData = await getHoge({
  fields: [
    "image"
  ],
});

<Image src={hogeData.image.url} width={hogeData.image.width} width={hogeData.image.height} alt="alt" quality={80} format="webp"/>
```

本案件はプレビューページを SSR で実装しています。SSR でローカルの画像に`astro-image`を使用した時に<br>
原因不明のエラーが発生したため、ビルドのモードによって、画像の最適化を行います。

```bash
import ImageWrapper from "../components/ImageWrapper.astro";
import Sample from "../assets/images/sample.jpg";

<ImageWrapper　src={Sample.src}　width={Sample.width} height={Sample.height} alt="alt" quality={80} format="webp"/>
```

## ✋ Icon

```bash
import { Icon } from "astro-icon";

<Icon name="name" title="title" />
```

## 😺 Grid System

Design is based on the 60-column grid system with PC and SP. To use debug grid line, please follow the steps below.

- Press "D" key to show/hide the grid line.
- Grid line is shown only when `npm run dev` is running.
- DebugGrid.astro in Layout.astro is used to show/hide the grid line.

## 😻 Styling

- `rem` units to set the position and size of elements.
- `px` units to set the `margin-top` and `margin-bottom` of elements. Padding as well if needed.
- `vw()` mixin to set the `font-size` of text.

## 💦 Preview

rendering SSR mode

```bash
npm run build:ssr
```

## ✋ Lint

lint check

```bash
npm run lint:check
```

lint fix

```bash
npm run lint:fix
```

lint check timing vscode save & pre-commit<br>
vscode save lint check must plugins

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                                        |
| :------------------ | :------------------------------------------------------------ |
| `npm install`       | Installs dependencies                                         |
| `npm run dev:test`  | Starts local dev server at `localhost:3000` microcms test api |
| `npm run dev:prod`  | Starts local dev server at `localhost:3000` microcms prod api |
| `npm run setup:ssr` | Starts SSR dev server at `http://0.0.0.0:3000`                |
| `npm run build:ssg` | Build SSG                                                     |
| `npm run build:ssr` | Build SSR                                                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
