## 静的ファイル
/dist ディレクトリの中身がビルドされた静的html（テンプレートファイル）となりますので、php埋め込みなどはこちらを利用してください

## スタイル調整について
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
