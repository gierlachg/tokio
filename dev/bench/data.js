window.BENCHMARK_DATA = {
  "lastUpdate": 1606655225849,
  "repoUrl": "https://github.com/gierlachg/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/gierlachg/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606655210102,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 162755,
            "range": "± 44922",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 628168,
            "range": "± 156376",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4583996,
            "range": "± 1061807",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18561083,
            "range": "± 3513033",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55d846f4b248b4a72335d6c57829fa6396ab9a5",
          "message": "util: add rt to tokio-util full feature (#3194)",
          "timestamp": "2020-11-29T09:48:31+01:00",
          "tree_id": "5f27b29cd1018796f0713d6e87e4823920ba5084",
          "url": "https://github.com/gierlachg/tokio/commit/c55d846f4b248b4a72335d6c57829fa6396ab9a5"
        },
        "date": 1606655225021,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6462051,
            "range": "± 1952912",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6485352,
            "range": "± 1296568",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5947139,
            "range": "± 2203596",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 772,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 770,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 735,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 51437,
            "range": "± 1709",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 791,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1105507,
            "range": "± 52011",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 783613,
            "range": "± 139842",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}