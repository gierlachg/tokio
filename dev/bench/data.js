window.BENCHMARK_DATA = {
  "lastUpdate": 1616261418342,
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
      },
      {
        "commit": {
          "author": {
            "email": "chenshuo17@huawei.com",
            "name": "surechen",
            "username": "surechen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e5a0a7df6eff94a1d6fee60fad5813f6bb42e64",
          "message": "runtime: fix a spelling mistake (#3503)",
          "timestamp": "2021-02-04T12:30:31+01:00",
          "tree_id": "586a72831f167ab4244ba8647512380256e8cb0c",
          "url": "https://github.com/gierlachg/tokio/commit/3e5a0a7df6eff94a1d6fee60fad5813f6bb42e64"
        },
        "date": 1612535042262,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 157112,
            "range": "± 19500",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 606482,
            "range": "± 38971",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4451336,
            "range": "± 470230",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17079992,
            "range": "± 2158574",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roniz.net@gmail.com",
            "name": "r-zig",
            "username": "r-zig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9d2a36c7b1dad502d811c4e9082e43c6dbe73c5",
          "message": "codec: AnyDelimiter codec (#3406)",
          "timestamp": "2021-02-23T16:56:11+01:00",
          "tree_id": "4030910d8927fa26d719c806b7470c4280dde8a9",
          "url": "https://github.com/gierlachg/tokio/commit/c9d2a36c7b1dad502d811c4e9082e43c6dbe73c5"
        },
        "date": 1614162985723,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 197909,
            "range": "± 36442",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 740378,
            "range": "± 35689",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5492208,
            "range": "± 537479",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21007370,
            "range": "± 2928929",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bfcbc8be5368bf2a203c2c2856e5d3e7f5154b3",
          "message": "runtime: fix unclear docs for `{Handle,Runtime}::block_on` (#3628)",
          "timestamp": "2021-03-20T14:52:25+01:00",
          "tree_id": "b5bc658aff9693ae146773d8c1ca1c775b404f45",
          "url": "https://github.com/gierlachg/tokio/commit/0bfcbc8be5368bf2a203c2c2856e5d3e7f5154b3"
        },
        "date": 1616261405551,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190002,
            "range": "± 4258",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 754872,
            "range": "± 117937",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5612245,
            "range": "± 832192",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22436139,
            "range": "± 3635864",
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
      },
      {
        "commit": {
          "author": {
            "email": "chenshuo17@huawei.com",
            "name": "surechen",
            "username": "surechen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e5a0a7df6eff94a1d6fee60fad5813f6bb42e64",
          "message": "runtime: fix a spelling mistake (#3503)",
          "timestamp": "2021-02-04T12:30:31+01:00",
          "tree_id": "586a72831f167ab4244ba8647512380256e8cb0c",
          "url": "https://github.com/gierlachg/tokio/commit/3e5a0a7df6eff94a1d6fee60fad5813f6bb42e64"
        },
        "date": 1612535066958,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5947948,
            "range": "± 2517546",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6022215,
            "range": "± 1033883",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5471166,
            "range": "± 2659655",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 476,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 475,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 475,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 70321,
            "range": "± 3517",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1334,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 962093,
            "range": "± 2494",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 702346,
            "range": "± 15203",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roniz.net@gmail.com",
            "name": "r-zig",
            "username": "r-zig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9d2a36c7b1dad502d811c4e9082e43c6dbe73c5",
          "message": "codec: AnyDelimiter codec (#3406)",
          "timestamp": "2021-02-23T16:56:11+01:00",
          "tree_id": "4030910d8927fa26d719c806b7470c4280dde8a9",
          "url": "https://github.com/gierlachg/tokio/commit/c9d2a36c7b1dad502d811c4e9082e43c6dbe73c5"
        },
        "date": 1614162986837,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7306628,
            "range": "± 2597091",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6600907,
            "range": "± 1565165",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6661887,
            "range": "± 2234193",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 744,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 748,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 740,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 82428,
            "range": "± 3013",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1562,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1140814,
            "range": "± 224731",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 828765,
            "range": "± 191031",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bfcbc8be5368bf2a203c2c2856e5d3e7f5154b3",
          "message": "runtime: fix unclear docs for `{Handle,Runtime}::block_on` (#3628)",
          "timestamp": "2021-03-20T14:52:25+01:00",
          "tree_id": "b5bc658aff9693ae146773d8c1ca1c775b404f45",
          "url": "https://github.com/gierlachg/tokio/commit/0bfcbc8be5368bf2a203c2c2856e5d3e7f5154b3"
        },
        "date": 1616261415795,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5980822,
            "range": "± 1995258",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5670613,
            "range": "± 1595470",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5590383,
            "range": "± 2029621",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 495,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 506,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 534,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 71021,
            "range": "± 9149",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1205,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 896997,
            "range": "± 133131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 645264,
            "range": "± 98362",
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
      },
      {
        "commit": {
          "author": {
            "email": "chenshuo17@huawei.com",
            "name": "surechen",
            "username": "surechen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e5a0a7df6eff94a1d6fee60fad5813f6bb42e64",
          "message": "runtime: fix a spelling mistake (#3503)",
          "timestamp": "2021-02-04T12:30:31+01:00",
          "tree_id": "586a72831f167ab4244ba8647512380256e8cb0c",
          "url": "https://github.com/gierlachg/tokio/commit/3e5a0a7df6eff94a1d6fee60fad5813f6bb42e64"
        },
        "date": 1612535043590,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13986,
            "range": "± 2271",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 912,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 541,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13630,
            "range": "± 2779",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 909,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roniz.net@gmail.com",
            "name": "r-zig",
            "username": "r-zig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9d2a36c7b1dad502d811c4e9082e43c6dbe73c5",
          "message": "codec: AnyDelimiter codec (#3406)",
          "timestamp": "2021-02-23T16:56:11+01:00",
          "tree_id": "4030910d8927fa26d719c806b7470c4280dde8a9",
          "url": "https://github.com/gierlachg/tokio/commit/c9d2a36c7b1dad502d811c4e9082e43c6dbe73c5"
        },
        "date": 1614162959872,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13131,
            "range": "± 3001",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 909,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 545,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13979,
            "range": "± 2640",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 910,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bfcbc8be5368bf2a203c2c2856e5d3e7f5154b3",
          "message": "runtime: fix unclear docs for `{Handle,Runtime}::block_on` (#3628)",
          "timestamp": "2021-03-20T14:52:25+01:00",
          "tree_id": "b5bc658aff9693ae146773d8c1ca1c775b404f45",
          "url": "https://github.com/gierlachg/tokio/commit/0bfcbc8be5368bf2a203c2c2856e5d3e7f5154b3"
        },
        "date": 1616261398788,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14881,
            "range": "± 5656",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1105,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 625,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13644,
            "range": "± 3270",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1081,
            "range": "± 143",
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
      },
      {
        "commit": {
          "author": {
            "email": "chenshuo17@huawei.com",
            "name": "surechen",
            "username": "surechen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e5a0a7df6eff94a1d6fee60fad5813f6bb42e64",
          "message": "runtime: fix a spelling mistake (#3503)",
          "timestamp": "2021-02-04T12:30:31+01:00",
          "tree_id": "586a72831f167ab4244ba8647512380256e8cb0c",
          "url": "https://github.com/gierlachg/tokio/commit/3e5a0a7df6eff94a1d6fee60fad5813f6bb42e64"
        },
        "date": 1612535075317,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1015,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17399,
            "range": "± 6741",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1079,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17836,
            "range": "± 9424",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 624,
            "range": "± 125",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roniz.net@gmail.com",
            "name": "r-zig",
            "username": "r-zig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9d2a36c7b1dad502d811c4e9082e43c6dbe73c5",
          "message": "codec: AnyDelimiter codec (#3406)",
          "timestamp": "2021-02-23T16:56:11+01:00",
          "tree_id": "4030910d8927fa26d719c806b7470c4280dde8a9",
          "url": "https://github.com/gierlachg/tokio/commit/c9d2a36c7b1dad502d811c4e9082e43c6dbe73c5"
        },
        "date": 1614162968393,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1014,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17667,
            "range": "± 8738",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1060,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17150,
            "range": "± 7160",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 619,
            "range": "± 385",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bfcbc8be5368bf2a203c2c2856e5d3e7f5154b3",
          "message": "runtime: fix unclear docs for `{Handle,Runtime}::block_on` (#3628)",
          "timestamp": "2021-03-20T14:52:25+01:00",
          "tree_id": "b5bc658aff9693ae146773d8c1ca1c775b404f45",
          "url": "https://github.com/gierlachg/tokio/commit/0bfcbc8be5368bf2a203c2c2856e5d3e7f5154b3"
        },
        "date": 1616261413055,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1077,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14920,
            "range": "± 7346",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1032,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14622,
            "range": "± 5477",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 581,
            "range": "± 29",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}