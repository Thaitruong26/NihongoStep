function StudyCard({
    word,
    isAnswerVisible,
    showAnswer,
    markAsRemembered,
    markAsNotRemembered
}) {

    return (

        <div className="study-area">

            <div className="study-card">


                <div className="study-label">
                    HỌC TỪ
                </div>


                <div className="study-question">
                    {word.hiragana}
                </div>


                {!isAnswerVisible && (

                    <button
                        className="show-answer-button"
                        onClick={showAnswer}
                    >
                        Hiện đáp án
                    </button>

                )}


                {isAnswerVisible && (

                    <div className="study-answer">


                        <div className="study-kanji">
                            {word.kanji}
                        </div>


                        <div className="study-romaji">
                            {word.romaji}
                        </div>


                        <div className="study-meaning">
                            {word.meaning}
                        </div>


                        <div className="study-example">

                            <strong>
                                {word.exampleSentence}
                            </strong>

                            <span>
                                {word.exampleMeaning}
                            </span>

                        </div>

                    </div>

                )}


                {isAnswerVisible && (

                    <div className="study-actions">


                        <button
                            className="not-remembered-button"
                            onClick={
                                markAsNotRemembered
                            }
                        >
                            Chưa nhớ
                        </button>


                        <button
                            className="remembered-button"
                            onClick={
                                markAsRemembered
                            }
                        >
                            ✓ Đã nhớ
                        </button>

                    </div>

                )}

            </div>

        </div>
    );
}

export default StudyCard;