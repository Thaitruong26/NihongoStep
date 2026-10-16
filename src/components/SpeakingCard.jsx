import { useEffect, useRef, useState } from "react";

function SpeakingCard({
    word,
    currentIndex,
    totalWords,
    onNext
}) {

    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [result, setResult] = useState(null);

    const recognitionRef = useRef(null);

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    useEffect(() => {
        if (!SpeechRecognition) {
            return;
        }

        const recognition = new SpeechRecognition();

        recognition.lang = "ja-JP";
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setIsListening(true);
            setResult(null);
            setTranscript("");
        };

        recognition.onresult = (event) => {
            const text =
                event.results[0][0].transcript;

            setTranscript(text);

            const normalizedText =
                normalizeJapanese(text);

            const normalizedAnswer =
                normalizeJapanese(word.hiragana);

            const isCorrect =
                normalizedText === normalizedAnswer;

            setResult(
                isCorrect
                    ? "correct"
                    : "incorrect"
            );
        };

        recognition.onerror = () => {
            setIsListening(false);
            setResult("error");
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognitionRef.current = recognition;

        return () => {
            recognition.stop();
        };

    }, [word, SpeechRecognition]);

    const normalizeJapanese = (text) => {
        return text
            .trim()
            .replace(/\s+/g, "")
            .toLowerCase();
    };

    const playAudio = () => {

        if (!word) {
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

        window.speechSynthesis.speak(
            utterance
        );
    };

    const startListening = () => {

        if (!SpeechRecognition) {
            setResult("unsupported");
            return;
        }

        if (isListening) {
            return;
        }

        setTranscript("");
        setResult(null);

        try {
            recognitionRef.current.start();
        } catch (error) {
            console.log(
                "Speech recognition error:",
                error
            );
        }
    };

    const handleNext = () => {
        window.speechSynthesis.cancel();

        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (error) {
                console.log(error);
            }
        }

        setTranscript("");
        setResult(null);
        setIsListening(false);

        onNext();
    };

    if (!word) {
        return (
            <div className="coming-soon">
                <h2>Không có từ vựng</h2>
                <p>
                    Bài học này chưa có dữ liệu.
                </p>
            </div>
        );
    }

    return (
        <div className="speaking-area">

            <div className="speaking-card">

                <div className="speaking-header">

                    <div>
                        <span className="speaking-label">
                            PHÁT ÂM
                        </span>

                        <h2>
                            Luyện phát âm tiếng Nhật
                        </h2>
                    </div>

                    <div className="speaking-counter">
                        {currentIndex + 1}
                        {" / "}
                        {totalWords}
                    </div>

                </div>

                <div className="speaking-progress">

                    <div
                        className="speaking-progress-fill"
                        style={{
                            width:
                                `${((currentIndex + 1) / totalWords) * 100}%`
                        }}
                    />

                </div>

                <div className="speaking-question">

                    <span className="speaking-question-label">
                        Hãy nghe mẫu và đọc lại từ sau
                    </span>

                    <div className="speaking-meaning">
                        {word.meaning}
                    </div>

                    <div className="speaking-word">
                        <span>
                            {word.hiragana}
                        </span>

                        <strong>
                            {word.kanji}
                        </strong>
                    </div>

                    <div className="speaking-romaji">
                        {word.romaji}
                    </div>

                </div>

                <div className="speaking-actions">

                    <button
                        className="speaking-listen-button"
                        onClick={playAudio}
                    >
                        <span className="speaking-action-icon">
                            🔊
                        </span>

                        <span>
                            Nghe mẫu
                        </span>
                    </button>

                    <button
                        className={
                            `speaking-record-button ${isListening
                                ? "recording"
                                : ""
                            }`
                        }
                        onClick={startListening}
                        disabled={isListening}
                    >
                        <span className="speaking-action-icon">
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

                </div>

                <div className="speaking-status">

                    {!transcript &&
                        !result && (
                            <p>
                                Nhấn "Bắt đầu nói" rồi
                                đọc từ tiếng Nhật.
                            </p>
                        )}

                    {isListening && (
                        <div className="speaking-listening">
                            🎤 Đang nhận diện giọng nói...
                        </div>
                    )}

                    {transcript && (
                        <div className="speaking-transcript">

                            <span>
                                Bạn nói:
                            </span>

                            <strong>
                                {transcript}
                            </strong>

                        </div>
                    )}

                    {result === "correct" && (
                        <div className="speaking-result correct">

                            <div className="speaking-result-icon">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Chính xác!
                                </strong>

                                <p>
                                    Bạn đã phát âm đúng
                                    theo kết quả nhận diện.
                                </p>
                            </div>

                        </div>
                    )}

                    {result === "incorrect" && (
                        <div className="speaking-result incorrect">

                            <div className="speaking-result-icon">
                                ✕
                            </div>

                            <div>
                                <strong>
                                    Chưa khớp
                                </strong>

                                <p>
                                    Hãy nghe lại mẫu và
                                    thử phát âm lần nữa.
                                </p>
                            </div>

                        </div>
                    )}

                    {result === "error" && (
                        <div className="speaking-result error">

                            <div className="speaking-result-icon">
                                !
                            </div>

                            <div>
                                <strong>
                                    Không thể nhận diện
                                    giọng nói
                                </strong>

                                <p>
                                    Hãy kiểm tra quyền
                                    microphone và thử lại.
                                </p>
                            </div>

                        </div>
                    )}

                    {result === "unsupported" && (
                        <div className="speaking-result error">

                            <div className="speaking-result-icon">
                                !
                            </div>

                            <div>
                                <strong>
                                    Trình duyệt chưa hỗ trợ
                                </strong>

                                <p>
                                    Trình duyệt hiện tại
                                    chưa hỗ trợ nhận diện
                                    giọng nói. Bạn vẫn có
                                    thể nghe mẫu để luyện tập.
                                </p>
                            </div>

                        </div>
                    )}

                </div>

                <div className="speaking-answer">

                    <span>
                        Đáp án:
                    </span>

                    <strong>
                        {word.hiragana}
                    </strong>

                    <span>
                        {word.kanji}
                    </span>

                </div>

                <button
                    className="speaking-next-button"
                    onClick={handleNext}
                >
                    Từ tiếp theo →
                </button>

            </div>

        </div>
    );
}

export default SpeakingCard;