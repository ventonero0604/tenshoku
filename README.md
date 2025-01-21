# 静的ファイル
/dist ディレクトリの中身がビルドされた静的html（テンプレートファイル）となりますので、php埋め込みなどはこちらを利用してください

# スタイル調整について
/dist/override/override.css に上書きたいcssを追記してください。このファイルは全ページ共通で読み込まれます。
また個別ページを修正する場合は、htmlの`<head>`タグの中に
```
<style>
 .Hightlight: red;
</style>
```
の様に上書きの記述を書いて頂ければ、そのページだけ手軽に修正する事もできます。

## 注意点
ブラウザにドラッグ&ドロップして確認する場合、JSが動かない可能性があります。
サーバーにアップロードしていただく、あるいはphpを確認する時の様にローカルサーバーで確認して頂けば動作します。

これは `file:///`から始まるURLではJSの読み込みをブラウザがブロックする仕組みが働いてしまうからで、
ローカルでカジュアルにjsの挙動を確認したい場合は、htmlに手動でjsを追記頂ければ確認できます。

例 index.html
```
<script type="module" src="./js/main.js"></script>
これ追加→<script src="assets/js/main.js"></script>
```

例 下層ページ
```
<script type="module" src="./js/main.js"></script>
これ追加→<script src="../assets/js/main.js"></script>
```

[オリジン間リソース共有（CORS）の制約](https://developer.mozilla.org/ja/docs/Web/HTTP/CORS)

## 確認環境
テンプレートファイルは以下URLで確認できます。
- https://ventonero0604.github.io/tenshoku/dist/sitemap.html


----
----
----



# プロジェクトセットアップガイド

このガイドでは、WindowsおよびMacでGit、Node.js、Yarnを使用してプロジェクトをセットアップする手順を示します。

## 必要なツールのインストール

### Gitのインストール

- **Windows**:
  1. [Git for Windows](https://gitforwindows.org/)からインストーラをダウンロードします。
  2. インストーラを実行し、インストールウィザードに従ってインストールします。

- **Mac**:
  1. ターミナルを開き、以下のコマンドを実行します。Gitがインストールされていない場合、Xcode Command Line Toolsがインストールされます。
     ```bash
     git --version
     ```
  2. または、Homebrewを使用してインストールします。
     ```bash
     brew install git
     ```

- **確認**:
  - コマンドラインで以下のコマンドを実行してインストールが成功したことを確認します。
    ```bash
    git --version
    ```

### Node.jsのインストール

- **Windows**:
  1. [Node.jsの公式サイト](https://nodejs.org/)から最新のLTSバージョンをダウンロードします。
  2. インストーラを実行し、インストールウィザードに従ってインストールします。

- **Mac**:
  1. [Node.jsの公式サイト](https://nodejs.org/)から最新のLTSバージョンをダウンロードしてインストールします。
  2. または、Homebrewを使用してインストールします。
     ```bash
     brew install node
     ```

- **確認**:
  - コマンドラインで以下のコマンドを実行してインストールが成功したことを確認します。
    ```bash
    node -v
    npm -v
    ```

### Yarnのインストール

- **Windows/Mac**:
  1. コマンドラインで以下のコマンドを実行してYarnをインストールします。
     ```bash
     npm install --global yarn
     ```

- **確認**:
  - Yarnが正しくインストールされたことを確認します。
    ```bash
    yarn -v
    ```

## プロジェクトのクローンとセットアップ

1. **リポジトリをクローン**:
   - コマンドラインで以下のコマンドを実行します。
     ```bash
     git clone git@github.com:ventonero0604/tenshoku.git
     ```

2. **ディレクトリに移動**:
   - クローンしたプロジェクトのディレクトリに移動します。
     ```bash
     cd tenshoku
     ```

3. **依存関係のインストール**:
   - プロジェクトの依存関係をインストールします。
     ```bash
     yarn
     ```

## 開発環境の立ち上げと確認

1. **開発サーバーを起動**:
   - 以下のコマンドを実行して開発サーバーを起動します。
     ```bash
     yarn dev
     ```

2. **ブラウザで確認**:
   - ブラウザを開き、`http://localhost:3000`にアクセスします。
   - アプリケーションが正しく表示されることを確認してください。

## ビルド

- **プロジェクトのビルド**:
  - 以下のコマンドを実行してプロジェクトをビルドします。
    ```bash
    yarn build
    ```

- **ビルドされたファイルの確認**:
  - `dist`ディレクトリにビルドされた静的ファイルが生成されます。

これらの手順に従うことで、WindowsおよびMacの両方でプロジェクトをセットアップし、開発環境を確認して開発を開始できます。
