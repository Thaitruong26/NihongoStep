import { useState } from "react";
import kanjiData from "../data/kanjiData";

function Kanji() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [search, setSearch] = useState("");
    const [showAll, setShowAll] = useState(true);

    const filteredKanji = kanjiData.filter((item) => {

        const keyword = search
            .trim()
            .toLowerCase();

        if (!keyword) {
            return true;
        }

        return (
            item.kanji.includes(keyword) ||
            item.meaning
                .toLowerCase()
                .includes(keyword) ||
            item.onyomi.some(
                reading =>
                    reading
                        .toLowerCase()
                        .includes(keyword)
            ) ||
            item.kunyomi.some(
                reading =>
                    reading
                        .toLowerCase()
                        .includes(keyword)
            )
        );
    });

    const currentKanji =
        filteredKanji[currentIndex];

    const speak = (text) => {

        if (!text) {
            return;
        }

        window.speechSynthesis.cancel();

        const utterance =
            new SpeechSynthesisUtterance(text);

        utterance.lang = "ja-JP";
        utterance.rate = 0.75;

        window.speechSynthesis.speak(
            utterance
        );
    };

    const nextKanji = () => {

        if (
            currentIndex <
            filteredKanji.length - 1
        ) {
            setCurrentIndex(
                currentIndex + 1
            );
        }
    };

    const previousKanji = () => {

        if (currentIndex > 0) {
            setCurrentIndex(
                currentIndex - 1
            );
        }
    };

    const handleSearch = (value) => {
        setSearch(value);
        setCurrentIndex(0);
    };

    return (
        <div className="kanji-page">

            <div className="breadcrumb">
                <span>Học tập</span>
                <span>›</span>
                <strong>Kanji N5</strong>
            </div>

            <div className="kanji-page-header">

                <div>
                    <span className="kanji-page-label">
                        漢字
                    </span>

                    <h1>
                        Kanji N5
                    </h1>

                    <p>
                        Học Kanji cơ bản thường gặp
                        trong trình độ JLPT N5.
                    </p>
                </div>

                <div className="kanji-total">
                    <strong>
                        {kanjiData.length}
                    </strong>

                    <span>
                        Kanji
                    </span>
                </div>

            </div>

            <div className="kanji-toolbar">

                <div className="kanji-search">
                    <span>🔎</span>

                    <input
                        type="text"
                        placeholder="Tìm Kanji, nghĩa hoặc cách đọc..."
                        value={search}
                        onChange={(event) =>
                            handleSearch(
                                event.target.value
                            )
                        }
                    />
                </div>

                <button
                    className={
                        showAll
                            ? "kanji-filter active"
                            : "kanji-filter"
                    }
                    onClick={() =>
                        setShowAll(true)
                    }
                >
                    Tất cả
                </button>

            </div>

            {currentKanji && (
                <div className="kanji-learning-card">

                    <div className="kanji-card-counter">
                        {currentIndex + 1}
                        {" / "}
                        {filteredKanji.length}
                    </div>

                    <div className="kanji-main">

                        <div className="kanji-character">
                            {currentKanji.kanji}
                        </div>

                        <div className="kanji-info">

                            <h2>
                                {currentKanji.meaning}
                            </h2>

                            <div className="kanji-reading-row">

                                <div className="kanji-reading">
                                    <span>
                                        Âm On
                                    </span>

                                    <strong>
                                        {currentKanji.onyomi.join(
                                            " ・ "
                                        )}
                                    </strong>
                                </div>

                                <div className="kanji-reading">
                                    <span>
                                        Âm Kun
                                    </span>

                                    <strong>
                                        {currentKanji.kunyomi.join(
                                            " ・ "
                                        )}
                                    </strong>
                                </div>

                            </div>

                            <div className="kanji-strokes">
                                <span>
                                    Số nét
                                </span>

                                <strong>
                                    {currentKanji.strokeCount}
                                </strong>
                            </div>

                            <button
                                className="kanji-speak-button"
                                onClick={() =>
                                    speak(
                                        currentKanji.kanji
                                    )
                                }
                            >
                                🔊 Nghe cách đọc
                            </button>

                        </div>

                    </div>

                    <div className="kanji-vocabulary">

                        <div className="kanji-section-title">
                            Từ vựng liên quan
                        </div>

                        <div className="kanji-vocabulary-list">

                            {currentKanji.vocabulary.map(
                                (item, index) => (
                                    <div
                                        className="kanji-vocabulary-item"
                                        key={index}
                                    >

                                        <div>
                                            <strong>
                                                {item.word}
                                            </strong>

                                            <span>
                                                {item.reading}
                                            </span>
                                        </div>

                                        <span>
                                            {item.meaning}
                                        </span>

                                        <button
                                            onClick={() =>
                                                speak(
                                                    item.reading
                                                )
                                            }
                                        >
                                            🔊
                                        </button>

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                    <div className="kanji-navigation">

                        <button
                            onClick={previousKanji}
                            disabled={
                                currentIndex === 0
                            }
                        >
                            ← Kanji trước
                        </button>

                        <button
                            onClick={nextKanji}
                            disabled={
                                currentIndex ===
                                filteredKanji.length - 1
                            }
                        >
                            Kanji tiếp theo →
                        </button>

                    </div>

                </div>
            )}

            {!currentKanji && (
                <div className="kanji-empty">
                    <h2>
                        Không tìm thấy Kanji
                    </h2>

                    <p>
                        Hãy thử từ khóa khác.
                    </p>
                </div>
            )}

            <div className="kanji-list-section">

                <div className="kanji-section-header">
                    <div>
                        <h2>
                            Danh sách Kanji N5
                        </h2>

                        <p>
                            Chọn một Kanji để học.
                        </p>
                    </div>
                </div>

                <div className="kanji-grid">

                    {filteredKanji.map(
                        (item, index) => (
                            <button
                                className={
                                    index === currentIndex
                                        ? "kanji-mini-card active"
                                        : "kanji-mini-card"
                                }
                                key={item.id}
                                onClick={() =>
                                    setCurrentIndex(
                                        index
                                    )
                                }
                            >

                                <span className="kanji-mini-character">
                                    {item.kanji}
                                </span>

                                <span className="kanji-mini-meaning">
                                    {item.meaning}
                                </span>

                                <span className="kanji-mini-reading">
                                    {item.kunyomi[0]}
                                </span>

                            </button>
                        )
                    )}

                </div>

            </div>

        </div>
    );
}

export default Kanji;