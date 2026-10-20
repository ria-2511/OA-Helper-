import { useMemo, useState } from "react";
import AssessmentSelector from "./components/AssessmentSelector";
import QuestionPanel from "./components/QuestionPanel";
import ResultsSummary from "./components/ResultsSummary";
import { assessments, defaultAssessment } from "./data/assessments";
import "./App.css";

function App() {
  const [selectedAssessmentId, setSelectedAssessmentId] = useState(
    defaultAssessment?.assessmentId ?? assessments[0]?.assessmentId ?? "",
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [confirmedAnswers, setConfirmedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const assessment = useMemo(
    () =>
      assessments.find((item) => item.assessmentId === selectedAssessmentId) ??
      defaultAssessment,
    [selectedAssessmentId],
  );

  const questions = assessment?.questions ?? [];
  const answerKey = assessment?.answerKey ?? {};
  const currentQuestion = questions[currentIndex];

  const sections = useMemo(() => {
    const names = new Set();
    questions.forEach((question) => {
      if (question.section) names.add(question.section);
    });
    return Array.from(names);
  }, [questions]);

  const sectionMap = useMemo(() => {
    return questions.reduce((acc, question) => {
      const sectionName = question.section || "General";
      acc[sectionName] = [...(acc[sectionName] ?? []), question];
      return acc;
    }, {});
  }, [questions]);

  const currentSection = currentQuestion?.section || sections[0] || "General";

  const navigateToAssessment = (assessmentId) => {
    setSelectedAssessmentId(assessmentId);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setConfirmedAnswers({});
    setIsSubmitted(false);
  };

  const handleSelectAnswer = (questionId, value) => {
    setSelectedAnswers((previous) => ({ ...previous, [questionId]: value }));
  };

  const commitCurrentAnswer = () => {
    if (!currentQuestion?.id) {
      return;
    }

    const currentAnswer = selectedAnswers[currentQuestion.id];
    if (!currentAnswer) {
      return;
    }

    setConfirmedAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: currentAnswer,
    }));
  };

  const handleNext = () => {
    commitCurrentAnswer();
    setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  const handleSubmit = () => {
    commitCurrentAnswer();
    setIsSubmitted(true);
  };

  const handleSectionSelect = (sectionName) => {
    const firstIndex = questions.findIndex(
      (question) => (question.section || "General") === sectionName,
    );

    if (firstIndex >= 0) {
      setCurrentIndex(firstIndex);
    }
  };

  const resetProgress = () => {
    setSelectedAssessmentId(
      defaultAssessment?.assessmentId ?? assessments[0]?.assessmentId ?? "",
    );
    setCurrentIndex(0);
    setSelectedAnswers({});
    setConfirmedAnswers({});
    setIsSubmitted(false);
  };

  if (!assessment) {
    return (
      <main className="app-shell empty-state">
        <h1>No assessment found</h1>
        <p>
          Add a JSON assessment config and matching question files in the
          assessments folders.
        </p>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">OA Helper</p>
          <h1>{assessment.title}</h1>
        </div>
        <div className="assessment-meta">
          <span>{assessment.durationMinutes ?? 90} min</span>
          <span>{assessment.assessmentType ?? "mixed"}</span>
        </div>
      </header>

      <AssessmentSelector
        assessments={assessments}
        selectedAssessmentId={selectedAssessmentId}
        onSelect={navigateToAssessment}
        disabled={false}
      />

      <div className="assessment-body">
        <aside className="sidebar">
          <h3>Sections</h3>
          {assessment.isSectionBased && sections.length > 0 ? (
            <div className="section-list">
              {sections.map((section) => (
                <button
                  key={section}
                  type="button"
                  className={`section-pill ${currentSection === section ? "active" : ""}`}
                  onClick={() => handleSectionSelect(section)}
                >
                  <span>{section}</span>
                  <strong>{sectionMap[section]?.length ?? 0}</strong>
                </button>
              ))}
            </div>
          ) : (
            <p className="muted">
              This assessment does not use section-based grouping.
            </p>
          )}

          <div className="summary-box">
            <h4>Progress</h4>
            <p>
              {Object.keys(confirmedAnswers).length} answered / {questions.length} total
            </p>
            <button
              type="button"
              className="reset-button"
              onClick={resetProgress}
            >
              Reset progress
            </button>
          </div>
        </aside>

        <section className="main-panel">
          {!isSubmitted ? (
            <>
              {assessment.description && (
                <p className="assessment-description">
                  {assessment.description}
                </p>
              )}

              <QuestionPanel
                question={currentQuestion}
                questionNumber={currentIndex + 1}
                totalQuestions={questions.length}
                selectedAnswer={selectedAnswers[currentQuestion?.id]}
                onSelectAnswer={handleSelectAnswer}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onSubmit={handleSubmit}
                isFirst={currentIndex === 0}
                isLast={currentIndex === questions.length - 1}
              />
            </>
          ) : (
            <ResultsSummary
              assessment={assessment}
              questions={questions}
              selectedAnswers={selectedAnswers}
              answerKey={answerKey}
              answerExplanations={assessment.answerExplanations}
            />
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
