const STORAGE_KEY = "nihongostep_learning_progress";

function readAll() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        const parsed = saved ? JSON.parse(saved) : {};

        return parsed &&
            typeof parsed === "object" &&
            !Array.isArray(parsed)
            ? parsed
            : {};
    } catch {
        return {};
    }
}

function writeAll(data) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );
    } catch (error) {
        console.error("Không thể lưu tiến độ học:", error);
    }
}

export function getLessonProgress(lessonId) {
    const lesson = readAll()[String(lessonId)] || {};

    return {
        rememberedWordIds: Array.isArray(
            lesson.rememberedWordIds
        )
            ? lesson.rememberedWordIds
            : [],

        quizAttempts: Array.isArray(lesson.quizAttempts)
            ? lesson.quizAttempts
            : [],

        listeningAttempts: Array.isArray(
            lesson.listeningAttempts
        )
            ? lesson.listeningAttempts
            : []
    };
}

export function saveRememberedWords(lessonId, wordIds) {
    const all = readAll();
    const key = String(lessonId);
    const existing = all[key] || {};

    all[key] = {
        ...existing,
        rememberedWordIds: [...new Set(wordIds)],

        quizAttempts: Array.isArray(existing.quizAttempts)
            ? existing.quizAttempts
            : [],

        listeningAttempts: Array.isArray(
            existing.listeningAttempts
        )
            ? existing.listeningAttempts
            : []
    };

    writeAll(all);
}

export function savePracticeAttempt(
    lessonId,
    mode,
    score,
    total
) {
    const all = readAll();
    const key = String(lessonId);
    const existing = all[key] || {};

    const property = mode === "quiz"
        ? "quizAttempts"
        : "listeningAttempts";

    const attempts = Array.isArray(existing[property])
        ? existing[property]
        : [];

    all[key] = {
        ...existing,

        rememberedWordIds: Array.isArray(
            existing.rememberedWordIds
        )
            ? existing.rememberedWordIds
            : [],

        quizAttempts: Array.isArray(existing.quizAttempts)
            ? existing.quizAttempts
            : [],

        listeningAttempts: Array.isArray(
            existing.listeningAttempts
        )
            ? existing.listeningAttempts
            : [],

        [property]: [
            ...attempts,
            {
                score,
                total,
                completedAt: new Date().toISOString()
            }
        ].slice(-20)
    };

    writeAll(all);
}

export function getAllLearningProgress() {
    return readAll();
}