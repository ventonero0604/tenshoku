import { defineConfig } from "vite";

import { resolve } from "path";

//handlebarsプラグインimport
import handlebars from "vite-plugin-handlebars";

//HTML上で出し分けたい各ページごとの情報
const pageData = {
  "index.html": {
    altKeyVisual: "【PR】エージェント選びで後悔しない 転職サイトランキング",
  },
  "engineer.html": {
    altKeyVisual:
      "【PR】IT・WEB職種 転職サイトランキング 後悔しない正しい選び方 TOP5",
  },
  "game.html": {
    altKeyVisual:
      "【PR】ゲーム業界 転職サイトランキング 後悔しない正しい選び方 TOP5",
  },
};

const root = "src";

export default defineConfig({
  base: "./",
  server: {
    host: true, //IPアドレスを有効化
  },
  root: root, //開発ディレクトリ設定
  build: {
    outDir: "../dist", //出力場所の指定
    rollupOptions: {
      //ファイル出力設定
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          }
          //ビルド時のCSS名を明記してコントロールする
          if (extType === "css") {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: "assets/js/[name].js",
        entryFileNames: "assets/js/[name].js",
      },
      input: {
        index: resolve(__dirname, root, "index.html"),
        engineer: resolve(__dirname, root, "engineer.html"),
        game: resolve(__dirname, root, "game.html"),
        sitemap: resolve(__dirname, root, "sitemap.html"),
      },
    },
  },
  /*
    プラグインの設定を追加
  */
  plugins: [
    handlebars({
      //コンポーネントの格納ディレクトリを指定
      partialDirectory: resolve(__dirname, root, "components"),
      //各ページ情報の読み込み
      context(pagePath) {
        const pageName = pagePath.split("/").pop();
        return pageData[pageName];
      },
    }),
  ],
});
