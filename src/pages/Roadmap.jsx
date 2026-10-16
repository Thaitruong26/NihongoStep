import { useEffect, useState } from "react";
import roadmapData from "../data/roadmapData";

const STORAGE_KEY = "nihongostep_roadmap_completed";

function Roadmap({
    onOpenPage
}) {
    const [completedIds, setCompletedIds] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(completedIds)
        );
    }, [completedIds]);

    const completedCount = roadmapData.filter(
        item => completedIds.includes(item.id)
    ).length;

    const progress = Math.round(
        (completedCount / roadmapData.length) * 100
    );

    const toggleCompleted = (id) => {
        setCompletedIds(previous =>
            previous.includes(id)
                ? previous.filter(itemId => itemId !== id)
                : [...previous, id]
        );
    };

    return (
        <div className="roadmap-page">
            <div className="roadmap-heading">
                <div>
                    <span className="roadmap-eyebrow">
                        LEARNING PATH
                    </span>
                    <h1>Lộ trình JLPT N5</h1>
                    <p>
                        Học theo từng giai đoạn, ôn tập
                        thường xuyên và theo dõi tiến độ.
                    </p>
                </div>

                <div className="roadmap-level">
                    <strong>N5</strong>
                    <span>Sơ cấp</span>
                </div>
            </div>

            <section className="roadmap-overview">
                <div className="roadmap-overview-top">
                    <div>
                        <span>Tiến độ lộ trình</span>
                        <h2>{progress}%</h2>
                    </div>
                    <span>
                        {completedCount}/{roadmapData.length} giai đoạn
                    </span>
                </div>

                <div className="roadmap-progress-track">
                    <div
                        className="roadmap-progress-value"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </section>

            <div className="roadmap-section-title">
                <h2>Các giai đoạn học</h2>
                <p>
                    Mở nội dung để bắt đầu học hoặc đánh dấu
                    giai đoạn khi bạn đã hoàn thành.
                </p>
            </div>

            <div className="roadmap-list">
                {roadmapData.map((item, index) => {
                    const isCompleted =
                        completedIds.includes(item.id);

                    return (
                        <article
                            className={
                                isCompleted
                                    ? "roadmap-card completed"
                                    : "roadmap-card"
                            }
                            key={item.id}
                        >
                            <div className="roadmap-step">
                                {isCompleted ? "✓" : String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="roadmap-card-content">
                                <div className="roadmap-card-meta">
                                    <span>{item.category}</span>
                                    <span
                                        className={
                                            isCompleted
                                                ? "roadmap-status done"
                                                : "roadmap-status"
                                        }
                                    >
                                        {isCompleted
                                            ? "Đã hoàn thành"
                                            : "Chưa hoàn thành"}
                                    </span>
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>

                                <ul>
                                    {item.lessons.map(lesson => (
                                        <li key={lesson}>
                                            {lesson}
                                        </li>
                                    ))}
                                </ul>

                                <div className="roadmap-card-actions">
                                    <button
                                        className="roadmap-open-button"
                                        onClick={() =>
                                            onOpenPage(item.page)
                                        }
                                    >
                                        Bắt đầu học →
                                    </button>

                                    <button
                                        className="roadmap-complete-button"
                                        onClick={() =>
                                            toggleCompleted(item.id)
                                        }
                                    >
                                        {isCompleted
                                            ? "Bỏ đánh dấu"
                                            : "Đánh dấu hoàn thành"}
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Roadmap;