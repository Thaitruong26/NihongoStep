import { useState } from "react";
import grammarData from "../data/grammarData";

function Grammar() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [search, setSearch] = useState("");

    const filteredGrammar = grammarData.filter(
        (item) => {

            const keyword =
                search.trim().toLowerCase();

            if (!keyword) {
                return true;
            }

            return (
                item.title
                    .toLowerCase()
                    .includes(keyword) ||
                item.pattern
                    .toLowerCase()
                    .includes(keyword) ||
                item.meaning
                    .toLowerCase()
                    .includes(keyword) ||
                item.usage
                    .toLowerCase()
                    .includes(keyword)
            );
        }
    );

    const currentGrammar =
        filteredGrammar[currentIndex];

    const speak = (text) => {

        window.speechSynthesis.cancel();

        const utterance =
            new SpeechSynthesisUtterance(text);

        utterance.lang = "ja-JP";
        utterance.rate = 0.75;

        window.speechSynthesis.speak(
            utterance
        );
    };

    const handleSearch = (value) => {
        setSearch(value);
        setCurrentIndex(0);
    };

    const previousGrammar = () => {

        if (currentIndex > 0) {
            setCurrentIndex(
                currentIndex - 1
            );
        }
    };

    const nextGrammar = () => {

        if (
            currentIndex <
            filteredGrammar.length - 1
        ) {
            setCurrentIndex(
                currentIndex + 1
            );
        }
    };

    return (
        <div className="grammar-page">

            <div className="breadcrumb">
                <span>Học tập</span>
                <span>›</span>
                <strong>
                    Ngữ pháp N5
                </strong>
            </div>

            <div className="grammar-page-header">

                <div>
                    <span className="grammar-label">
                        文法
                    </span>

                    <h1>
                        Ngữ pháp N5
                    </h1>

                    <p>
                        Học các mẫu câu nền tảng
                        của tiếng Nhật N5.
                    </p>
                </div>

                <div className="grammar-total">
                    <strong>
                        {grammarData.length}
                    </strong>

                    <span>
                        chủ điểm
                    </span>
                </div>

            </div>

            <div className="grammar-toolbar">

                <div className="grammar-search">

                    <span>🔎</span>

                    <input
                        type="text"
                        placeholder="Tìm chủ điểm, công thức..."
                        value={search}
                        onChange={(event) =>
                            handleSearch(
                                event.target.value
                            )
                        }
                    />

                </div>

            </div>

            {currentGrammar ? (
                <div className="grammar-learning-card">

                    <div className="grammar-counter">
                        {currentIndex + 1}
                        {" / "}
                        {filteredGrammar.length}
                    </div>

                    <div className="grammar-title-row">

                        <div>

                            <span className="grammar-number">
                                BÀI {currentGrammar.id}
                            </span>

                            <h2>
                                {currentGrammar.title}
                            </h2>

                        </div>

                        <span className="grammar-level">
                            {currentGrammar.level}
                        </span>

                    </div>

                    <div className="grammar-pattern-box">

                        <span>
                            Công thức
                        </span>

                        <strong>
                            {currentGrammar.pattern}
                        </strong>

                    </div>

                    <div className="grammar-section">

                        <h3>
                            Ý nghĩa
                        </h3>

                        <p>
                            {currentGrammar.meaning}
                        </p>

                    </div>

                    <div className="grammar-section">

                        <h3>
                            Cách dùng
                        </h3>

                        <p>
                            {currentGrammar.usage}
                        </p>

                    </div>

                    <div className="grammar-examples">

                        <h3>
                            Ví dụ
                        </h3>

                        {currentGrammar.examples.map(
                            (example, index) => (

                                <div
                                    className="grammar-example"
                                    key={index}
                                >

                                    <div className="grammar-example-main">

                                        <strong>
                                            {example.japanese}
                                        </strong>

                                        <span>
                                            {example.reading}
                                        </span>

                                    </div>

                                    <p>
                                        {example.vietnamese}
                                    </p>

                                    <button
                                        onClick={() =>
                                            speak(
                                                example.japanese
                                            )
                                        }
                                    >
                                        🔊
                                    </button>

                                </div>

                            )
                        )}

                    </div>

                    <div className="grammar-navigation">

                        <button
                            onClick={
                                previousGrammar
                            }
                            disabled={
                                currentIndex === 0
                            }
                        >
                            ← Bài trước
                        </button>

                        <button
                            onClick={
                                nextGrammar
                            }
                            disabled={
                                currentIndex ===
                                filteredGrammar.length - 1
                            }
                        >
                            Bài tiếp theo →
                        </button>

                    </div>

                </div>
            ) : (

                <div className="grammar-empty">

                    <h2>
                        Không tìm thấy ngữ pháp
                    </h2>

                    <p>
                        Hãy thử tìm kiếm với từ khóa khác.
                    </p>

                </div>

            )}

            <div className="grammar-list-section">

                <h2>
                    Danh sách ngữ pháp N5
                </h2>

                <div className="grammar-grid">

                    {filteredGrammar.map(
                        (item, index) => (

                            <button
                                key={item.id}
                                className={
                                    index === currentIndex
                                        ? "grammar-mini-card active"
                                        : "grammar-mini-card"
                                }
                                onClick={() =>
                                    setCurrentIndex(
                                        index
                                    )
                                }
                            >

                                <span className="grammar-mini-number">
                                    {String(
                                        item.id
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>

                                <strong>
                                    {item.title}
                                </strong>

                                <span>
                                    {item.meaning}
                                </span>

                            </button>

                        )
                    )}

                </div>

            </div>

        </div>
    );
}

export default Grammar;