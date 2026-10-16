import { useEffect, useState } from "react";

import vocabularyData from "../data/vocabularyData";
import lessonData from "../data/lessonData";

import VocabularyCard from "../components/VocabularyCard";
import StudyCard from "../components/StudyCard";
import QuizCard from "../components/QuizCard";
import TypingCard from "../components/TypingCard";
import ListeningCard from "../components/ListeningCard";
import SpeakingCard from "../components/SpeakingCard";
import {
    getLessonProgress,
    saveRememberedWords,
    savePracticeAttempt
} from "../utils/learningProgress";


function Lesson({
    selectedLessonId
}) {

    // =========================
    // THÔNG TIN BÀI HỌC
    // =========================

    const lesson = lessonData.find(
        item => item.id === selectedLessonId
    );


    // =========================
    // TỪ VỰNG CỦA BÀI
    // =========================

    const lessonWords = vocabularyData.filter(
        word => word.lesson === selectedLessonId
    );


    // =========================
    // MODE
    // =========================

    const [currentIndex, setCurrentIndex] =
        useState(0);

    const [learningMode, setLearningMode] =
        useState("view");

    const [isAnswerVisible, setIsAnswerVisible] =
        useState(false);

    const [rememberedWords, setRememberedWords] =
        useState(
            () => getLessonProgress(selectedLessonId).rememberedWordIds
        );


    // =========================
    // QUIZ
    // =========================

    const [quizIndex, setQuizIndex] =
        useState(0);

    const [quizScore, setQuizScore] =
        useState(0);

    const [quizOptions, setQuizOptions] =
        useState([]);


    // =========================
    // LISTENING
    // =========================

    const [listeningIndex, setListeningIndex] =
        useState(0);

    const [listeningScore, setListeningScore] =
        useState(0);

    const [listeningOptions, setListeningOptions] =
        useState([]);


    // =========================
    // RESET KHI ĐỔI BÀI
    // =========================

    useEffect(() => {

        setCurrentIndex(0);

        setQuizIndex(0);

        setQuizScore(0);

        setListeningIndex(0);

        setListeningScore(0);

        setRememberedWords(
            getLessonProgress(selectedLessonId).rememberedWordIds
        );

        setIsAnswerVisible(false);

        setLearningMode("view");

        setQuizOptions([]);

        setListeningOptions([]);

    }, [selectedLessonId]);


    // =========================
    // THÔNG TIN
    // =========================

    const totalWords =
        lessonWords.length;


    const currentWord =
        lessonWords[currentIndex];


    const rememberedCount =
        rememberedWords.length;


    const progress =
        totalWords > 0
            ? Math.round(
                (rememberedCount / totalWords) * 100
            )
            : 0;


    // =========================
    // TỪ TIẾP
    // =========================

    const nextWord = () => {

        if (
            currentIndex <
            totalWords - 1
        ) {

            setCurrentIndex(
                currentIndex + 1
            );

            setIsAnswerVisible(false);

        }

    };


    // =========================
    // TỪ TRƯỚC
    // =========================

    const previousWord = () => {

        if (currentIndex > 0) {

            setCurrentIndex(
                currentIndex - 1
            );

            setIsAnswerVisible(false);

        }

    };


    // =========================
    // TẠO OPTIONS
    // =========================

    const createOptions = (correctWord) => {

        const otherWords =
            lessonWords
                .filter(
                    word =>
                        word.id !==
                        correctWord.id
                )
                .sort(
                    () =>
                        Math.random() - 0.5
                )
                .slice(0, 3);


        const options = [

            correctWord.meaning,

            ...otherWords.map(
                word => word.meaning
            )

        ];


        return options.sort(
            () =>
                Math.random() - 0.5
        );

    };


    // =========================
    // QUIZ QUESTION
    // =========================

    const startQuizQuestion = (index) => {

        if (
            lessonWords.length === 0
        ) {

            setQuizOptions([]);

            return;

        }


        const correctWord =
            lessonWords[index];


        if (!correctWord) {

            return;

        }


        setQuizOptions(
            createOptions(correctWord)
        );

    };


    // =========================
    // LISTENING QUESTION
    // =========================

    const startListeningQuestion = (
        index
    ) => {

        if (
            lessonWords.length === 0
        ) {

            setListeningOptions([]);

            return;

        }


        const correctWord =
            lessonWords[index];


        if (!correctWord) {

            return;

        }


        setListeningOptions(
            createOptions(correctWord)
        );

    };


    // =========================
    // ĐỔI MODE
    // =========================

    const changeMode = (mode) => {

        setLearningMode(mode);

        setIsAnswerVisible(false);


        if (mode === "quiz") {

            setQuizIndex(0);

            setQuizScore(0);

            startQuizQuestion(0);

        }


        if (mode === "listen") {

            setListeningIndex(0);

            setListeningScore(0);

            startListeningQuestion(0);

        }

    };


    // =========================
    // HIỆN ĐÁP ÁN
    // =========================

    const showAnswer = () => {

        setIsAnswerVisible(true);

    };


    // =========================
    // ĐÃ NHỚ
    // =========================

    const markAsRemembered = () => {
        if (!currentWord) {
            return;
        }

        if (!rememberedWords.includes(currentWord.id)) {
            const updatedRememberedWords = [
                ...rememberedWords,
                currentWord.id
            ];

            setRememberedWords(updatedRememberedWords);

            saveRememberedWords(
                selectedLessonId,
                updatedRememberedWords
            );
        }

        goToNextWord();
    };


    // =========================
    // CHƯA NHỚ
    // =========================

    const markAsNotRemembered = () => {

        goToNextWord();

    };


    // =========================
    // SANG TỪ
    // =========================

    const goToNextWord = () => {

        setIsAnswerVisible(false);


        if (
            currentIndex <
            totalWords - 1
        ) {

            setCurrentIndex(
                currentIndex + 1
            );

        } else {

            setCurrentIndex(0);

        }

    };


    // =========================
    // QUIZ ANSWER
    // =========================

    const handleQuizAnswer = (
        isCorrect
    ) => {

        if (isCorrect) {

            setQuizScore(
                previousScore =>
                    previousScore + 1
            );

        }

    };


    // =========================
    // QUIZ NEXT
    // =========================

    const nextQuizQuestion = () => {

        if (
            quizIndex <
            totalWords - 1
        ) {

            const nextIndex =
                quizIndex + 1;


            setQuizIndex(
                nextIndex
            );


            startQuizQuestion(
                nextIndex
            );

        } else {
            const finalScore = quizScore;

            savePracticeAttempt(
                selectedLessonId,
                "quiz",
                finalScore,
                totalWords
            );

            alert(
                `Bạn đã hoàn thành Quiz!\n\nĐiểm: ${finalScore} / ${totalWords}`
            );

            setQuizIndex(0);
            setQuizScore(0);

            startQuizQuestion(0);
        }

    };


    // =========================
    // LISTENING ANSWER
    // =========================

    const handleListeningAnswer = (
        isCorrect
    ) => {

        if (isCorrect) {

            setListeningScore(
                previousScore =>
                    previousScore + 1
            );

        }

    };


    // =========================
    // LISTENING NEXT
    // =========================

    const nextListeningQuestion = () => {

        if (
            listeningIndex <
            totalWords - 1
        ) {

            const nextIndex =
                listeningIndex + 1;


            setListeningIndex(
                nextIndex
            );


            startListeningQuestion(
                nextIndex
            );

        } else {
            const finalScore = listeningScore;

            savePracticeAttempt(
                selectedLessonId,
                "listening",
                finalScore,
                totalWords
            );

            alert(
                `Bạn đã hoàn thành phần Nghe!\n\nĐiểm: ${finalScore} / ${totalWords}`
            );

            setListeningIndex(0);
            setListeningScore(0);

            startListeningQuestion(0);
        }

    };


    // =========================
    // BÀI KHÔNG TỒN TẠI
    // =========================

    if (!lesson) {

        return (

            <div className="coming-soon">

                <h2>
                    Không tìm thấy bài học
                </h2>

                <p>
                    Bài học này không tồn tại.
                </p>

            </div>

        );

    }


    // =========================
    // BÀI CHƯA CÓ TỪ
    // =========================

    if (totalWords === 0) {

        return (

            <div className="lesson-page">

                <div className="breadcrumb">

                    <span>
                        Học tập
                    </span>

                    <span>
                        ›
                    </span>

                    <strong>
                        {lesson.name}
                    </strong>

                </div>


                <div className="lesson-header">

                    <div>

                        <h1>
                            {lesson.name}
                        </h1>

                        <p>
                            {lesson.description}
                        </p>

                    </div>

                </div>


                <div className="coming-soon">

                    <h2>
                        📚 Bài học đang được chuẩn bị
                    </h2>

                    <p>
                        Bài học này chưa có từ vựng.
                    </p>

                </div>

            </div>

        );

    }


    return (

        <div className="lesson-page">


            {/* =================================
                BREADCRUMB
            ================================= */}

            <div className="breadcrumb">

                <span>
                    Học tập
                </span>

                <span>
                    ›
                </span>

                <strong>
                    {lesson.name}
                </strong>

            </div>


            {/* =================================
                HEADER
            ================================= */}

            <div className="lesson-header">

                <div>

                    <h1>
                        {lesson.name}
                    </h1>

                    <p>
                        {lesson.description}
                    </p>

                </div>


                <div className="lesson-progress">

                    <div className="lesson-progress-top">

                        <span>
                            Tiến độ bài học
                        </span>

                        <strong>
                            {progress}%
                        </strong>

                    </div>


                    <div className="lesson-progress-bar">

                        <div
                            className="lesson-progress-fill"
                            style={{
                                width:
                                    `${progress}%`
                            }}
                        />

                    </div>


                    <span className="lesson-progress-text">

                        {rememberedCount}
                        {" / "}
                        {totalWords}
                        {" từ đã nhớ"}

                    </span>

                </div>

            </div>


            {/* =================================
                MODES
            ================================= */}

            <div className="learning-modes">


                <button
                    className={
                        `mode ${learningMode === "view"
                            ? "active"
                            : ""
                        }`
                    }
                    onClick={() =>
                        changeMode("view")
                    }
                >

                    <span>
                        📖
                    </span>

                    <span>
                        Xem từ
                    </span>

                </button>


                <button
                    className={
                        `mode ${learningMode === "study"
                            ? "active"
                            : ""
                        }`
                    }
                    onClick={() =>
                        changeMode("study")
                    }
                >

                    <span>
                        🧠
                    </span>

                    <span>
                        Học từ
                    </span>

                </button>


                <button
                    className={
                        `mode ${learningMode === "quiz"
                            ? "active"
                            : ""
                        }`
                    }
                    onClick={() =>
                        changeMode("quiz")
                    }
                >

                    <span>
                        ✓
                    </span>

                    <span>
                        Quiz
                    </span>

                </button>


                <button
                    className={
                        `mode ${learningMode === "type"
                            ? "active"
                            : ""
                        }`
                    }
                    onClick={() =>
                        changeMode("type")
                    }
                >

                    <span>
                        ⌨
                    </span>

                    <span>
                        Gõ từ
                    </span>

                </button>


                <button
                    className={
                        `mode ${learningMode === "listen"
                            ? "active"
                            : ""
                        }`
                    }
                    onClick={() =>
                        changeMode("listen")
                    }
                >

                    <span>
                        🔊
                    </span>

                    <span>
                        Nghe
                    </span>

                </button>


                <button
                    className={
                        `mode ${learningMode === "speak"
                            ? "active"
                            : ""
                        }`
                    }
                    onClick={() =>
                        changeMode("speak")
                    }
                >

                    <span>
                        🎤
                    </span>

                    <span>
                        Phát âm
                    </span>

                </button>

            </div>


            {/* =================================
                XEM TỪ
            ================================= */}

            {learningMode === "view" && (

                <VocabularyCard
                    word={currentWord}
                    currentIndex={currentIndex}
                    totalWords={totalWords}
                    nextWord={nextWord}
                    previousWord={previousWord}
                />

            )}


            {/* =================================
                HỌC TỪ
            ================================= */}

            {learningMode === "study" && (

                <StudyCard
                    word={currentWord}
                    isAnswerVisible={
                        isAnswerVisible
                    }
                    showAnswer={
                        showAnswer
                    }
                    markAsRemembered={
                        markAsRemembered
                    }
                    markAsNotRemembered={
                        markAsNotRemembered
                    }
                />

            )}


            {/* =================================
                QUIZ
            ================================= */}

            {learningMode === "quiz" && (

                <QuizCard
                    word={
                        lessonWords[quizIndex]
                    }
                    options={
                        quizOptions
                    }
                    questionNumber={
                        quizIndex + 1
                    }
                    totalQuestions={
                        totalWords
                    }
                    onNext={
                        nextQuizQuestion
                    }
                    onAnswer={
                        handleQuizAnswer
                    }
                />

            )}


            {/* =================================
                GÕ TỪ
            ================================= */}

            {learningMode === "type" && (

                <TypingCard
                    word={currentWord}
                    currentIndex={currentIndex}
                    totalWords={totalWords}
                    onNext={goToNextWord}
                />

            )}


            {/* =================================
                NGHE
            ================================= */}

            {learningMode === "listen" && (

                <ListeningCard
                    word={
                        lessonWords[
                        listeningIndex
                        ]
                    }
                    options={
                        listeningOptions
                    }
                    questionNumber={
                        listeningIndex + 1
                    }
                    totalQuestions={
                        totalWords
                    }
                    onNext={
                        nextListeningQuestion
                    }
                    onAnswer={
                        handleListeningAnswer
                    }
                />

            )}


            {/* =================================
                PHÁT ÂM
            ================================= */}

            {learningMode === "speak" && (
                <SpeakingCard
                    word={currentWord}
                    currentIndex={currentIndex}
                    totalWords={totalWords}
                    onNext={goToNextWord}
                />
            )}

        </div>

    );

}


export default Lesson;