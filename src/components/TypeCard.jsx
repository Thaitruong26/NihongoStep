import { useState } from "react";

function TypeCard({
    word,
    questionNumber,
    totalQuestions,
    onNext,
    onCorrect
}) {

    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState(null);

    const handleCheck = () => {

        if (answer.trim() === "") {
            return;
        }

        const userAnswer = answer.trim();

        const correctAnswer = word.hiragana;

        const isCorrect = userAnswer === correctAnswer;

        setResult(isCorrect ? "correct" : "incorrect");

        if (isCorrect) {
            onCorrect();
        }
    };


    const handleNext = () => {

        setAnswer("");

        setResult(null);

        onNext();
    };


    const handleKeyDown = (event) => {

        if (event.key === "Enter") {

            if (result === null) {
                handleCheck();
            } else {
                handleNext();
            }

        }

    };


    return (
        <div className="type-area">

            <div className="type-card">

                {/* HEADER */}

                <div className="type-header">

                    <span>
                        GÕ TỪ
                    </span>

                    <span>
                        {questionNumber} / {totalQuestions}
                    </span>

                </div>


                {/* QUESTION */}

                <div className="type-question-label">

                    Hãy viết từ tiếng Nhật tương ứng

                </div>


                <div className="type-meaning">

                    {word.meaning}

                </div>


                {/* INPUT */}

                <div className="type-input-area">

                    <input
                        type="text"
                        value={answer}
                        onChange={(event) => {
                            setAnswer(event.target.value);
                            setResult(null);
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Nhập bằng Hiragana..."
                        disabled={result !== null}
                        autoFocus
                    />

                    <button
                        className="type-check-button"
                        onClick={handleCheck}
                        disabled={
                            answer.trim() === "" ||
                            result !== null
                        }
                    >
                        Kiểm tra
                    </button>

                </div>


                {/* RESULT */}

                {result === "correct" && (

                    <div className="type-result type-result-correct">

                        <div className="type-result-title">
                            ✓ Chính xác!
                        </div>

                        <div className="type-correct-answer">

                            {word.hiragana}

                            {word.kanji && (
                                <span>
                                    {" "}（{word.kanji}）
                                </span>
                            )}

                        </div>

                    </div>

                )}


                {result === "incorrect" && (

                    <div className="type-result type-result-incorrect">

                        <div className="type-result-title">
                            ✕ Chưa đúng
                        </div>

                        <div className="type-user-answer">

                            Bạn nhập:

                            <strong>
                                {answer}
                            </strong>

                        </div>

                        <div className="type-correct-answer">

                            Đáp án:

                            <strong>
                                {word.hiragana}
                            </strong>

                            {word.kanji && (
                                <span>
                                    {" "}（{word.kanji}）
                                </span>
                            )}

                        </div>

                    </div>

                )}


                {/* NEXT */}

                {result !== null && (

                    <button
                        className="type-next-button"
                        onClick={handleNext}
                    >
                        Câu tiếp theo →
                    </button>

                )}

            </div>

        </div>
    );
}

export default TypeCard;