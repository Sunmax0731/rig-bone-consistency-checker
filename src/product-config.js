export const productConfig = {
  "product": {
    "rank": 8,
    "tier": "P0",
    "score": 69,
    "domain": "AssetPipeline",
    "ideaNo": 3,
    "ideaName": "リグ・ボーン整合チェック",
    "repository": "rig-bone-consistency-checker",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "キャラクター素材の破綻検出として説明しやすく、Unity/Blender間の検品に接続できる。",
    "surface": "アセットパイプライン向け CLI、検証モデル、静的 HTML レビュー画面",
    "integration": "Blender / Maya / MotionBuilder / Unity Editor",
    "overview": "ボーン名、階層、ウェイト、Humanoid設定、未割当頂点を検査する。",
    "problem": "キャラクター素材はリグの小さな不整合がアニメーション適用時に発覚しやすい。",
    "differentiation": "DCC側の骨構造とエンジン側Avatar設定を同じ検査レポートで追える。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
