const vocabularyData = [
    {
        id: 1,
        lesson: 1,
        hiragana: "でんわ",
        kanji: "電話",
        romaji: "denwa",
        meaning: "điện thoại",
        exampleSentence: "これは電話です。",
        exampleMeaning: "Đây là điện thoại.",
        importance: "high"
    },

    {
        id: 2,
        lesson: 1,
        hiragana: "がっこう",
        kanji: "学校",
        romaji: "gakkou",
        meaning: "trường học",
        exampleSentence: "学校へ行きます。",
        exampleMeaning: "Tôi đi đến trường.",
        importance: "high"
    },

    {
        id: 3,
        lesson: 1,
        hiragana: "びょういん",
        kanji: "病院",
        romaji: "byouin",
        meaning: "bệnh viện",
        exampleSentence: "病院へ行きます。",
        exampleMeaning: "Tôi đi đến bệnh viện.",
        importance: "high"
    },

    {
        id: 4,
        lesson: 1,
        hiragana: "でんしゃ",
        kanji: "電車",
        romaji: "densha",
        meaning: "tàu điện",
        exampleSentence: "電車で学校へ行きます。",
        exampleMeaning: "Tôi đi tàu điện đến trường.",
        importance: "high"
    },

    {
        id: 5,
        lesson: 1,
        hiragana: "ともだち",
        kanji: "友達",
        romaji: "tomodachi",
        meaning: "bạn bè",
        exampleSentence: "友達と話します。",
        exampleMeaning: "Tôi nói chuyện với bạn.",
        importance: "high"
    },

    {
        id: 6,
        lesson: 1,
        hiragana: "かぞく",
        kanji: "家族",
        romaji: "kazoku",
        meaning: "gia đình",
        exampleSentence: "家族は四人です。",
        exampleMeaning: "Gia đình có bốn người.",
        importance: "high"
    },

    {
        id: 7,
        lesson: 1,
        hiragana: "ちち",
        kanji: "父",
        romaji: "chichi",
        meaning: "bố, cha",
        exampleSentence: "父は会社員です。",
        exampleMeaning: "Bố tôi là nhân viên công ty.",
        importance: "high"
    },

    {
        id: 8,
        lesson: 1,
        hiragana: "はは",
        kanji: "母",
        romaji: "haha",
        meaning: "mẹ",
        exampleSentence: "母は料理をします。",
        exampleMeaning: "Mẹ tôi nấu ăn.",
        importance: "high"
    },

    {
        id: 9,
        lesson: 1,
        hiragana: "あに",
        kanji: "兄",
        romaji: "ani",
        meaning: "anh trai",
        exampleSentence: "兄は大学生です。",
        exampleMeaning: "Anh trai tôi là sinh viên đại học.",
        importance: "high"
    },

    {
        id: 10,
        lesson: 1,
        hiragana: "あね",
        kanji: "姉",
        romaji: "ane",
        meaning: "chị gái",
        exampleSentence: "姉は先生です。",
        exampleMeaning: "Chị gái tôi là giáo viên.",
        importance: "high"
    },

    {
        id: 11,
        lesson: 1,
        hiragana: "おとうと",
        kanji: "弟",
        romaji: "otouto",
        meaning: "em trai",
        exampleSentence: "弟は高校生です。",
        exampleMeaning: "Em trai tôi là học sinh cấp ba.",
        importance: "high"
    },

    {
        id: 12,
        lesson: 1,
        hiragana: "いもうと",
        kanji: "妹",
        romaji: "imouto",
        meaning: "em gái",
        exampleSentence: "妹は十歳です。",
        exampleMeaning: "Em gái tôi 10 tuổi.",
        importance: "high"
    },

    {
        id: 13,
        lesson: 1,
        hiragana: "おとうさん",
        kanji: "お父さん",
        romaji: "otousan",
        meaning: "bố",
        exampleSentence: "お父さんはどこですか。",
        exampleMeaning: "Bố ở đâu?",
        importance: "high"
    },

    {
        id: 14,
        lesson: 1,
        hiragana: "おかあさん",
        kanji: "お母さん",
        romaji: "okaasan",
        meaning: "mẹ",
        exampleSentence: "お母さんは料理をしています。",
        exampleMeaning: "Mẹ đang nấu ăn.",
        importance: "high"
    },

    {
        id: 15,
        lesson: 1,
        hiragana: "おにいさん",
        kanji: "お兄さん",
        romaji: "oniisan",
        meaning: "anh trai",
        exampleSentence: "お兄さんは学生です。",
        exampleMeaning: "Anh trai của bạn là sinh viên.",
        importance: "high"
    },

    {
        id: 16,
        lesson: 1,
        hiragana: "おねえさん",
        kanji: "お姉さん",
        romaji: "oneesan",
        meaning: "chị gái",
        exampleSentence: "お姉さんは会社員です。",
        exampleMeaning: "Chị gái của bạn là nhân viên công ty.",
        importance: "high"
    },

    {
        id: 17,
        lesson: 1,
        hiragana: "おとうとさん",
        kanji: "弟さん",
        romaji: "otoutosan",
        meaning: "em trai",
        exampleSentence: "弟さんは何歳ですか。",
        exampleMeaning: "Em trai của bạn bao nhiêu tuổi?",
        importance: "medium"
    },

    {
        id: 18,
        lesson: 1,
        hiragana: "いもうとさん",
        kanji: "妹さん",
        romaji: "imoutosan",
        meaning: "em gái",
        exampleSentence: "妹さんは学生ですか。",
        exampleMeaning: "Em gái của bạn là học sinh phải không?",
        importance: "medium"
    },

    {
        id: 19,
        lesson: 1,
        hiragana: "ひとり",
        kanji: "一人",
        romaji: "hitori",
        meaning: "một người",
        exampleSentence: "一人で行きます。",
        exampleMeaning: "Tôi đi một mình.",
        importance: "high"
    },

    {
        id: 20,
        lesson: 1,
        hiragana: "ふたり",
        kanji: "二人",
        romaji: "futari",
        meaning: "hai người",
        exampleSentence: "二人で食べます。",
        exampleMeaning: "Hai người cùng ăn.",
        importance: "high"
    },

    {
        id: 21,
        lesson: 1,
        hiragana: "せんせい",
        kanji: "先生",
        romaji: "sensei",
        meaning: "giáo viên",
        exampleSentence: "私は先生です。",
        exampleMeaning: "Tôi là giáo viên.",
        importance: "high"
    }
];



export default vocabularyData;