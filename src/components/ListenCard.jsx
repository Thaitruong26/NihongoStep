import { useEffect, useState } from "react";


function ListeningCard({
    word,
    options,
    questionNumber,
    totalQuestions,
    onNext,
    onAnswer
}) {

    const [selectedAnswer, setSelectedAnswer] =
        useState(null);


    const [isPlaying, setIsPlaying] =
        useState(false);


    // =========================
    // RESET KHI ĐỔI CÂU
    // =========================

    useEffect(() => {

        setSelectedAnswer(null);

        setIsPlaying(false);

    }, [word]);


    // =========================
    // PHÁT ÂM
    // =========================

    const speakWord = () => {

        if (
            !("speechSynthesis" in window)
        ) {

            return;

        }


        window.speechSynthesis.cancel();


        const utterance =
            new SpeechSynthesisUtterance(
                word.hiragana
            );


        utterance.lang = "ja-JP";

        utterance.rate = 0.75;

        utterance.pitch = 1;


        utterance.onstart = () => {

            setIsPlaying(true);

        };


        utterance.onend = () => {

            setIsPlaying(false);

        };


        utterance.onerror = () => {

            setIsPlaying(false);

        };


        window.speechSynthesis.speak(
            utterance
        );

    };


    // =========================
    // CHỌN ĐÁP ÁN
    // =========================

    const handleAnswer = (answer) => {

        if (selectedAnswer !== null) {

            return;

        }


        setSelectedAnswer(answer);


        const isCorrect =
            answer === word.meaning;


        onAnswer(isCorrect);

    };


    // =========================
    // CLASS ĐÁP ÁN
    // =========================

    const getOptionClass = (option) => {

        if (selectedAnswer === null) {

            return "listening-option";

        }


        if (option === word.meaning) {

            return "listening-option correct";

        }


        if (
            option === selectedAnswer
        ) {

            return "listening-option incorrect";

        }


        return "listening-option disabled";

    };


    // =========================
    // CÂU TIẾP
    // =========================

    const handleNext = () => {

        window.speechSynthesis.cancel();

        setSelectedAnswer(null);

        onNext();

    };


    return (

        <div className="listening-area">

            <div className="listening-card">


                {/* =================================
                    HEADER
                ================================= */}

                <div className="listening-header">

                    <div>

                        <span className="listening-label">
                            NGHE
                        </span>

                        <h2>
                            Nghe và chọn nghĩa đúng
                        </h2>

                    </div>


                    <div className="listening-counter">

                        {questionNumber}
                        {" / "}
                        {totalQuestions}

                    </div>

                </div>


                {/* =================================
                    PROGRESS
                ================================= */}

                <div className="listening-progress">

                    <div
                        className="listening-progress-fill"
                        style={{
                            width:
                                `${(questionNumber / totalQuestions) * 100}%`
                        }}
                    />

                </div>


                {/* =================================
                    AUDIO AREA
                ================================= */}

                <div className="listening-question">

                    <div className="listening-headphone">
                        🔊
                    </div>


                    <div className="listening-title">

                        Hãy nghe từ tiếng Nhật

                    </div>


                    <button
                        className={
                            isPlaying
                                ? "listening-play-button playing"
                                : "listening-play-button"
                        }
                        onClick={speakWord}
                    >

                        <span>
                            {isPlaying
                                ? "🔊"
                                : "▶"}
                        </span>

                        <span>
                            {isPlaying
                                ? "Đang phát..."
                                : "Phát âm"}
                        </span>

                    </button>


                    <p className="listening-hint">

                        Bạn có thể nghe lại nhiều lần.

                    </p>

                </div>


                {/* =================================
                    OPTIONS
                ================================= */}

                <div className="listening-options">

                    {options.map(
                        (option, index) => (

                            <button
                                key={`${option}-${index}`}
                                className={
                                    getOptionClass(
                                        option
                                    )
                                }
                                onClick={() =>
                                    handleAnswer(
                                        option
                                    )
                                }
                                disabled={
                                    selectedAnswer !== null
                                }
                            >

                                <span className="listening-option-letter">

                                    {String.fromCharCode(
                                        65 + index
                                    )}

                                </span>


                                <span>
                                    {option}
                                </span>


                                {selectedAnswer !== null &&
                                    option ===
                                    word.meaning && (

                                        <span className="listening-option-icon">
                                            ✓
                                        </span>

                                    )}


                                {selectedAnswer !== null &&
                                    option ===
                                    selectedAnswer &&
                                    option !==
                                    word.meaning && (

                                        <span className="listening-option-icon">
                                            ✕
                                        </span>

                                    )}

                            </button>

                        )
                    )}

                </div>


                {/* =================================
                    RESULT
                ================================= */}

                {selectedAnswer !== null && (

                    <div
                        className={
                            selectedAnswer ===
                                word.meaning
                                ? "listening-result correct"
                                : "listening-result incorrect"
                        }
                    >

                        <div className="listening-result-icon">

                            {selectedAnswer ===
                                word.meaning
                                ? "✓"
                                : "✕"}

                        </div>


                        <div>

                            <strong>

                                {selectedAnswer ===
                                    word.meaning
                                    ? "Chính xác!"
                                    : "Chưa đúng"}

                            </strong>


                            <p>

                                Đáp án đúng:
                                {" "}

                                <b>
                                    {word.meaning}
                                </b>

                            </p>

                        </div>

                    </div>

                )}


                {/* =================================
                    WORD AFTER ANSWER
                ================================= */}

                {selectedAnswer !== null && (

                    <div className="listening-answer">

                        <div>

                            <span>
                                {word.hiragana}
                            </span>

                            <strong>
                                {word.kanji}
                            </strong>

                        </div>


                        <small>
                            {word.romaji}
                        </small>

                    </div>

                )}


                {/* =================================
                    NEXT
                ================================= */}

                {selectedAnswer !== null && (

                    <button
                        className="listening-next-button"
                        onClick={handleNext}
                    >

                        Câu tiếp theo →

                    </button>

                )}

            </div>

        </div>

    );

}


export default ListeningCard;