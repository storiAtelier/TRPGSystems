# TRPGSystems
TRPGのシステムと権利情報などのオープンなAPIです。

## 使い方

### JSON APIエンドポイント

GitHub Pagesで公開されているJSONファイルを直接取得できます：

```
https://storiAtelier.github.io/TRPGSystems/ja/systems.json
```

### データ形式

各TRPGシステムは以下の形式で提供されます：

```json
{
  "id": "システムID",
  "name": "システム名",
  "short_name": "略称",
  "description": "説明",
  "publisher": "出版社",
  "copyright": {
    "holder": "著作権者",
    "year": 年,
    "notice": "© 表記"
  },
  "attributionTemplate": "帰属表示テンプレート",
  "links": {
    "official": "公式サイト",
    "rules": "ルールサポート",
    "guidelines": "ガイドライン"
  },
  "tags": ["タグ1", "タグ2"]
}
```

## 開発

### YAMLファイルの追加

`ja/` ディレクトリに新しいYAMLファイルを追加してください。

### ビルド

```bash
npm install
npm run build
```

`docs/ja/systems.json` が生成されます。

### デプロイ

mainブランチにpushすると、GitHub Actionsが自動的にビルドしてGitHub Pagesにデプロイします。
