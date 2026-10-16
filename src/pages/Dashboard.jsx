import { useCallback, useEffect, useState } from "react";

import roadmapData from "../data/roadmapData";
import vocabularyData from "../data/vocabularyData";
import kanjiData from "../data/kanjiData";

import { getAllLearningProgress } from "../utils/learningProgress";

const ROADMAP_STORAGE_KEY = "nihongostep_roadmap_completed";

function readCompletedRoadmapIds() {
    try {
        const saved = localStorage.getItem(
            ROADMAP_STORAGE_KEY
        );

        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

function Dashboard({
    onContinueLearning,
    onOpenPage
}) {
    const [completedIds, setCompletedIds] = useState(
        readCompletedRoadmapIds
    );

    const [learningProgress, setLearningProgress] =
        useState(getAllLearningProgress);

    const syncProgress = useCallback(() => {
        setCompletedIds(readCompletedRoadmapIds());
        setLearningProgress(getAllLearningProgress());
    }, []);

    useEffect(() => {
        syncProgress();

        window.addEventListener("storage", syncProgress);
        window.addEventListener("focus", syncProgress);

        return () => {
            window.removeEventListener("storage", syncProgress);
            window.removeEventListener("focus", syncProgress);
        };
    }, [syncProgress]);

    // Tiến độ lộ trình
    const completedCount = roadmapData.filter(
        item => completedIds.includes(item.id)
    ).length;

    const roadmapPercent = roadmapData.length
        ? Math.round(
            (completedCount / roadmapData.length) * 100
        )
        : 0;

    // Tổng hợp dữ liệu học từ vựng
    const progressEntries = Object.values(learningProgress);

    const rememberedIds = new Set(
        progressEntries.flatMap(item =>
            Array.isArray(item.rememberedWordIds)
                ? item.rememberedWordIds
                : []
        )
    );

    const totalRemembered = rememberedIds.size;
    const totalWords = vocabularyData.length;

    const vocabularyPercent = totalWords
        ? Math.min(
            100,
            Math.round(
                (totalRemembered / totalWords) * 100
            )
        )
        : 0;

    // Tổng hợp các lượt luyện tập
    const quizAttempts = progressEntries.flatMap(item =>
        Array.isArray(item.quizAttempts)
            ? item.quizAttempts
            : []
    );

    const listeningAttempts = progressEntries.flatMap(item =>
        Array.isArray(item.listeningAttempts)
            ? item.listeningAttempts
            : []
    );

    // Lấy kết quả mới nhất
    const getLatestAttempt = attempts => {
        if (!attempts.length) {
            return null;
        }

        return [...attempts].sort(
            (a, b) =>
                new Date(b.completedAt) -
                new Date(a.completedAt)
        )[0];
    };

    const latestQuiz = getLatestAttempt(quizAttempts);
    const latestListening = getLatestAttempt(listeningAttempts);

    // Các khu vực học tập
    const learningModules = [
        {
            title: "Hiragana & Katakana",
            description: "Học bảng chữ cái tiếng Nhật",
            icon: "あ",
            page: "kana",
            color: "mint"
        },
        {
            title: "Từ vựng N5",
            description: `${vocabularyData.length} từ mẫu hiện có`,
            icon: "語",
            page: "vocabulary",
            color: "blue"
        },
        {
            title: "Kanji N5",
            description: `${kanjiData.length} chữ mẫu hiện có`,
            icon: "漢",
            page: "kanji",
            color: "purple"
        },
        {
            title: "Ngữ pháp N5",
            description: "Học cấu trúc và ví dụ",
            icon: "文",
            page: "grammar",
            color: "orange"
        }
    ];

    return (
        <div className="dashboard-page">

            {/* Chào mừng */}
            <section className="dashboard-welcome">
                <div>
                    <span className="dashboard-eyebrow">
                        NIHONGOSTEP
                    </span>

                    <h1>
                        Tiếp tục hành trình tiếng Nhật!
                    </h1>

                    <p>
                        Học từng chút mỗi ngày để xây dựng
                        nền tảng tiếng Nhật vững chắc.
                    </p>

                    <button
                        className="dashboard-primary-button"
                        onClick={onContinueLearning}
                    >
                        Tiếp tục học →
                    </button>
                </div>

                <div className="dashboard-welcome-symbol">
                    日本語
                </div>
            </section>

            {/* Thống kê tổng quan */}
            <section className="dashboard-stats">

                <article className="dashboard-stat-card">
                    <span className="dashboard-stat-icon mint">
                        ✓
                    </span>

                    <div>
                        <span>Giai đoạn hoàn thành</span>

                        <strong>
                            {completedCount}/{roadmapData.length}
                        </strong>
                    </div>
                </article>

                <article className="dashboard-stat-card">
                    <span className="dashboard-stat-icon blue">
                        語
                    </span>

                    <div>
                        <span>Từ vựng đã nhớ</span>

                        <strong>
                            {totalRemembered}/{totalWords}
                        </strong>
                    </div>
                </article>

                <article className="dashboard-stat-card">
                    <span className="dashboard-stat-icon purple">
                        漢
                    </span>

                    <div>
                        <span>Kanji mẫu</span>

                        <strong>
                            {kanjiData.length}
                        </strong>
                    </div>
                </article>

            </section>

            {/* Tiến độ lộ trình */}
            <section className="dashboard-progress-panel">

                <div className="dashboard-section-heading">
                    <div>
                        <h2>Tổng quan lộ trình</h2>

                        <p>
                            Tiến độ dựa trên các giai đoạn
                            bạn đánh dấu hoàn thành.
                        </p>
                    </div>

                    <button
                        onClick={() => onOpenPage("roadmap")}
                    >
                        Xem lộ trình →
                    </button>
                </div>

                <div className="dashboard-progress-row">
                    <div>
                        <strong>{roadmapPercent}%</strong>

                        <span>
                            hoàn thành lộ trình
                        </span>
                    </div>

                    <span>
                        {completedCount} trên {roadmapData.length} giai đoạn
                    </span>
                </div>

                <div className="dashboard-progress-track">
                    <div
                        className="dashboard-progress-fill"
                        style={{
                            width: `${roadmapPercent}%`
                        }}
                    />
                </div>

            </section>

            {/* Tiến độ từ vựng */}
            <section className="dashboard-progress-panel">

                <div className="dashboard-section-heading">
                    <div>
                        <h2>Tiến độ học từ vựng</h2>

                        <p>
                            Số từ đã được đánh dấu “Đã nhớ”
                            trong các bài học.
                        </p>
                    </div>

                    <button
                        onClick={() => onOpenPage("vocabulary")}
                    >
                        Ôn từ vựng →
                    </button>
                </div>

                <div className="dashboard-progress-row">
                    <div>
                        <strong>{vocabularyPercent}%</strong>

                        <span>
                            từ vựng đã nhớ
                        </span>
                    </div>

                    <span>
                        {totalRemembered} trên {totalWords} từ
                    </span>
                </div>

                <div className="dashboard-progress-track">
                    <div
                        className="dashboard-progress-fill"
                        style={{
                            width: `${vocabularyPercent}%`
                        }}
                    />
                </div>

            </section>

            {/* Kết quả luyện tập gần nhất */}
            <section className="dashboard-stats">

                <article className="dashboard-stat-card">
                    <span className="dashboard-stat-icon mint">
                        ✓
                    </span>

                    <div>
                        <span>Quiz gần nhất</span>

                        <strong>
                            {latestQuiz
                                ? `${latestQuiz.score}/${latestQuiz.total}`
                                : "Chưa có"}
                        </strong>
                    </div>
                </article>

                <article className="dashboard-stat-card">
                    <span className="dashboard-stat-icon blue">
                        🔊
                    </span>

                    <div>
                        <span>Bài nghe gần nhất</span>

                        <strong>
                            {latestListening
                                ? `${latestListening.score}/${latestListening.total}`
                                : "Chưa có"}
                        </strong>
                    </div>
                </article>

            </section>

            {/* Khu vực học tập */}
            <section className="dashboard-modules-section">

                <div className="dashboard-section-heading">
                    <div>
                        <h2>Khu vực học tập</h2>

                        <p>
                            Chọn nội dung bạn muốn ôn luyện hôm nay.
                        </p>
                    </div>
                </div>

                <div className="dashboard-module-grid">

                    {learningModules.map(module => (
                        <button
                            key={module.page}
                            className="dashboard-module-card"
                            onClick={() => onOpenPage(module.page)}
                        >
                            <span
                                className={`dashboard-module-icon ${module.color}`}
                            >
                                {module.icon}
                            </span>

                            <strong>
                                {module.title}
                            </strong>

                            <span>
                                {module.description}
                            </span>

                            <span className="dashboard-module-link">
                                Mở bài học →
                            </span>
                        </button>
                    ))}

                </div>
            </section>

        </div>
    );
}

export default Dashboard;