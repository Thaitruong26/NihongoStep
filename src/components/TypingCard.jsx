import { useEffect, useState } from "react";


function TypingCard({
    word,
    currentIndex,
    totalWords,
    onNext
}) {

    const [answer, setAnswer] = useState("");

    const [result, setResult] = useState(null);

    const [isChecked, setIsChecked] = useState(false);


    // =========================
    // RESET KHI ĐỔI TỪ
    // =========================

    useEffect(() => {

        setAnswer("");

        setResult(null);

        setIsChecked(false);

    }, [word]);


    // =========================
    // CHUẨN HÓA CÂU TRẢ LỜI
    // =========================

    const normalize = (text) => {

        return text
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "");

    };


    // =========================
    // KIỂM TRA
    // =========================

    const checkAnswer = () => {

        if (!answer.trim()) {

            return;

        }


        const userAnswer =
            normalize(answer);


        const correctAnswer =
            normalize(word.hiragana);


        if (
            userAnswer === correctAnswer
        ) {

            setResult("correct");

        } else {

            setResult("incorrect");

        }


        setIsChecked(true);

    };


    // =========================
    // ENTER ĐỂ KIỂM TRA
    // =========================

    const handleKeyDown = (event) => {

        if (event.key === "Enter") {

            if (!isChecked) {

                checkAnswer();

            } else {

                onNext();

            }

        }

    };


    // =========================
    // PHÁT ÂM
    // =========================

    const speakWord = () => {

        if (
            !("speechSynthesis" in window)
        ) {

            return;

        }


        const utterance =
            new SpeechSynthesisUtterance(
                word.hiragana
            );


        utterance.lang = "ja-JP";

        utterance.rate = 0.8;


        window.speechSynthesis.cancel();

        window.speechSynthesis.speak(
            utterance
        );

    };


    return (

        <div className="typing-area">

            <div className="typing-card">


                {/* =================================
                    HEADER
                ================================= */}

                <div className="typing-header">

                    <div>

                        <span className="typing-label">
                            GÕ TỪ
                        </span>

                        <h2>
                            Viết từ tiếng Nhật
                        </h2>

                    </div>


                    <div className="typing-counter">

                        {currentIndex + 1}
                        {" / "}
                        {totalWords}

                    </div>

                </div>


                {/* =================================
                    PROGRESS
                ================================= */}

                <div className="typing-progress">

                    <div
                        className="typing-progress-fill"
                        style={{
                            width:
                                `${((currentIndex + 1) / totalWords) * 100}%`
                        }}
                    />

                </div>


                {/* =================================
                    QUESTION
                ================================= */}

                <div className="typing-question">

                    <span className="typing-question-label">

                        Nghĩa của từ này là:

                    </span>


                    <div className="typing-meaning">

                        {word.meaning}

                    </div>


                    <div className="typing-example">

                        <span>
                            💡
                        </span>

                        {word.exampleMeaning}

                    </div>

                </div>


                {/* =================================
                    INPUT
                ================================= */}

                <div className="typing-input-area">

                    <label>
                        Nhập từ tiếng Nhật
                    </label>


                    <input
                        type="text"
                        value={answer}
                        onChange={
                            event =>
                                setAnswer(
                                    event.target.value
                                )
                        }
                        onKeyDown={handleKeyDown}
                        placeholder="Ví dụ: でんわ"
                        autoFocus
                        disabled={isChecked}
                    />


                    {!isChecked && (

                        <button
                            className="typing-check-button"
                            onClick={checkAnswer}
                            disabled={
                                !answer.trim()
                            }
                        >
                            ✓ Kiểm tra
                        </button>

                    )}

                </div>


                {/* =================================
                    RESULT
                ================================= */}

                {isChecked && (

                    <div
                        className={
                            result === "correct"
                                ? "typing-result correct"
                                : "typing-result incorrect"
                        }
                    >

                        {result === "correct" ? (

                            <>

                                <div className="typing-result-icon">
                                    ✓
                                </div>

                                <div>

                                    <strong>
                                        Chính xác!
                                    </strong>

                                    <p>
                                        Bạn đã nhập đúng.
                                    </p>

                                </div>

                            </>

                        ) : (

                            <>

                                <div className="typing-result-icon">
                                    ✕
                                </div>

                                <div>

                                    <strong>
                                        Chưa đúng
                                    </strong>

                                    <p>
                                        Đáp án đúng:
                                        {" "}

                                        <b>
                                            {word.hiragana}
                                        </b>

                                    </p>

                                </div>

                            </>

                        )}

                    </div>

                )}


                {/* =================================
                    ANSWER
                ================================= */}

                {isChecked && (

                    <div className="typing-answer">

                        <div className="typing-answer-main">

                            <span>
                                {word.hiragana}
                            </span>

                            <strong>
                                {word.kanji}
                            </strong>

                        </div>


                        <div className="typing-answer-romaji">

                            {word.romaji}

                        </div>


                        <button
                            className="typing-speak-button"
                            onClick={speakWord}
                        >
                            🔊 Nghe phát âm
                        </button>

                    </div>

                )}


                {/* =================================
                    NEXT
                ================================= */}

                {isChecked && (

                    <button
                        className="typing-next-button"
                        onClick={onNext}
                    >

                        Từ tiếp theo →

                    </button>

                )}

            </div>

        </div>

    );

}


export default TypingCard;