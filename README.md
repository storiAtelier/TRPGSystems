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
    "year": (integer)年,
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

## システムの追加

システムを追加したい場合次のフォーマットでyamlを作成しPull Requestを提出してください。

```yaml
id: 管理用のIDです。システムの略称を英語小文字で (e.g. coc,ar2e)
name: システムの正式名称
ruby: システムの読み方
short_name: システムの略称
description: システムの説明、公式の用語を使ってください
publisher: 出版元
copyright:
  holder: 著作権者
  year: 出版年
  notice: 著作権者
attributionTemplate: 著作権表記
links:
  official: 公式サイト (必須)
  rules: ルールページ
  guidelines: ガイドラインページ
tags:
  - "TRPG"
  - "その他のシステムの特徴のタグ"
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
