import { useState } from "react";


function QuizCard({
    word,
    options,
    questionNumber,
    totalQuestions,
    onNext,
    onAnswer
}) {

    // Đáp án người dùng đã chọn
    const [selectedAnswer, setSelectedAnswer] = useState(null);


    // Người dùng đã trả lời chưa?
    const isAnswered = selectedAnswer !== null;


    // =========================
    // CHỌN ĐÁP ÁN
    // =========================

    const handleAnswer = (answer) => {

        // Nếu đã trả lời thì không cho chọn lại
        if (isAnswered) {
            return;
        }


        // Lưu đáp án
        setSelectedAnswer(answer);


        // Kiểm tra đúng / sai
        const isCorrect = answer === word.meaning;


        // Gửi kết quả về Lesson
        onAnswer(isCorrect);

    };


    // =========================
    // CLASS ĐÁP ÁN
    // =========================

    const getOptionClass = (option) => {

        // Chưa chọn
        if (!isAnswered) {
            return "quiz-option";
        }


        // Đáp án đúng
        if (option === word.meaning) {
            return "quiz-option correct";
        }


        // Đáp án người dùng chọn nhưng sai
        if (option === selectedAnswer) {
            return "quiz-option incorrect";
        }


        // Những đáp án còn lại
        return "quiz-option disabled";

    };


    // =========================
    // CÂU TIẾP THEO
    // =========================

    const handleNext = () => {

        // Xóa đáp án cũ
        setSelectedAnswer(null);


        // Sang câu mới
        onNext();

    };


    return (

        <div className="quiz-area">

            <div className="quiz-card">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="quiz-header">

                    <span>
                        CÂU HỎI
                    </span>

                    <span>
                        {questionNumber} / {totalQuestions}
                    </span>

                </div>


                {/* =========================
                    CÂU HỎI
                ========================= */}

                <div className="quiz-question-label">

                    Từ này có nghĩa là gì?

                </div>


                {/* Hiragana */}

                <div className="quiz-word">

                    {word.hiragana}

                </div>


                {/* Kanji */}

                <div className="quiz-kanji">

                    {word.kanji}

                </div>


                {/* =========================
                    4 ĐÁP ÁN
                ========================= */}

                <div className="quiz-options">

                    {options.map((option, index) => (

                        <button
                            key={index}
                            className={getOptionClass(option)}
                            onClick={() => handleAnswer(option)}
                            disabled={isAnswered}
                        >

                            <span className="option-letter">

                                {String.fromCharCode(
                                    65 + index
                                )}

                            </span>


                            <span>

                                {option}

                            </span>

                        </button>

                    ))}

                </div>


                {/* =========================
                    KẾT QUẢ
                ========================= */}

                {isAnswered && (

                    <div className="quiz-result">

                        {selectedAnswer === word.meaning ? (

                            <div className="quiz-correct-message">

                                ✓ Chính xác!

                            </div>

                        ) : (

                            <div className="quiz-incorrect-message">

                                ✕ Chưa đúng

                            </div>

                        )}


                        <div className="correct-answer">

                            Đáp án đúng:

                            {" "}

                            <strong>
                                {word.meaning}
                            </strong>

                        </div>

                    </div>

                )}


                {/* =========================
                    CÂU TIẾP THEO
                ========================= */}

                {isAnswered && (

                    <button
                        className="next-question-button"
                        onClick={handleNext}
                    >

                        Câu tiếp theo →

                    </button>

                )}

            </div>

        </div>

    );

}

export default QuizCard;