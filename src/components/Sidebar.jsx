import lessonData from "../data/lessonData";
import vocabularyData from "../data/vocabularyData";

function Sidebar({
    selectedLessonId,
    currentPage,
    onLesson,
    onVocabulary,
    onKana,
    onKanji,
    onGrammar
}) {

    const totalVocabulary =
        vocabularyData.length;

    return (
        <aside className="sidebar">

            <div className="sidebar-progress">

                <div className="progress-header">

                    <span>
                        Tiến độ của bạn
                    </span>

                    <span>
                        0%
                    </span>

                </div>

                <div className="progress-number">

                    0

                    <span>
                        / {totalVocabulary} từ
                    </span>

                </div>

                <div className="progress-bar">

                    <div className="progress-fill" />

                </div>

                <button className="progress-button">
                    Xem tiến độ
                </button>

            </div>

            <div className="sidebar-search">

                <span>
                    🔎
                </span>

                <input
                    type="text"
                    placeholder="Tìm bài học..."
                />

            </div>

            <div className="course-menu">

                <div className="course-section">

                    <button
                        className={
                            currentPage === "kana"
                                ? "course-title active-section"
                                : "course-title"
                        }
                        onClick={onKana}
                    >
                        <span>
                            あ
                        </span>

                        Hiragana / Katakana
                    </button>

                </div>

                <div className="course-section">

                    <button
                        className={
                            currentPage === "vocabulary" ||
                                currentPage === "lesson"
                                ? "course-title active-section"
                                : "course-title"
                        }
                        onClick={onVocabulary}
                    >
                        <span>
                            📚
                        </span>

                        Từ vựng N5
                    </button>

                    <div className="lesson-list">

                        {lessonData.map((lesson) => {

                            const lessonWordCount =
                                vocabularyData.filter(
                                    word =>
                                        word.lesson ===
                                        lesson.id
                                ).length;

                            return (
                                <button
                                    key={lesson.id}
                                    className={
                                        currentPage === "lesson" &&
                                            selectedLessonId === lesson.id
                                            ? "lesson active"
                                            : "lesson"
                                    }
                                    onClick={() =>
                                        onLesson(
                                            lesson.id
                                        )
                                    }
                                >

                                    <span className="lesson-number">
                                        {String(
                                            lesson.id
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>

                                    <span>
                                        {lesson.name.replace(
                                            /^Bài \d+:\s*/,
                                            ""
                                        )}
                                    </span>

                                    {lessonWordCount > 0 && (
                                        <span
                                            style={{
                                                marginLeft:
                                                    "auto",
                                                fontSize:
                                                    "10px",
                                                color:
                                                    "#98a2b3"
                                            }}
                                        >
                                            {
                                                lessonWordCount
                                            }
                                        </span>
                                    )}

                                </button>
                            );
                        })}

                    </div>

                </div>

                <div className="course-section">

                    <button
                        className={
                            currentPage === "kanji"
                                ? "course-title active-section"
                                : "course-title"
                        }
                        onClick={onKanji}
                    >
                        <span>
                            漢
                        </span>

                        Kanji N5
                    </button>

                </div>

                <div className="course-section">

                    <button
                        className={
                            currentPage === "grammar"
                                ? "course-title active-section"
                                : "course-title"
                        }
                        onClick={onGrammar}
                    >
                        <span>
                            文
                        </span>

                        Ngữ pháp N5
                    </button>

                </div>

            </div>

        </aside>
    );
}

export default Sidebar;