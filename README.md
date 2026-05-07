# リグ・ボーン整合チェック

rig-bone-consistency-checker は、AssetPipeline 領域の NON PICKUP Rank 8 アイデアをクローズドアルファとして実装したローカルファーストの検証ツールです。

## 目的

キャラクター素材はリグの小さな不整合がアニメーション適用時に発覚しやすい。

このリポジトリでは、ボーン名、階層、ウェイト、Humanoid設定、未割当頂点を検査する。 ための入力正規化、代表シナリオ検証、レビュー判断、レポート出力、導入・手動テスト手順、QCDS 証跡を一式で管理します。

## クローズドアルファ範囲

- 中核ロジック: `src/core`
- 入力検証: `src/validators`
- レポート生成: `src/report`
- 判断モデル: `src/review-model`
- CLI: `src/cli`
- ホスト/UI adapter: `public/index.html`
- 代表サンプル: `samples/representative-suite.json`

## 実行

```powershell
npm test
npm run validate
npm run build
```

## 公開位置づけ

- Version: v0.1.0-alpha.1
- GitHub prerelease: closed alpha
- 手動テスト: Codex 側では未実施。ユーザー実施用の手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記録。
- 主な公開先: GitHub Release / BOOTH

## 差別化

DCC側の骨構造とエンジン側Avatar設定を同じ検査レポートで追える。
