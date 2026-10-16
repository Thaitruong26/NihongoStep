function VocabularyCard({
    word,
    currentIndex,
    totalWords,
    nextWord,
    previousWord
}) {

    const speakWord = () => {

        if (!window.speechSynthesis) {

            alert(
                "Trình duyệt của bạn không hỗ trợ phát âm."
            );

            return;
        }

        window.speechSynthesis.cancel();

        const speech =
            new SpeechSynthesisUtterance(
                word.hiragana
            );

        speech.lang = "ja-JP";

        speech.rate = 0.8;

        speech.pitch = 1;

        window.speechSynthesis.speak(
            speech
        );
    };


    return (

        <div className="vocabulary-area">

            <div className="vocabulary-card">


                {/* =================================
                    COUNTER
                ================================= */}

                <div className="word-counter">

                    <span>
                        TỪ VỰNG
                    </span>

                    <span>
                        {currentIndex + 1} / {totalWords}
                    </span>

                </div>


                {/* =================================
                    WORD
                ================================= */}

                <div className="japanese-word">
                    {word.hiragana}
                </div>


                <div className="kanji-word">
                    {word.kanji}
                </div>


                <div className="romaji">
                    {word.romaji}
                </div>


                <div className="meaning">
                    {word.meaning}
                </div>


                {/* =================================
                    AUDIO
                ================================= */}

                <button
                    className="audio-button"
                    onClick={speakWord}
                >

                    <span>
                        🔊
                    </span>

                    <span>
                        Nghe phát âm
                    </span>

                </button>


                {/* =================================
                    EXAMPLE
                ================================= */}

                <div className="vocabulary-example">

                    <span>
                        Ví dụ
                    </span>

                    <strong>
                        {word.exampleSentence}
                    </strong>

                    <small>
                        {word.exampleMeaning}
                    </small>

                </div>


                {/* =================================
                    NAVIGATION
                ================================= */}

                <div className="word-navigation">

                    <button
                        className="navigation-button"
                        onClick={previousWord}
                        disabled={
                            currentIndex === 0
                        }
                    >
                        ←
                    </button>


                    <span>
                        {currentIndex + 1} / {totalWords}
                    </span>


                    <button
                        className="navigation-button"
                        onClick={nextWord}
                        disabled={
                            currentIndex ===
                            totalWords - 1
                        }
                    >
                        →
                    </button>

                </div>

            </div>

        </div>
    );
}

export default VocabularyCard;