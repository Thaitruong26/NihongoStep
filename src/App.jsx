import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Lesson from "./pages/Lesson";
import Vocabulary from "./pages/Vocabulary";
import Kanji from "./pages/Kanji";
import Grammar from "./pages/Grammar";
import Kana from "./pages/Kana";
import Dashboard from "./pages/Dashboard";
import Roadmap from "./pages/Roadmap";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedLessonId, setSelectedLessonId] = useState(1);

  const goHome = () => setCurrentPage("home");

  const goLesson = (lessonId = selectedLessonId) => {
    setSelectedLessonId(lessonId);
    setCurrentPage("lesson");
  };

  const goVocabulary = () => setCurrentPage("vocabulary");
  const goKanji = () => setCurrentPage("kanji");
  const goGrammar = () => setCurrentPage("grammar");
  const goKana = () => setCurrentPage("kana");
  const goRoadmap = () => setCurrentPage("roadmap");

  const openPage = (page) => {
    if (page === "lesson") {
      goLesson(selectedLessonId);
      return;
    }

    setCurrentPage(page);
  };

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        onHome={goHome}
        onLesson={() => goLesson(selectedLessonId)}
        onVocabulary={goVocabulary}
        onKanji={goKanji}
        onGrammar={goGrammar}
        onKana={goKana}
        onRoadmap={goRoadmap}
      />

      <div className="app-body">
        {(
          currentPage === "lesson" ||
          currentPage === "vocabulary" ||
          currentPage === "kana"
        ) && (
            <Sidebar
              selectedLessonId={selectedLessonId}
              currentPage={currentPage}
              onLesson={goLesson}
              onVocabulary={goVocabulary}
              onKana={goKana}
              onKanji={goKanji}
              onGrammar={goGrammar}
            />
          )}

        <main className="main-content">
          {currentPage === "home" && (
            <Dashboard
              onContinueLearning={() =>
                goLesson(selectedLessonId)
              }
              onOpenPage={openPage}
            />
          )}

          {currentPage === "roadmap" && (
            <Roadmap onOpenPage={openPage} />
          )}

          {currentPage === "lesson" && (
            <Lesson selectedLessonId={selectedLessonId} />
          )}

          {currentPage === "vocabulary" && (
            <Vocabulary onOpenLesson={goLesson} />
          )}

          {currentPage === "kana" && <Kana />}

          {currentPage === "kanji" && <Kanji />}

          {currentPage === "grammar" && <Grammar />}
        </main>
      </div>
    </div>
  );
}

export default App;