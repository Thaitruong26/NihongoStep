import { useEffect, useState } from "react";

function PronunciationCard({
    word,
    questionNumber,
    totalQuestions,
    onNext,
    onCorrect
}) {

    const [isListening, setIsListening] = useState(false);
    const [result, setResult] = useState(null);
    const [recognizedText, setRecognizedText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    // =========================
    // KIỂM TRA HỖ TRỢ
    // =========================

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    // =========================
    // ĐỌC MẪU
    // =========================

    const speakExample = () => {

        if (!window.speechSynthesis) {
            alert("Trình duyệt không hỗ trợ phát âm.");
            return;
        }

        window.speechSynthesis.cancel();

        const speech =
            new SpeechSynthesisUtterance(word.hiragana);

        speech.lang = "ja-JP";
        speech.rate = 0.75;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
    };


    // =========================
    // BẮT ĐẦU NHẬN GIỌNG NÓI
    // =========================

    const startRecognition = () => {

        if (!SpeechRecognition) {

            setErrorMessage(
                "Trình duyệt của bạn chưa hỗ trợ nhận diện giọng nói."
            );

            return;
        }


        setErrorMessage("");

        setResult(null);

        setRecognizedText("");

        const recognition =
            new SpeechRecognition();


        recognition.lang = "ja-JP";

        recognition.continuous = false;

        recognition.interimResults = false;

        recognition.maxAlternatives = 1;


        recognition.onstart = () => {

            setIsListening(true);

        };


        recognition.onresult = (event) => {

            const text =
                event.results[0][0].transcript;

            setRecognizedText(text);

            checkPronunciation(text);

        };


        recognition.onerror = () => {

            setIsListening(false);

            setErrorMessage(
                "Không nhận diện được giọng nói. Hãy thử lại."
            );

        };


        recognition.onend = () => {

            setIsListening(false);

        };


        recognition.start();

    };


    // =========================
    // KIỂM TRA PHÁT ÂM
    // =========================

    const checkPronunciation = (text) => {

        const normalizedText =
            normalizeJapanese(text);

        const normalizedAnswer =
            normalizeJapanese(word.hiragana);


        if (
            normalizedText ===
            normalizedAnswer
        ) {

            setResult("correct");

            onCorrect();

        } else {

            setResult("incorrect");

        }

    };


    // =========================
    // CHUẨN HÓA
    // =========================

    const normalizeJapanese = (text) => {

        return text
            .trim()
            .replace(/\s/g, "")
            .toLowerCase();

    };


    // =========================
    // TỪ MỚI
    // =========================

    useEffect(() => {

        setResult(null);

        setRecognizedText("");

        setErrorMessage("");

        setIsListening(false);

    }, [word.id]);


    // =========================
    // CÂU TIẾP THEO
    // =========================

    const handleNext = () => {

        setResult(null);

        setRecognizedText("");

        setErrorMessage("");

        onNext();

    };


    return (

        <div className="pronunciation-area">

            <div className="pronunciation-card">


                {/* HEADER */}

                <div className="pronunciation-header">

                    <span>
                        PHÁT ÂM
                    </span>

                    <span>
                        {questionNumber} / {totalQuestions}
                    </span>

                </div>


                {/* HƯỚNG DẪN */}

                <div className="pronunciation-title">

                    Hãy đọc từ tiếng Nhật

                </div>


                {/* TỪ */}

                <div className="pronunciation-word">

                    {word.hiragana}

                </div>


                <div className="pronunciation-kanji">

                    {word.kanji}

                </div>


                <div className="pronunciation-meaning">

                    {word.meaning}

                </div>


                {/* NGHE MẪU */}

                <button
                    className="pronunciation-example-button"
                    onClick={speakExample}
                >

                    🔊 Nghe mẫu

                </button>


                {/* MICROPHONE */}

                <button
                    className={`microphone-button ${isListening
                        ? "listening"
                        : ""
                        }`}
                    onClick={startRecognition}
                    disabled={isListening}
                >

                    <span className="microphone-icon">

                        {isListening
                            ? "🔴"
                            : "🎤"}

                    </span>


                    <span>

                        {isListening
                            ? "Đang nghe..."
                            : "Bắt đầu nói"}

                    </span>

                </button>


                <div className="pronunciation-hint">

                    Nhấn nút và đọc từ bằng tiếng Nhật

                </div>


                {/* KẾT QUẢ NHẬN DIỆN */}

                {recognizedText && (

                    <div className="recognized-text">

                        Bạn nói:

                        <strong>
                            {recognizedText}
                        </strong>

                    </div>

                )}


                {/* ĐÚNG */}

                {result === "correct" && (

                    <div className="pronunciation-result correct">

                        <div className="pronunciation-result-title">

                            ✓ Phát âm đúng!

                        </div>

                        <div>

                            {word.hiragana}

                            {" "}

                            （{word.kanji}）

                        </div>

                    </div>

                )}


                {/* SAI */}

                {result === "incorrect" && (

                    <div className="pronunciation-result incorrect">

                        <div className="pronunciation-result-title">

                            ✕ Chưa chính xác

                        </div>

                        <div>

                            Hãy thử đọc lại:

                            <strong>
                                {" "}{word.hiragana}
                            </strong>

                        </div>

                    </div>

                )}


                {/* LỖI */}

                {errorMessage && (

                    <div className="pronunciation-error">

                        {errorMessage}

                    </div>

                )}


                {/* TIẾP */}

                {result !== null && (

                    <button
                        className="pronunciation-next-button"
                        onClick={handleNext}
                    >

                        Câu tiếp theo →

                    </button>

                )}

            </div>

        </div>
    );
}

export default PronunciationCard;