window.BENCHMARK_DATA = {
  "lastUpdate": 1608298800541,
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
      },
      {
        "commit": {
          "author": {
            "email": "razican@protonmail.ch",
            "name": "Iban Eguia",
            "username": "Razican"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dbba139848de6a8ee88350cc7fc48d0b05016c5",
          "message": "deps: replace lazy_static with once_cell (#3187)",
          "timestamp": "2020-12-04T10:23:13+01:00",
          "tree_id": "73f3366b9c7a0c50d6dd146a2626368cf59b3178",
          "url": "https://github.com/gierlachg/tokio/commit/0dbba139848de6a8ee88350cc7fc48d0b05016c5"
        },
        "date": 1607094599056,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 181841,
            "range": "± 10362",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 708883,
            "range": "± 58339",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5216575,
            "range": "± 745877",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20417190,
            "range": "± 2627578",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/gierlachg/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608298749425,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 158526,
            "range": "± 7546",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 626299,
            "range": "± 28592",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4455202,
            "range": "± 2155519",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18552911,
            "range": "± 2541209",
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
      },
      {
        "commit": {
          "author": {
            "email": "razican@protonmail.ch",
            "name": "Iban Eguia",
            "username": "Razican"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dbba139848de6a8ee88350cc7fc48d0b05016c5",
          "message": "deps: replace lazy_static with once_cell (#3187)",
          "timestamp": "2020-12-04T10:23:13+01:00",
          "tree_id": "73f3366b9c7a0c50d6dd146a2626368cf59b3178",
          "url": "https://github.com/gierlachg/tokio/commit/0dbba139848de6a8ee88350cc7fc48d0b05016c5"
        },
        "date": 1607094620637,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6736107,
            "range": "± 2658396",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6816940,
            "range": "± 1518612",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6064434,
            "range": "± 2161391",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 695,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 724,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 715,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 51741,
            "range": "± 2482",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 819,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1121040,
            "range": "± 29202",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 815417,
            "range": "± 293128",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/gierlachg/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608298799650,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7132547,
            "range": "± 3124047",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6999780,
            "range": "± 1786603",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6896314,
            "range": "± 2127429",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 750,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 761,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 756,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 84621,
            "range": "± 15917",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1477,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1150190,
            "range": "± 9426",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 835634,
            "range": "± 20123",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
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
        "date": 1606655241455,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15480,
            "range": "± 4268",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1086,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 652,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14908,
            "range": "± 2967",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1082,
            "range": "± 20",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "razican@protonmail.ch",
            "name": "Iban Eguia",
            "username": "Razican"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dbba139848de6a8ee88350cc7fc48d0b05016c5",
          "message": "deps: replace lazy_static with once_cell (#3187)",
          "timestamp": "2020-12-04T10:23:13+01:00",
          "tree_id": "73f3366b9c7a0c50d6dd146a2626368cf59b3178",
          "url": "https://github.com/gierlachg/tokio/commit/0dbba139848de6a8ee88350cc7fc48d0b05016c5"
        },
        "date": 1607094617507,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14799,
            "range": "± 3085",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1096,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 656,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15440,
            "range": "± 4853",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1101,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/gierlachg/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608298772436,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13548,
            "range": "± 2733",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 921,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 550,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13118,
            "range": "± 2808",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 917,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
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
        "date": 1606655245108,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 851,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15036,
            "range": "± 3761",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 898,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13636,
            "range": "± 3497",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 492,
            "range": "± 72",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "razican@protonmail.ch",
            "name": "Iban Eguia",
            "username": "Razican"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dbba139848de6a8ee88350cc7fc48d0b05016c5",
          "message": "deps: replace lazy_static with once_cell (#3187)",
          "timestamp": "2020-12-04T10:23:13+01:00",
          "tree_id": "73f3366b9c7a0c50d6dd146a2626368cf59b3178",
          "url": "https://github.com/gierlachg/tokio/commit/0dbba139848de6a8ee88350cc7fc48d0b05016c5"
        },
        "date": 1607094627485,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1015,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15264,
            "range": "± 5880",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1058,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15849,
            "range": "± 5358",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 601,
            "range": "± 123",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd4c0025539f142ec48a09e01430f7ee3b83214",
          "message": "time: enforce `current_thread` rt for time::pause (#3289)\n\nPausing time is a capability added to assist with testing Tokio code\r\ndependent on time. Currently, the capability implicitly requires the\r\ncurrent_thread runtime.\r\n\r\nThis change enforces the requirement by panicking if called from a\r\nmulti-threaded runtime.",
          "timestamp": "2020-12-17T15:37:08-08:00",
          "tree_id": "6c565d6c74dff336ac847cb6463245283d8470d5",
          "url": "https://github.com/gierlachg/tokio/commit/abd4c0025539f142ec48a09e01430f7ee3b83214"
        },
        "date": 1608298772230,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 920,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14139,
            "range": "± 5392",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 930,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13573,
            "range": "± 2831",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 562,
            "range": "± 153",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}