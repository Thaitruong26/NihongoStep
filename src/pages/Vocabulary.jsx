import { useMemo, useState } from "react";

import vocabularyData from "../data/vocabularyData";
import lessonData from "../data/lessonData";


function Vocabulary({
    selectedLessonId,
    onOpenLesson
}) {

    const [searchText, setSearchText] = useState("");

    const [selectedLesson, setSelectedLesson] =
        useState("all");

    const [statusFilter, setStatusFilter] =
        useState("all");

    const [rememberedWords, setRememberedWords] =
        useState([]);


    // =========================
    // LỌC TỪ VỰNG
    // =========================

    const filteredWords = useMemo(() => {

        return vocabularyData.filter((word) => {

            const search =
                searchText
                    .trim()
                    .toLowerCase();


            const matchesSearch =
                search === "" ||
                word.hiragana
                    .toLowerCase()
                    .includes(search) ||
                word.kanji
                    .toLowerCase()
                    .includes(search) ||
                word.romaji
                    .toLowerCase()
                    .includes(search) ||
                word.meaning
                    .toLowerCase()
                    .includes(search);


            const matchesLesson =
                selectedLesson === "all" ||
                word.lesson === Number(
                    selectedLesson
                );


            const isRemembered =
                rememberedWords.includes(word.id);


            const matchesStatus =
                statusFilter === "all" ||
                (
                    statusFilter === "remembered" &&
                    isRemembered
                ) ||
                (
                    statusFilter === "unlearned" &&
                    !isRemembered
                );


            return (
                matchesSearch &&
                matchesLesson &&
                matchesStatus
            );

        });

    }, [
        searchText,
        selectedLesson,
        statusFilter,
        rememberedWords
    ]);


    // =========================
    // THỐNG KÊ
    // =========================

    const totalWords = vocabularyData.length;

    const rememberedCount =
        rememberedWords.length;


    const progress =
        totalWords === 0
            ? 0
            : Math.round(
                (
                    rememberedCount /
                    totalWords
                ) * 100
            );


    // =========================
    // MỞ BÀI HỌC
    // =========================

    const handleOpenLesson = () => {

        if (selectedLesson !== "all") {

            onOpenLesson(
                Number(selectedLesson)
            );

            return;
        }


        onOpenLesson(
            Number(selectedLessonId) || 1
        );

    };


    return (

        <div className="vocabulary-page">


            {/* =================================
                HEADER
            ================================= */}

            <div className="vocabulary-page-header">

                <div>

                    <div className="page-eyebrow">
                        TỪ VỰNG N5
                    </div>

                    <h1>
                        Từ vựng tiếng Nhật
                    </h1>

                    <p>
                        Học và ghi nhớ từ vựng
                        theo từng bài học.
                    </p>

                </div>


                <button
                    className="vocabulary-study-button"
                    onClick={handleOpenLesson}
                >
                    📖 Học từ vựng
                </button>

            </div>


            {/* =================================
                SUMMARY
            ================================= */}

            <div className="vocabulary-summary">

                <div className="vocabulary-summary-main">

                    <div className="vocabulary-summary-icon">
                        📚
                    </div>

                    <div>

                        <strong>
                            {rememberedCount}
                        </strong>

                        <span>
                            / {totalWords} từ đã nhớ
                        </span>

                    </div>

                </div>


                <div className="vocabulary-summary-progress">

                    <div className="vocabulary-summary-bar">

                        <div
                            style={{
                                width: `${progress}%`
                            }}
                        />

                    </div>

                    <span>
                        {progress}%
                    </span>

                </div>

            </div>


            {/* =================================
                FILTER
            ================================= */}

            <div className="vocabulary-filter">

                <div className="vocabulary-search">

                    <span>
                        🔎
                    </span>

                    <input
                        type="text"
                        placeholder="Tìm từ vựng..."
                        value={searchText}
                        onChange={(event) =>
                            setSearchText(
                                event.target.value
                            )
                        }
                    />

                </div>


                <select
                    value={selectedLesson}
                    onChange={(event) =>
                        setSelectedLesson(
                            event.target.value
                        )
                    }
                >

                    <option value="all">
                        Tất cả bài học
                    </option>

                    {lessonData.map((lesson) => (

                        <option
                            key={lesson.id}
                            value={lesson.id}
                        >
                            {lesson.name}
                        </option>

                    ))}

                </select>


                <select
                    value={statusFilter}
                    onChange={(event) =>
                        setStatusFilter(
                            event.target.value
                        )
                    }
                >

                    <option value="all">
                        Tất cả trạng thái
                    </option>

                    <option value="remembered">
                        Đã nhớ
                    </option>

                    <option value="unlearned">
                        Chưa học
                    </option>

                </select>


                {(searchText !== "" ||
                    selectedLesson !== "all" ||
                    statusFilter !== "all") && (

                        <button
                            className="clear-filter-button"
                            onClick={() => {

                                setSearchText("");

                                setSelectedLesson("all");

                                setStatusFilter("all");

                            }}
                        >
                            Xóa bộ lọc
                        </button>

                    )}

            </div>


            {/* =================================
                RESULT HEADER
            ================================= */}

            <div className="vocabulary-result-header">

                <span>
                    {filteredWords.length} từ
                </span>

                <span>
                    Tổng cộng {totalWords} từ
                </span>

            </div>


            {/* =================================
                TABLE
            ================================= */}

            <div className="vocabulary-table-card">

                <div className="vocabulary-table-header">

                    <span>
                        #
                    </span>

                    <span>
                        Từ vựng
                    </span>

                    <span>
                        Kanji
                    </span>

                    <span>
                        Romaji
                    </span>

                    <span>
                        Nghĩa
                    </span>

                    <span>
                        Trạng thái
                    </span>

                </div>


                {filteredWords.map(
                    (word, index) => {

                        const isRemembered =
                            rememberedWords.includes(
                                word.id
                            );


                        return (

                            <div
                                className="vocabulary-row"
                                key={word.id}
                            >

                                <span className="vocabulary-row-number">
                                    {index + 1}
                                </span>


                                <span className="vocabulary-japanese">
                                    {word.hiragana}
                                </span>


                                <span className="vocabulary-kanji-cell">
                                    {word.kanji}
                                </span>


                                <span className="vocabulary-romaji-cell">
                                    {word.romaji}
                                </span>


                                <span className="vocabulary-meaning-cell">
                                    {word.meaning}
                                </span>


                                <span>

                                    <button
                                        className={
                                            isRemembered
                                                ? "word-status remembered"
                                                : "word-status"
                                        }
                                        onClick={() => {

                                            if (
                                                isRemembered
                                            ) {

                                                setRememberedWords(
                                                    rememberedWords.filter(
                                                        id =>
                                                            id !== word.id
                                                    )
                                                );

                                            } else {

                                                setRememberedWords([
                                                    ...rememberedWords,
                                                    word.id
                                                ]);

                                            }

                                        }}
                                    >

                                        {isRemembered
                                            ? "✓ Đã nhớ"
                                            : "Chưa học"
                                        }

                                    </button>

                                </span>

                            </div>

                        );

                    }
                )}


                {filteredWords.length === 0 && (

                    <div className="vocabulary-empty">

                        <div>
                            🔎
                        </div>

                        <h3>
                            Không tìm thấy từ vựng
                        </h3>

                        <p>
                            Hãy thử thay đổi từ khóa
                            hoặc bộ lọc.
                        </p>

                    </div>

                )}

            </div>


            {/* =================================
                BOTTOM INFO
            ================================= */}

            <div className="vocabulary-bottom-info">

                Hiển thị {filteredWords.length}
                {" / "}
                {totalWords} từ vựng

            </div>

        </div>

    );
}

export default Vocabulary;