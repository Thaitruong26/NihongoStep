const kanjiData = [
    {
        id: 1,
        kanji: "日",
        onyomi: ["ニチ", "ジツ"],
        kunyomi: ["ひ", "か"],
        meaning: "ngày, mặt trời",
        strokeCount: 4,
        vocabulary: [
            {
                word: "日本",
                reading: "にほん",
                meaning: "Nhật Bản"
            },
            {
                word: "日曜日",
                reading: "にちようび",
                meaning: "Chủ nhật"
            },
            {
                word: "毎日",
                reading: "まいにち",
                meaning: "mỗi ngày"
            }
        ]
    },
    {
        id: 2,
        kanji: "月",
        onyomi: ["ゲツ", "ガツ"],
        kunyomi: ["つき"],
        meaning: "tháng, mặt trăng",
        strokeCount: 4,
        vocabulary: [
            {
                word: "月曜日",
                reading: "げつようび",
                meaning: "Thứ hai"
            },
            {
                word: "一月",
                reading: "いちがつ",
                meaning: "tháng một"
            },
            {
                word: "月",
                reading: "つき",
                meaning: "mặt trăng"
            }
        ]
    },
    {
        id: 3,
        kanji: "火",
        onyomi: ["カ"],
        kunyomi: ["ひ", "ほ"],
        meaning: "lửa",
        strokeCount: 4,
        vocabulary: [
            {
                word: "火曜日",
                reading: "かようび",
                meaning: "Thứ ba"
            },
            {
                word: "火",
                reading: "ひ",
                meaning: "lửa"
            }
        ]
    },
    {
        id: 4,
        kanji: "水",
        onyomi: ["スイ"],
        kunyomi: ["みず"],
        meaning: "nước",
        strokeCount: 4,
        vocabulary: [
            {
                word: "水曜日",
                reading: "すいようび",
                meaning: "Thứ tư"
            },
            {
                word: "水",
                reading: "みず",
                meaning: "nước"
            }
        ]
    },
    {
        id: 5,
        kanji: "木",
        onyomi: ["モク", "ボク"],
        kunyomi: ["き", "こ"],
        meaning: "cây, gỗ",
        strokeCount: 4,
        vocabulary: [
            {
                word: "木曜日",
                reading: "もくようび",
                meaning: "Thứ năm"
            },
            {
                word: "木",
                reading: "き",
                meaning: "cây"
            }
        ]
    },
    {
        id: 6,
        kanji: "金",
        onyomi: ["キン", "コン"],
        kunyomi: ["かね"],
        meaning: "vàng, tiền",
        strokeCount: 8,
        vocabulary: [
            {
                word: "金曜日",
                reading: "きんようび",
                meaning: "Thứ sáu"
            },
            {
                word: "お金",
                reading: "おかね",
                meaning: "tiền"
            }
        ]
    },
    {
        id: 7,
        kanji: "土",
        onyomi: ["ド", "ト"],
        kunyomi: ["つち"],
        meaning: "đất",
        strokeCount: 3,
        vocabulary: [
            {
                word: "土曜日",
                reading: "どようび",
                meaning: "Thứ bảy"
            },
            {
                word: "土",
                reading: "つち",
                meaning: "đất"
            }
        ]
    },
    {
        id: 8,
        kanji: "人",
        onyomi: ["ジン", "ニン"],
        kunyomi: ["ひと"],
        meaning: "người",
        strokeCount: 2,
        vocabulary: [
            {
                word: "日本人",
                reading: "にほんじん",
                meaning: "người Nhật"
            },
            {
                word: "一人",
                reading: "ひとり",
                meaning: "một người"
            },
            {
                word: "二人",
                reading: "ふたり",
                meaning: "hai người"
            }
        ]
    },
    {
        id: 9,
        kanji: "子",
        onyomi: ["シ"],
        kunyomi: ["こ"],
        meaning: "con, trẻ em",
        strokeCount: 3,
        vocabulary: [
            {
                word: "子ども",
                reading: "こども",
                meaning: "trẻ em"
            },
            {
                word: "男の子",
                reading: "おとこのこ",
                meaning: "bé trai"
            }
        ]
    },
    {
        id: 10,
        kanji: "女",
        onyomi: ["ジョ"],
        kunyomi: ["おんな", "め"],
        meaning: "nữ, phụ nữ",
        strokeCount: 3,
        vocabulary: [
            {
                word: "女の人",
                reading: "おんなのひと",
                meaning: "phụ nữ"
            },
            {
                word: "女の子",
                reading: "おんなのこ",
                meaning: "bé gái"
            }
        ]
    },
    {
        id: 11,
        kanji: "男",
        onyomi: ["ダン", "ナン"],
        kunyomi: ["おとこ"],
        meaning: "nam, đàn ông",
        strokeCount: 7,
        vocabulary: [
            {
                word: "男の人",
                reading: "おとこのひと",
                meaning: "đàn ông"
            },
            {
                word: "男の子",
                reading: "おとこのこ",
                meaning: "bé trai"
            }
        ]
    },
    {
        id: 12,
        kanji: "山",
        onyomi: ["サン"],
        kunyomi: ["やま"],
        meaning: "núi",
        strokeCount: 3,
        vocabulary: [
            {
                word: "山",
                reading: "やま",
                meaning: "núi"
            },
            {
                word: "富士山",
                reading: "ふじさん",
                meaning: "núi Phú Sĩ"
            }
        ]
    },
    {
        id: 13,
        kanji: "川",
        onyomi: ["セン"],
        kunyomi: ["かわ"],
        meaning: "sông",
        strokeCount: 3,
        vocabulary: [
            {
                word: "川",
                reading: "かわ",
                meaning: "sông"
            }
        ]
    },
    {
        id: 14,
        kanji: "田",
        onyomi: ["デン"],
        kunyomi: ["た"],
        meaning: "ruộng",
        strokeCount: 5,
        vocabulary: [
            {
                word: "田中",
                reading: "たなか",
                meaning: "Tanaka"
            },
            {
                word: "田んぼ",
                reading: "たんぼ",
                meaning: "ruộng lúa"
            }
        ]
    },
    {
        id: 15,
        kanji: "口",
        onyomi: ["コウ", "ク"],
        kunyomi: ["くち"],
        meaning: "miệng",
        strokeCount: 3,
        vocabulary: [
            {
                word: "口",
                reading: "くち",
                meaning: "miệng"
            }
        ]
    },
    {
        id: 16,
        kanji: "目",
        onyomi: ["モク", "ボク"],
        kunyomi: ["め"],
        meaning: "mắt",
        strokeCount: 5,
        vocabulary: [
            {
                word: "目",
                reading: "め",
                meaning: "mắt"
            },
            {
                word: "一つ目",
                reading: "ひとつめ",
                meaning: "thứ nhất"
            }
        ]
    },
    {
        id: 17,
        kanji: "耳",
        onyomi: ["ジ"],
        kunyomi: ["みみ"],
        meaning: "tai",
        strokeCount: 6,
        vocabulary: [
            {
                word: "耳",
                reading: "みみ",
                meaning: "tai"
            }
        ]
    },
    {
        id: 18,
        kanji: "手",
        onyomi: ["シュ"],
        kunyomi: ["て"],
        meaning: "tay",
        strokeCount: 4,
        vocabulary: [
            {
                word: "手",
                reading: "て",
                meaning: "tay"
            },
            {
                word: "上手",
                reading: "じょうず",
                meaning: "giỏi"
            }
        ]
    },
    {
        id: 19,
        kanji: "足",
        onyomi: ["ソク"],
        kunyomi: ["あし", "た"],
        meaning: "chân, đủ",
        strokeCount: 7,
        vocabulary: [
            {
                word: "足",
                reading: "あし",
                meaning: "chân"
            },
            {
                word: "足りる",
                reading: "たりる",
                meaning: "đủ"
            }
        ]
    },
    {
        id: 20,
        kanji: "力",
        onyomi: ["リョク", "リキ"],
        kunyomi: ["ちから"],
        meaning: "sức mạnh",
        strokeCount: 2,
        vocabulary: [
            {
                word: "力",
                reading: "ちから",
                meaning: "sức mạnh"
            }
        ]
    }
];

export default kanjiData;