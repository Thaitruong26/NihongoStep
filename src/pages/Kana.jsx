import { useMemo, useState } from "react";
import kanaData from "../data/kanaData";

function Kana() {

    const [kanaType, setKanaType] =
        useState("hiragana");

    const [currentIndex, setCurrentIndex] =
        useState(0);

    const [search, setSearch] =
        useState("");

    const filteredKana = useMemo(() => {

        return kanaData.filter((item) => {

            if (item.type !== kanaType) {
                return false;
            }

            const keyword =
                search.trim().toLowerCase();

            if (!keyword) {
                return true;
            }

            return (
                item.character.includes(keyword) ||
                item.romaji
                    .toLowerCase()
                    .includes(keyword)
            );
        });

    }, [kanaType, search]);

    const currentKana =
        filteredKana[currentIndex];

    const changeKanaType = (type) => {

        setKanaType(type);
        setCurrentIndex(0);
        setSearch("");
    };

    const previousKana = () => {

        if (currentIndex > 0) {
            setCurrentIndex(
                currentIndex - 1
            );
        }
    };

    const nextKana = () => {

        if (
            currentIndex <
            filteredKana.length - 1
        ) {
            setCurrentIndex(
                currentIndex + 1
            );
        }
    };

    const speakKana = (kana) => {

        if (!kana) {
            return;
        }

        window.speechSynthesis.cancel();

        const utterance =
            new SpeechSynthesisUtterance(
                kana.character
            );

        utterance.lang = "ja-JP";
        utterance.rate = 0.7;
        utterance.pitch = 1;

        window.speechSynthesis.speak(
            utterance
        );
    };

    return (
        <div className="kana-page">

            <div className="kana-header">

                <div>

                    <span className="kana-label">
                        日本語
                    </span>

                    <h1>
                        Hiragana & Katakana
                    </h1>

                    <p>
                        Học bảng chữ cái tiếng Nhật
                        từ cơ bản đến thành thạo.
                    </p>

                </div>

                <div className="kana-total">

                    <strong>
                        46
                    </strong>

                    <span>
                        chữ cơ bản
                    </span>

                </div>

            </div>

            <div className="kana-tabs">

                <button
                    className={
                        kanaType === "hiragana"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        changeKanaType(
                            "hiragana"
                        )
                    }
                >
                    あ Hiragana
                </button>

                <button
                    className={
                        kanaType === "katakana"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        changeKanaType(
                            "katakana"
                        )
                    }
                >
                    ア Katakana
                </button>

            </div>

            <div className="kana-toolbar">

                <div className="kana-search">

                    <span>
                        🔎
                    </span>

                    <input
                        type="text"
                        placeholder="Tìm chữ hoặc Romaji..."
                        value={search}
                        onChange={(event) => {
                            setSearch(
                                event.target.value
                            );
                            setCurrentIndex(0);
                        }}
                    />

                </div>

                <div className="kana-count">
                    {filteredKana.length} chữ
                </div>

            </div>

            {currentKana ? (

                <div className="kana-learning-card">

                    <div className="kana-counter">
                        {currentIndex + 1}
                        {" / "}
                        {filteredKana.length}
                    </div>

                    <div className="kana-main">

                        <div className="kana-character">
                            {currentKana.character}
                        </div>

                        <div className="kana-info">

                            <span className="kana-type-label">
                                {kanaType === "hiragana"
                                    ? "HIRAGANA"
                                    : "KATAKANA"}
                            </span>

                            <h2>
                                {currentKana.character}
                            </h2>

                            <div className="kana-romaji">
                                {currentKana.romaji}
                            </div>

                            <div className="kana-pronunciation">

                                <span>
                                    Cách đọc
                                </span>

                                <strong>
                                    /{currentKana.pronunciation}/
                                </strong>

                            </div>

                            <button
                                className="kana-speak-button"
                                onClick={() =>
                                    speakKana(
                                        currentKana
                                    )
                                }
                            >
                                🔊 Nghe phát âm
                            </button>

                        </div>

                    </div>

                    <div className="kana-tip">

                        <span>
                            💡
                        </span>

                        <p>
                            Hãy đọc to chữ này
                            nhiều lần để ghi nhớ
                            mặt chữ và cách phát âm.
                        </p>

                    </div>

                    <div className="kana-navigation">

                        <button
                            onClick={
                                previousKana
                            }
                            disabled={
                                currentIndex === 0
                            }
                        >
                            ← Chữ trước
                        </button>

                        <button
                            onClick={
                                nextKana
                            }
                            disabled={
                                currentIndex ===
                                filteredKana.length - 1
                            }
                        >
                            Chữ tiếp theo →
                        </button>

                    </div>

                </div>

            ) : (

                <div className="kana-empty">

                    <h2>
                        Không tìm thấy chữ
                    </h2>

                    <p>
                        Hãy thử tìm kiếm bằng
                        Hiragana hoặc Romaji.
                    </p>

                </div>

            )}

            <div className="kana-table-section">

                <div className="kana-section-header">

                    <div>
                        <h2>
                            Bảng chữ cái{" "}
                            {kanaType === "hiragana"
                                ? "Hiragana"
                                : "Katakana"}
                        </h2>

                        <p>
                            Chọn một chữ để học.
                        </p>
                    </div>

                </div>

                <div className="kana-grid">

                    {filteredKana.map(
                        (kana, index) => (

                            <button
                                key={kana.id}
                                className={
                                    index === currentIndex
                                        ? "kana-mini-card active"
                                        : "kana-mini-card"
                                }
                                onClick={() =>
                                    setCurrentIndex(
                                        index
                                    )
                                }
                            >

                                <span className="kana-mini-character">
                                    {kana.character}
                                </span>

                                <strong>
                                    {kana.romaji}
                                </strong>

                                <span className="kana-mini-sound">
                                    🔊
                                </span>

                            </button>

                        )
                    )}

                </div>

            </div>

        </div>
    );
}

export default Kana;