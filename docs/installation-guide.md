# 導入手順

## GitHub Release から使う

1. GitHub の v0.1.0-alpha.1 prerelease を開く。
2. `dist/rig-bone-consistency-checker-docs.zip`、`manual-test.md`、`strict-manual-test-addendum.md` を確認する。
3. リポジトリを clone する。

```powershell
git clone https://github.com/Sunmax0731/rig-bone-consistency-checker.git
cd rig-bone-consistency-checker
npm test
npm run validate
```

## ローカル利用

- JSON サンプルを差し替える場合は `samples/representative-suite.json` の構造を維持する。
- 外部送信は行わない。実ファイルを扱う場合はローカルパスと公開可否を事前確認する。
