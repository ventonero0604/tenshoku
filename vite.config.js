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
  "age20.html": {
    altKeyVisual:
      "【PR】20代の転職 転職サイトランキング 後悔しない正しい選び方 TOP5",
  },
  "age30.html": {
    altKeyVisual:
      "【PR】30代の転職 転職サイトランキング 後悔しない正しい選び方 TOP5",
  },
  "age40.html": {
    altKeyVisual:
      "【PR】40代の転職 転職サイトランキング 後悔しない正しい選び方 TOP5",
  },
  "age50.html": {
    altKeyVisual:
      "【PR】50代の転職 転職サイトランキング 後悔しない正しい選び方 TOP5",
  },
  "rinshokensa.html": {
    altKeyVisual:
      "【PR】臨床検査技師編 プロが厳選した転職サイト 後悔しない正しい選び方 TOP3",
  },
  "rinshokogaku.html": {
    altKeyVisual:
      "【PR】臨床工学技士編 プロが厳選した転職サイト 後悔しない正しい選び方 TOP3",
  },
  "hoshasen.html": {
    altKeyVisual:
      "【PR】放射線技師編 プロが厳選した転職サイト 後悔しない正しい選び方 TOP3",
  },
  "highclass.html": {
    altKeyVisual:
      "【PR】年収600万円以上の方必見 転職サイトランキング ハイクラス転職",
  },
  "sales.html": {
    altKeyVisual:
      "【PR】対人スキルを仕事に活かす 転職サイトランキング 営業・セールス編",
  },
  "backoffice.html": {
    altKeyVisual:
      "【PR】組織をより良く・強くする仕事へ 転職サイトランキング バックオフィス編",
  },
  "beginner.html": {
    altKeyVisual:
      "【PR】未経験でも正社員になれる 就職・転職支援サービス 人気ランキングTOP5",
  },
  "hellowork.html": {
    altKeyVisual:
      "【PR】ハローワークよりおすすめ 就職・転職支援サービス 人気ランキングTOP5",
  },
  "shinsotsu.html": {
    altKeyVisual:
      "【PR】第二新卒・既卒におすすめ 就職・転職支援サービス 人気ランキングTOP5",
  },
  "university.html": {
    altKeyVisual:
      "【PR】大学・専門中退の就職に強い 就職・転職支援サービス 人気ランキングTOP5",
  },
  "unemployment.html": {
    altKeyVisual:
      "【PR】無職・ニートの就職に強い 就職・転職支援サービス 人気ランキングTOP5",
  },
  "freeter.html": {
    altKeyVisual:
      "【PR】フリーターの就職に強い 就職・転職支援サービス 人気ランキングTOP5",
  },
  "chukosotsu.html": {
    altKeyVisual:
      "【PR】中卒・高卒の方におすすめ 就職・転職支援サービス 人気ランキングTOP5",
  },
  "office.html": {
    altKeyVisual:
      "【PR】事務職の求人に強い！ 就職・転職支援サービス 人気ランキングTOP5",
  },
  "service.html": {
    altKeyVisual:
      "【PR】販売・サービス業に強い！ 就職・転職支援サービス 人気ランキングTOP5",
  },
  "dispatch.html": {
    altKeyVisual:
      "【PR】派遣の仕事探しならココ！ 高評価の派遣会社 人気ランキングTOP5",
  },
  "dispatch_office.html": {
    altKeyVisual:
      "【PR】事務職の仕事探しに最適 高評価の派遣会社 人気ランキングTOP5",
  },
  "dispatch_maker.html": {
    altKeyVisual:
      "【PR】製造・軽作業の仕事探しに最適 高評価の派遣会社 人気ランキングTOP5",
  },
  "dispatch_call.html": {
    altKeyVisual:
      "【PR】コールセンターの仕事探しに最適 高評価の派遣会社 人気ランキングTOP5",
  },
  "dispatch_service.html": {
    altKeyVisual:
      "【PR】販売・サービスの仕事探しに最適 高評価の派遣会社 人気ランキングTOP5",
  },
  "job_marketing.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング マーケティング職",
  },
  "job_woman.html": {
    altKeyVisual:
      "【PR】後悔しない正しい選び方を 転職エージェントランキング 女性の転職",
  },
  "job_consulting.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング コンサルタント職",
  },
  "job_it.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング IT・通信職種",
  },
  "job_machinery.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング 機械・電気職種",
  },
  "job_trading_compnay.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング 商社・貿易職種",
  },
  "job_service.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング 小売・サービス職種",
  },
  "job_trip.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング 旅行・エンタメ職種",
  },
  "job_ad.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング 人材・HR職種",
  },
  "job_insuarance.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング 金融・保険職種",
  },
  "job_real_estate.html": {
    altKeyVisual:
      "【PR】失敗しない転職サイトの決定版 転職サイトランキング 不動産・建設職種",
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
        age20: resolve(__dirname, root, "age20.html"),
        age30: resolve(__dirname, root, "age30.html"),
        age40: resolve(__dirname, root, "age40.html"),
        age50: resolve(__dirname, root, "age50.html"),
        rinshokensa: resolve(__dirname, root, "rinshokensa.html"),
        rinshokogaku: resolve(__dirname, root, "rinshokogaku.html"),
        hoshasen: resolve(__dirname, root, "hoshasen.html"),
        highclass: resolve(__dirname, root, "highclass.html"),
        sales: resolve(__dirname, root, "sales.html"),
        backoffice: resolve(__dirname, root, "backoffice.html"),
        beginner: resolve(__dirname, root, "beginner.html"),
        hellowork: resolve(__dirname, root, "hellowork.html"),
        shinsotsu: resolve(__dirname, root, "shinsotsu.html"),
        university: resolve(__dirname, root, "university.html"),
        unemployment: resolve(__dirname, root, "unemployment.html"),
        freeter: resolve(__dirname, root, "freeter.html"),
        chukosotsu: resolve(__dirname, root, "chukosotsu.html"),
        office: resolve(__dirname, root, "office.html"),
        service: resolve(__dirname, root, "service.html"),
        dispatch: resolve(__dirname, root, "dispatch.html"),
        dispatch_office: resolve(__dirname, root, "dispatch_office.html"),
        dispatch_maker: resolve(__dirname, root, "dispatch_maker.html"),
        dispatch_call: resolve(__dirname, root, "dispatch_call.html"),
        dispatch_service: resolve(__dirname, root, "dispatch_service.html"),
        job_marketing: resolve(__dirname, root, "job_marketing.html"),
        job_woman: resolve(__dirname, root, "job_woman.html"),
        job_consulting: resolve(__dirname, root, "job_consulting.html"),
        job_it: resolve(__dirname, root, "job_it.html"),
        job_trading_company: resolve(
          __dirname,
          root,
          "job_trading_company.html"
        ),
        job_service: resolve(__dirname, root, "job_service.html"),
        job_trip: resolve(__dirname, root, "job_trip.html"),
        job_ad: resolve(__dirname, root, "job_ad.html"),
        job_insuarance: resolve(__dirname, root, "job_insuarance.html"),
        job_real_estate: resolve(__dirname, root, "job_real_estate.html"),
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
