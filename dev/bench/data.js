window.BENCHMARK_DATA = {
  "lastUpdate": 1618487453398,
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
      },
      {
        "commit": {
          "author": {
            "email": "moritz.gunz@gmail.com",
            "name": "Moritz Gunz",
            "username": "NeoLegends"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "227b3e0d9c5276a5ce6a69405436418cd5515f39",
          "message": "chore: avoid allocation if PollSemaphore is unused (#3634)",
          "timestamp": "2021-03-22T17:02:30+01:00",
          "tree_id": "3d19e1a59af025c38b91b4869439fc7d6db50d81",
          "url": "https://github.com/gierlachg/tokio/commit/227b3e0d9c5276a5ce6a69405436418cd5515f39"
        },
        "date": 1616443401151,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179113,
            "range": "± 19629",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 689121,
            "range": "± 89746",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5366856,
            "range": "± 1281311",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20718201,
            "range": "± 2769504",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fc49dc522841101c25dbe7ffe222b64a896b5ab",
          "message": "chore: update years in all licenses (#3665)",
          "timestamp": "2021-03-30T21:45:13+02:00",
          "tree_id": "b7b89103db86839919011cd9ec3f9f4fcbc7b481",
          "url": "https://github.com/gierlachg/tokio/commit/8fc49dc522841101c25dbe7ffe222b64a896b5ab"
        },
        "date": 1617173649260,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 195475,
            "range": "± 23132",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 719941,
            "range": "± 79231",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5639916,
            "range": "± 1535999",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21441958,
            "range": "± 4102226",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@lucaszanella.com",
            "name": "Lucas Zanela",
            "username": "lucaszanella"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0074b963b8ef02308e6367c8edd5c9d210c9038d",
          "message": "doc: add features = \"full\" to readme (#3680)",
          "timestamp": "2021-04-06T11:03:21+02:00",
          "tree_id": "311075a61ef9a0e34f66c0e8b7b2004beab39280",
          "url": "https://github.com/gierlachg/tokio/commit/0074b963b8ef02308e6367c8edd5c9d210c9038d"
        },
        "date": 1617702248985,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 182711,
            "range": "± 30666",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 674768,
            "range": "± 110869",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4432971,
            "range": "± 1125783",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19117226,
            "range": "± 3113048",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "baoyachi. Aka Rust Hairy crabs",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cab4a592ac1f122a988b8a81a235bb4eccb22db7",
          "message": "chore: update version in README.md (#3698)",
          "timestamp": "2021-04-13T16:17:14+09:00",
          "tree_id": "2e4adee4ef6d23e792a4515550adfb47976f3dad",
          "url": "https://github.com/gierlachg/tokio/commit/cab4a592ac1f122a988b8a81a235bb4eccb22db7"
        },
        "date": 1618307497178,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191659,
            "range": "± 33714",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 682424,
            "range": "± 115842",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4396117,
            "range": "± 1037646",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18822470,
            "range": "± 3005238",
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
      },
      {
        "commit": {
          "author": {
            "email": "moritz.gunz@gmail.com",
            "name": "Moritz Gunz",
            "username": "NeoLegends"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "227b3e0d9c5276a5ce6a69405436418cd5515f39",
          "message": "chore: avoid allocation if PollSemaphore is unused (#3634)",
          "timestamp": "2021-03-22T17:02:30+01:00",
          "tree_id": "3d19e1a59af025c38b91b4869439fc7d6db50d81",
          "url": "https://github.com/gierlachg/tokio/commit/227b3e0d9c5276a5ce6a69405436418cd5515f39"
        },
        "date": 1616443420870,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6409202,
            "range": "± 2613879",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6104306,
            "range": "± 2098013",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5491716,
            "range": "± 2458239",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 838,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 802,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 800,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 124375,
            "range": "± 15115",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1754,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1079981,
            "range": "± 98616",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 773590,
            "range": "± 113460",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fc49dc522841101c25dbe7ffe222b64a896b5ab",
          "message": "chore: update years in all licenses (#3665)",
          "timestamp": "2021-03-30T21:45:13+02:00",
          "tree_id": "b7b89103db86839919011cd9ec3f9f4fcbc7b481",
          "url": "https://github.com/gierlachg/tokio/commit/8fc49dc522841101c25dbe7ffe222b64a896b5ab"
        },
        "date": 1617173663068,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7156145,
            "range": "± 2814209",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6874518,
            "range": "± 2053650",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6421585,
            "range": "± 2527597",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 607,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 598,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 599,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 83205,
            "range": "± 7641",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1503,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1140648,
            "range": "± 59311",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 827435,
            "range": "± 43913",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@lucaszanella.com",
            "name": "Lucas Zanela",
            "username": "lucaszanella"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0074b963b8ef02308e6367c8edd5c9d210c9038d",
          "message": "doc: add features = \"full\" to readme (#3680)",
          "timestamp": "2021-04-06T11:03:21+02:00",
          "tree_id": "311075a61ef9a0e34f66c0e8b7b2004beab39280",
          "url": "https://github.com/gierlachg/tokio/commit/0074b963b8ef02308e6367c8edd5c9d210c9038d"
        },
        "date": 1617702272958,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6780818,
            "range": "± 2354721",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6536428,
            "range": "± 2159085",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6714602,
            "range": "± 2193968",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 663,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 645,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 652,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 79881,
            "range": "± 6429",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1492,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1091768,
            "range": "± 121384",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 783749,
            "range": "± 74921",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "baoyachi. Aka Rust Hairy crabs",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cab4a592ac1f122a988b8a81a235bb4eccb22db7",
          "message": "chore: update version in README.md (#3698)",
          "timestamp": "2021-04-13T16:17:14+09:00",
          "tree_id": "2e4adee4ef6d23e792a4515550adfb47976f3dad",
          "url": "https://github.com/gierlachg/tokio/commit/cab4a592ac1f122a988b8a81a235bb4eccb22db7"
        },
        "date": 1618307485736,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6899061,
            "range": "± 2019316",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6650307,
            "range": "± 1645858",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6183498,
            "range": "± 1954221",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 693,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 695,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 693,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85526,
            "range": "± 7080",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1522,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1143305,
            "range": "± 319812",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 827351,
            "range": "± 10040",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ecameron@bluecatnetworks.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9eeec039f200c42099e0471f2a216a679dce397e",
          "message": "util: make UdpFramed take Borrow<UdpSocket> (#3451)",
          "timestamp": "2021-04-14T20:16:23+02:00",
          "tree_id": "04ee3c7c8df16f2004d778a5094b2064a95f6f04",
          "url": "https://github.com/gierlachg/tokio/commit/9eeec039f200c42099e0471f2a216a679dce397e"
        },
        "date": 1618487447210,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5588569,
            "range": "± 2209129",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5505360,
            "range": "± 1641803",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5602003,
            "range": "± 2102263",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 527,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 509,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 499,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 67210,
            "range": "± 6036",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1060,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 891617,
            "range": "± 138485",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 649215,
            "range": "± 127598",
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
      },
      {
        "commit": {
          "author": {
            "email": "moritz.gunz@gmail.com",
            "name": "Moritz Gunz",
            "username": "NeoLegends"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "227b3e0d9c5276a5ce6a69405436418cd5515f39",
          "message": "chore: avoid allocation if PollSemaphore is unused (#3634)",
          "timestamp": "2021-03-22T17:02:30+01:00",
          "tree_id": "3d19e1a59af025c38b91b4869439fc7d6db50d81",
          "url": "https://github.com/gierlachg/tokio/commit/227b3e0d9c5276a5ce6a69405436418cd5515f39"
        },
        "date": 1616443428302,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17145,
            "range": "± 5398",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1172,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 672,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17681,
            "range": "± 10914",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1135,
            "range": "± 207",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fc49dc522841101c25dbe7ffe222b64a896b5ab",
          "message": "chore: update years in all licenses (#3665)",
          "timestamp": "2021-03-30T21:45:13+02:00",
          "tree_id": "b7b89103db86839919011cd9ec3f9f4fcbc7b481",
          "url": "https://github.com/gierlachg/tokio/commit/8fc49dc522841101c25dbe7ffe222b64a896b5ab"
        },
        "date": 1617173641960,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17702,
            "range": "± 6521",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1125,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 650,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 18522,
            "range": "± 8887",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1135,
            "range": "± 80",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@lucaszanella.com",
            "name": "Lucas Zanela",
            "username": "lucaszanella"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0074b963b8ef02308e6367c8edd5c9d210c9038d",
          "message": "doc: add features = \"full\" to readme (#3680)",
          "timestamp": "2021-04-06T11:03:21+02:00",
          "tree_id": "311075a61ef9a0e34f66c0e8b7b2004beab39280",
          "url": "https://github.com/gierlachg/tokio/commit/0074b963b8ef02308e6367c8edd5c9d210c9038d"
        },
        "date": 1617702239063,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14521,
            "range": "± 4610",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 979,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 576,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14403,
            "range": "± 3281",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1023,
            "range": "± 168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "baoyachi. Aka Rust Hairy crabs",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cab4a592ac1f122a988b8a81a235bb4eccb22db7",
          "message": "chore: update version in README.md (#3698)",
          "timestamp": "2021-04-13T16:17:14+09:00",
          "tree_id": "2e4adee4ef6d23e792a4515550adfb47976f3dad",
          "url": "https://github.com/gierlachg/tokio/commit/cab4a592ac1f122a988b8a81a235bb4eccb22db7"
        },
        "date": 1618307479936,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16606,
            "range": "± 5943",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1121,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 652,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16749,
            "range": "± 6075",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1121,
            "range": "± 135",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ecameron@bluecatnetworks.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9eeec039f200c42099e0471f2a216a679dce397e",
          "message": "util: make UdpFramed take Borrow<UdpSocket> (#3451)",
          "timestamp": "2021-04-14T20:16:23+02:00",
          "tree_id": "04ee3c7c8df16f2004d778a5094b2064a95f6f04",
          "url": "https://github.com/gierlachg/tokio/commit/9eeec039f200c42099e0471f2a216a679dce397e"
        },
        "date": 1618487450384,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13985,
            "range": "± 4192",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1127,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 622,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14074,
            "range": "± 3430",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1074,
            "range": "± 321",
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
      },
      {
        "commit": {
          "author": {
            "email": "moritz.gunz@gmail.com",
            "name": "Moritz Gunz",
            "username": "NeoLegends"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "227b3e0d9c5276a5ce6a69405436418cd5515f39",
          "message": "chore: avoid allocation if PollSemaphore is unused (#3634)",
          "timestamp": "2021-03-22T17:02:30+01:00",
          "tree_id": "3d19e1a59af025c38b91b4869439fc7d6db50d81",
          "url": "https://github.com/gierlachg/tokio/commit/227b3e0d9c5276a5ce6a69405436418cd5515f39"
        },
        "date": 1616443415374,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 952,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14735,
            "range": "± 3511",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1054,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14820,
            "range": "± 4419",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 546,
            "range": "± 49",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "50183564+nylonicious@users.noreply.github.com",
            "name": "Nylonicious",
            "username": "nylonicious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fc49dc522841101c25dbe7ffe222b64a896b5ab",
          "message": "chore: update years in all licenses (#3665)",
          "timestamp": "2021-03-30T21:45:13+02:00",
          "tree_id": "b7b89103db86839919011cd9ec3f9f4fcbc7b481",
          "url": "https://github.com/gierlachg/tokio/commit/8fc49dc522841101c25dbe7ffe222b64a896b5ab"
        },
        "date": 1617173656455,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1074,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17072,
            "range": "± 6773",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1103,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15867,
            "range": "± 8810",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 584,
            "range": "± 81",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@lucaszanella.com",
            "name": "Lucas Zanela",
            "username": "lucaszanella"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0074b963b8ef02308e6367c8edd5c9d210c9038d",
          "message": "doc: add features = \"full\" to readme (#3680)",
          "timestamp": "2021-04-06T11:03:21+02:00",
          "tree_id": "311075a61ef9a0e34f66c0e8b7b2004beab39280",
          "url": "https://github.com/gierlachg/tokio/commit/0074b963b8ef02308e6367c8edd5c9d210c9038d"
        },
        "date": 1617702254210,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1147,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 18213,
            "range": "± 8487",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1125,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17613,
            "range": "± 7391",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 616,
            "range": "± 57",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liaoymxsdl@sina.com",
            "name": "baoyachi. Aka Rust Hairy crabs",
            "username": "baoyachi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cab4a592ac1f122a988b8a81a235bb4eccb22db7",
          "message": "chore: update version in README.md (#3698)",
          "timestamp": "2021-04-13T16:17:14+09:00",
          "tree_id": "2e4adee4ef6d23e792a4515550adfb47976f3dad",
          "url": "https://github.com/gierlachg/tokio/commit/cab4a592ac1f122a988b8a81a235bb4eccb22db7"
        },
        "date": 1618307480163,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1073,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15361,
            "range": "± 5020",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1076,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15408,
            "range": "± 3217",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 604,
            "range": "± 53",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ecameron@bluecatnetworks.com",
            "name": "Evan Cameron",
            "username": "leshow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9eeec039f200c42099e0471f2a216a679dce397e",
          "message": "util: make UdpFramed take Borrow<UdpSocket> (#3451)",
          "timestamp": "2021-04-14T20:16:23+02:00",
          "tree_id": "04ee3c7c8df16f2004d778a5094b2064a95f6f04",
          "url": "https://github.com/gierlachg/tokio/commit/9eeec039f200c42099e0471f2a216a679dce397e"
        },
        "date": 1618487448953,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 977,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14241,
            "range": "± 4175",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 977,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14904,
            "range": "± 3753",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 590,
            "range": "± 52",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}