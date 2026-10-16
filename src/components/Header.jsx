function Header({
    currentPage,
    onHome,
    onLesson,
    onVocabulary,
    onKanji,
    onGrammar,
    onKana,
    onRoadmap
}) {
    return (
        <header className="header">
            <button className="header-logo" onClick={onHome}>
                <div className="logo-icon">日</div>

                <div>
                    <h2>NihongoStep</h2>
                    <span>Học tiếng Nhật</span>
                </div>
            </button>

            <nav className="header-nav">
                <button
                    className={currentPage === "home" ? "active" : ""}
                    onClick={onHome}
                >
                    Học tập
                </button>

                <button
                    className={currentPage === "roadmap" ? "active" : ""}
                    onClick={onRoadmap}
                >
                    Lộ trình
                </button>

                <button
                    className={
                        currentPage === "vocabulary" ||
                            currentPage === "lesson"
                            ? "active"
                            : ""
                    }
                    onClick={onVocabulary}
                >
                    Từ vựng
                </button>

                <button
                    className={currentPage === "kana" ? "active" : ""}
                    onClick={onKana}
                >
                    Kana
                </button>

                <button
                    className={currentPage === "kanji" ? "active" : ""}
                    onClick={onKanji}
                >
                    Kanji
                </button>

                <button
                    className={currentPage === "grammar" ? "active" : ""}
                    onClick={onGrammar}
                >
                    Ngữ pháp
                </button>

                <button onClick={onRoadmap}>
                    JLPT
                </button>
            </nav>

            <div className="header-user">
                <button
                    className="notification-button"
                    aria-label="Thông báo"
                >
                    🔔
                </button>

                <div className="user-avatar">T</div>

                <span>Thái</span>
            </div>
        </header>
    );
}

export default Header;