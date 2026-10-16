function Home({ onContinueLearning }) {

    return (
        <div className="dashboard-page">

            {/* =========================================
                WELCOME
            ========================================= */}

            <section className="dashboard-welcome">

                <div>

                    <div className="dashboard-eyebrow">
                        NIHONGOSTEP
                    </div>

                    <h1>
                        Xin chào, Thái 👋
                    </h1>

                    <p>
                        Tiếp tục hành trình chinh phục tiếng Nhật của bạn.
                    </p>

                </div>

                <button
                    className="dashboard-primary-button"
                    onClick={onContinueLearning}
                >
                    Tiếp tục học →
                </button>

            </section>


            {/* =========================================
                STATS
            ========================================= */}

            <section className="dashboard-stats">

                <div className="dashboard-stat-card">

                    <div className="dashboard-stat-icon">
                        📚
                    </div>

                    <div>

                        <span>
                            Bài học
                        </span>

                        <strong>
                            0 / 120
                        </strong>

                    </div>

                </div>


                <div className="dashboard-stat-card">

                    <div className="dashboard-stat-icon">
                        🧠
                    </div>

                    <div>

                        <span>
                            Từ đã nhớ
                        </span>

                        <strong>
                            0
                        </strong>

                    </div>

                </div>


                <div className="dashboard-stat-card">

                    <div className="dashboard-stat-icon">
                        🎯
                    </div>

                    <div>

                        <span>
                            Điểm trung bình
                        </span>

                        <strong>
                            0%
                        </strong>

                    </div>

                </div>


                <div className="dashboard-stat-card">

                    <div className="dashboard-stat-icon">
                        🔥
                    </div>

                    <div>

                        <span>
                            Chuỗi học
                        </span>

                        <strong>
                            0 ngày
                        </strong>

                    </div>

                </div>

            </section>


            {/* =========================================
                MAIN GRID
            ========================================= */}

            <div className="dashboard-grid">


                {/* =====================================
                    CONTINUE LEARNING
                ===================================== */}

                <section className="dashboard-card continue-card">

                    <div className="dashboard-card-header">

                        <div>

                            <span className="dashboard-card-label">
                                TIẾP TỤC HỌC
                            </span>

                            <h2>
                                Bài 1: Gia đình
                            </h2>

                        </div>

                        <span className="dashboard-level">
                            N5
                        </span>

                    </div>


                    <p className="continue-description">
                        Học 20 từ vựng tiếng Nhật về chủ đề gia đình.
                    </p>


                    <div className="continue-progress">

                        <div className="continue-progress-top">

                            <span>
                                Tiến độ bài học
                            </span>

                            <strong>
                                0%
                            </strong>

                        </div>


                        <div className="continue-progress-bar">

                            <div
                                className="continue-progress-fill"
                                style={{
                                    width: "0%"
                                }}
                            />

                        </div>

                    </div>


                    <div className="continue-footer">

                        <span>
                            20 từ vựng
                        </span>

                        <span>
                            Chưa bắt đầu
                        </span>

                    </div>


                    <button
                        className="continue-button"
                        onClick={onContinueLearning}
                    >
                        Bắt đầu bài học →
                    </button>

                </section>


                {/* =====================================
                    DAILY GOAL
                ===================================== */}

                <section className="dashboard-card daily-card">

                    <div className="dashboard-card-header">

                        <div>

                            <span className="dashboard-card-label">
                                MỤC TIÊU HÔM NAY
                            </span>

                            <h2>
                                20 phút học
                            </h2>

                        </div>

                        <span className="daily-icon">
                            🎯
                        </span>

                    </div>


                    <div className="daily-circle">

                        <div>

                            <strong>
                                0
                            </strong>

                            <span>
                                / 20 phút
                            </span>

                        </div>

                    </div>


                    <p className="daily-description">
                        Hãy dành ít nhất 20 phút hôm nay để học tiếng Nhật.
                    </p>

                </section>


            </div>


            {/* =========================================
                LEARNING ROADMAP
            ========================================= */}

            <section className="dashboard-card roadmap-card">

                <div className="dashboard-card-header">

                    <div>

                        <span className="dashboard-card-label">
                            LỘ TRÌNH N5
                        </span>

                        <h2>
                            Hành trình học tiếng Nhật
                        </h2>

                    </div>

                    <button className="text-button">
                        Xem lộ trình →
                    </button>

                </div>


                <div className="roadmap-list">


                    {/* HIRAGANA */}

                    <div className="roadmap-item">

                        <div className="roadmap-icon">
                            あ
                        </div>

                        <div className="roadmap-content">

                            <div className="roadmap-top">

                                <strong>
                                    Hiragana
                                </strong>

                                <span>
                                    0%
                                </span>

                            </div>

                            <div className="roadmap-bar">

                                <div
                                    className="roadmap-fill"
                                    style={{
                                        width: "0%"
                                    }}
                                />

                            </div>

                        </div>

                        <span className="roadmap-status">
                            Chưa học
                        </span>

                    </div>


                    {/* KATAKANA */}

                    <div className="roadmap-item">

                        <div className="roadmap-icon">
                            ア
                        </div>

                        <div className="roadmap-content">

                            <div className="roadmap-top">

                                <strong>
                                    Katakana
                                </strong>

                                <span>
                                    0%
                                </span>

                            </div>

                            <div className="roadmap-bar">

                                <div
                                    className="roadmap-fill"
                                    style={{
                                        width: "0%"
                                    }}
                                />

                            </div>

                        </div>

                        <span className="roadmap-status">
                            Chưa học
                        </span>

                    </div>


                    {/* VOCABULARY */}

                    <div className="roadmap-item active-roadmap">

                        <div className="roadmap-icon">
                            📚
                        </div>

                        <div className="roadmap-content">

                            <div className="roadmap-top">

                                <strong>
                                    Từ vựng N5
                                </strong>

                                <span>
                                    0%
                                </span>

                            </div>

                            <div className="roadmap-bar">

                                <div
                                    className="roadmap-fill"
                                    style={{
                                        width: "0%"
                                    }}
                                />

                            </div>

                        </div>

                        <span className="roadmap-status">
                            Bắt đầu
                        </span>

                    </div>


                    {/* KANJI */}

                    <div className="roadmap-item">

                        <div className="roadmap-icon">
                            漢
                        </div>

                        <div className="roadmap-content">

                            <div className="roadmap-top">

                                <strong>
                                    Kanji N5
                                </strong>

                                <span>
                                    0%
                                </span>

                            </div>

                            <div className="roadmap-bar">

                                <div
                                    className="roadmap-fill"
                                    style={{
                                        width: "0%"
                                    }}
                                />

                            </div>

                        </div>

                        <span className="roadmap-status">
                            Chưa học
                        </span>

                    </div>


                    {/* GRAMMAR */}

                    <div className="roadmap-item">

                        <div className="roadmap-icon">
                            文
                        </div>

                        <div className="roadmap-content">

                            <div className="roadmap-top">

                                <strong>
                                    Ngữ pháp N5
                                </strong>

                                <span>
                                    0%
                                </span>

                            </div>

                            <div className="roadmap-bar">

                                <div
                                    className="roadmap-fill"
                                    style={{
                                        width: "0%"
                                    }}
                                />

                            </div>

                        </div>

                        <span className="roadmap-status">
                            Chưa học
                        </span>

                    </div>

                </div>

            </section>


            {/* =========================================
                QUICK ACCESS
            ========================================= */}

            <section className="dashboard-card quick-card">

                <div className="dashboard-card-header">

                    <div>

                        <span className="dashboard-card-label">
                            HỌC NHANH
                        </span>

                        <h2>
                            Chọn nội dung bạn muốn học
                        </h2>

                    </div>

                </div>


                <div className="quick-grid">

                    <button className="quick-item">

                        <span className="quick-item-icon">
                            あ
                        </span>

                        <span>

                            <strong>
                                Hiragana
                            </strong>

                            <small>
                                Bảng chữ mềm
                            </small>

                        </span>

                    </button>


                    <button className="quick-item">

                        <span className="quick-item-icon">
                            ア
                        </span>

                        <span>

                            <strong>
                                Katakana
                            </strong>

                            <small>
                                Bảng chữ cứng
                            </small>

                        </span>

                    </button>


                    <button
                        className="quick-item"
                        onClick={onContinueLearning}
                    >

                        <span className="quick-item-icon">
                            📚
                        </span>

                        <span>

                            <strong>
                                Từ vựng N5
                            </strong>

                            <small>
                                800 từ cơ bản
                            </small>

                        </span>

                    </button>


                    <button className="quick-item">

                        <span className="quick-item-icon">
                            漢
                        </span>

                        <span>

                            <strong>
                                Kanji N5
                            </strong>

                            <small>
                                Chữ Hán cơ bản
                            </small>

                        </span>

                    </button>


                    <button className="quick-item">

                        <span className="quick-item-icon">
                            文
                        </span>

                        <span>

                            <strong>
                                Ngữ pháp N5
                            </strong>

                            <small>
                                Mẫu câu cơ bản
                            </small>

                        </span>

                    </button>


                    <button className="quick-item">

                        <span className="quick-item-icon">
                            🎯
                        </span>

                        <span>

                            <strong>
                                JLPT N5
                            </strong>

                            <small>
                                Luyện thi
                            </small>

                        </span>

                    </button>

                </div>

            </section>

        </div>
    );
}

export default Home;