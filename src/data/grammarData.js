const grammarData = [
    {
        id: 1,
        title: "です",
        level: "N5",
        pattern: "N + です",
        meaning: "Là..., thì là...",
        usage: "Dùng để khẳng định danh tính, nghề nghiệp hoặc trạng thái của chủ thể.",
        examples: [
            {
                japanese: "わたしは学生です。",
                reading: "わたしは がくせいです。",
                vietnamese: "Tôi là sinh viên."
            },
            {
                japanese: "田中さんは先生です。",
                reading: "たなかさんは せんせいです。",
                vietnamese: "Anh Tanaka là giáo viên."
            }
        ]
    },
    {
        id: 2,
        title: "は",
        level: "N5",
        pattern: "N は N です",
        meaning: "N thì là...",
        usage: "Trợ từ は dùng để đánh dấu chủ đề của câu.",
        examples: [
            {
                japanese: "わたしは学生です。",
                reading: "わたしは がくせいです。",
                vietnamese: "Tôi là sinh viên."
            },
            {
                japanese: "これは本です。",
                reading: "これは ほんです。",
                vietnamese: "Đây là quyển sách."
            }
        ]
    },
    {
        id: 3,
        title: "か",
        level: "N5",
        pattern: "N は N ですか",
        meaning: "... có phải là ... không?",
        usage: "Đặt ở cuối câu để tạo câu hỏi.",
        examples: [
            {
                japanese: "あなたは学生ですか。",
                reading: "あなたは がくせいですか。",
                vietnamese: "Bạn là sinh viên phải không?"
            },
            {
                japanese: "これは本ですか。",
                reading: "これは ほんですか。",
                vietnamese: "Đây có phải là sách không?"
            }
        ]
    },
    {
        id: 4,
        title: "も",
        level: "N5",
        pattern: "N も N です",
        meaning: "Cũng...",
        usage: "Dùng khi muốn nói một đối tượng cũng có đặc điểm giống đối tượng đã nói trước đó.",
        examples: [
            {
                japanese: "わたしも学生です。",
                reading: "わたしも がくせいです。",
                vietnamese: "Tôi cũng là sinh viên."
            }
        ]
    },
    {
        id: 5,
        title: "の",
        level: "N5",
        pattern: "N1 の N2",
        meaning: "N2 của N1",
        usage: "Dùng để biểu thị quan hệ sở hữu hoặc bổ nghĩa cho danh từ.",
        examples: [
            {
                japanese: "これはわたしの本です。",
                reading: "これは わたしの ほんです。",
                vietnamese: "Đây là sách của tôi."
            },
            {
                japanese: "日本語の先生です。",
                reading: "にほんごの せんせいです。",
                vietnamese: "Là giáo viên tiếng Nhật."
            }
        ]
    },
    {
        id: 6,
        title: "これ・それ・あれ",
        level: "N5",
        pattern: "これ / それ / あれ",
        meaning: "Cái này / cái đó / cái kia",
        usage: "Dùng để chỉ đồ vật theo vị trí tương đối với người nói và người nghe.",
        examples: [
            {
                japanese: "これは本です。",
                reading: "これは ほんです。",
                vietnamese: "Đây là quyển sách."
            },
            {
                japanese: "それは何ですか。",
                reading: "それは なんですか。",
                vietnamese: "Cái đó là gì?"
            }
        ]
    },
    {
        id: 7,
        title: "ここ・そこ・あそこ",
        level: "N5",
        pattern: "ここ / そこ / あそこ",
        meaning: "Ở đây / ở đó / ở đằng kia",
        usage: "Dùng để chỉ địa điểm.",
        examples: [
            {
                japanese: "ここは教室です。",
                reading: "ここは きょうしつです。",
                vietnamese: "Đây là phòng học."
            },
            {
                japanese: "あそこは学校です。",
                reading: "あそこは がっこうです。",
                vietnamese: "Đằng kia là trường học."
            }
        ]
    },
    {
        id: 8,
        title: "あります・います",
        level: "N5",
        pattern: "N が あります / います",
        meaning: "Có...",
        usage: "あります dùng cho đồ vật, cây cối; います dùng cho người và động vật.",
        examples: [
            {
                japanese: "机があります。",
                reading: "つくえが あります。",
                vietnamese: "Có một cái bàn."
            },
            {
                japanese: "学生がいます。",
                reading: "がくせいが います。",
                vietnamese: "Có sinh viên."
            }
        ]
    },
    {
        id: 9,
        title: "を",
        level: "N5",
        pattern: "N を V",
        meaning: "Làm V đối với N",
        usage: "Trợ từ を đánh dấu tân ngữ trực tiếp của động từ.",
        examples: [
            {
                japanese: "ご飯を食べます。",
                reading: "ごはんを たべます。",
                vietnamese: "Tôi ăn cơm."
            },
            {
                japanese: "本を読みます。",
                reading: "ほんを よみます。",
                vietnamese: "Tôi đọc sách."
            }
        ]
    },
    {
        id: 10,
        title: "で",
        level: "N5",
        pattern: "N で V",
        meaning: "Làm V bằng / tại N",
        usage: "Dùng để chỉ phương tiện hoặc địa điểm diễn ra hành động.",
        examples: [
            {
                japanese: "電車で学校へ行きます。",
                reading: "でんしゃで がっこうへ いきます。",
                vietnamese: "Tôi đi tàu điện đến trường."
            },
            {
                japanese: "学校で勉強します。",
                reading: "がっこうで べんきょうします。",
                vietnamese: "Tôi học ở trường."
            }
        ]
    },
    {
        id: 11,
        title: "へ",
        level: "N5",
        pattern: "N へ V",
        meaning: "Đến / về phía N",
        usage: "Dùng để chỉ hướng hoặc đích đến của hành động di chuyển.",
        examples: [
            {
                japanese: "学校へ行きます。",
                reading: "がっこうへ いきます。",
                vietnamese: "Tôi đi đến trường."
            },
            {
                japanese: "日本へ行きます。",
                reading: "にほんへ いきます。",
                vietnamese: "Tôi đi Nhật Bản."
            }
        ]
    },
    {
        id: 12,
        title: "と",
        level: "N5",
        pattern: "N と V",
        meaning: "Cùng với N",
        usage: "Dùng để chỉ người cùng thực hiện hành động.",
        examples: [
            {
                japanese: "友達と話します。",
                reading: "ともだちと はなします。",
                vietnamese: "Tôi nói chuyện với bạn."
            },
            {
                japanese: "家族と行きます。",
                reading: "かぞくと いきます。",
                vietnamese: "Tôi đi cùng gia đình."
            }
        ]
    },
    {
        id: 13,
        title: "～ます",
        level: "N5",
        pattern: "Vます",
        meaning: "Thể lịch sự hiện tại / tương lai",
        usage: "Dùng để diễn tả hành động ở thể lịch sự.",
        examples: [
            {
                japanese: "毎日勉強します。",
                reading: "まいにち べんきょうします。",
                vietnamese: "Tôi học mỗi ngày."
            },
            {
                japanese: "明日行きます。",
                reading: "あした いきます。",
                vietnamese: "Ngày mai tôi sẽ đi."
            }
        ]
    },
    {
        id: 14,
        title: "～ません",
        level: "N5",
        pattern: "Vません",
        meaning: "Không làm...",
        usage: "Dạng phủ định lịch sự của động từ.",
        examples: [
            {
                japanese: "今日は勉強しません。",
                reading: "きょうは べんきょうしません。",
                vietnamese: "Hôm nay tôi không học."
            }
        ]
    },
    {
        id: 15,
        title: "～ました",
        level: "N5",
        pattern: "Vました",
        meaning: "Đã làm...",
        usage: "Dạng quá khứ khẳng định của động từ.",
        examples: [
            {
                japanese: "昨日学校へ行きました。",
                reading: "きのう がっこうへ いきました。",
                vietnamese: "Hôm qua tôi đã đi đến trường."
            }
        ]
    },
    {
        id: 16,
        title: "～ませんでした",
        level: "N5",
        pattern: "Vませんでした",
        meaning: "Đã không làm...",
        usage: "Dạng quá khứ phủ định của động từ.",
        examples: [
            {
                japanese: "昨日勉強しませんでした。",
                reading: "きのう べんきょうしませんでした。",
                vietnamese: "Hôm qua tôi đã không học."
            }
        ]
    },
    {
        id: 17,
        title: "～たいです",
        level: "N5",
        pattern: "Vたいです",
        meaning: "Muốn làm...",
        usage: "Dùng để diễn tả mong muốn của người nói.",
        examples: [
            {
                japanese: "日本へ行きたいです。",
                reading: "にほんへ いきたいです。",
                vietnamese: "Tôi muốn đi Nhật."
            }
        ]
    },
    {
        id: 18,
        title: "～てください",
        level: "N5",
        pattern: "Vてください",
        meaning: "Hãy làm...",
        usage: "Dùng để yêu cầu hoặc đề nghị ai đó làm một việc.",
        examples: [
            {
                japanese: "ちょっと待ってください。",
                reading: "ちょっと まってください。",
                vietnamese: "Hãy đợi một chút."
            },
            {
                japanese: "見てください。",
                reading: "みてください。",
                vietnamese: "Hãy nhìn."
            }
        ]
    },
    {
        id: 19,
        title: "～てもいいです",
        level: "N5",
        pattern: "Vてもいいです",
        meaning: "Được phép làm...",
        usage: "Dùng để xin phép hoặc cho phép.",
        examples: [
            {
                japanese: "ここで写真を撮ってもいいですか。",
                reading: "ここで しゃしんを とっても いいですか。",
                vietnamese: "Tôi chụp ảnh ở đây được không?"
            }
        ]
    },
    {
        id: 20,
        title: "～てはいけません",
        level: "N5",
        pattern: "Vてはいけません",
        meaning: "Không được làm...",
        usage: "Dùng để biểu thị sự cấm đoán.",
        examples: [
            {
                japanese: "ここで写真を撮ってはいけません。",
                reading: "ここで しゃしんを とっては いけません。",
                vietnamese: "Không được chụp ảnh ở đây."
            }
        ]
    }
];

export default grammarData;