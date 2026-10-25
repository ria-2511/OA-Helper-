function ResultsSummary({
  assessment,
  questions,
  selectedAnswers,
  answerKey,
  answerExplanations,
}) {
  if (!assessment) {
    return null;
  }

  const mcqQuestions = questions.filter(
    (question) => question.type === "mcq" || question.type === "coding-mcq",
  );
  const totalMcqs = mcqQuestions.length;
  const score = mcqQuestions.reduce((count, question) => {
    const selected = selectedAnswers[question.id];
    const correctAnswer = answerKey?.[question.id];
    return selected && selected === correctAnswer ? count + 1 : count;
  }, 0);

  return (
    <section className="results-summary">
      <h2>Assessment Summary</h2>

      <div className="score-badge">
        <strong>{score}</strong>
        <span>/ {totalMcqs} MCQ correct</span>
      </div>

      <div className="result-grid">
        <div>
          <h3>Attempted questions</h3>
          <p>
            {Object.keys(selectedAnswers).length} / {questions.length}
          </p>
        </div>
        <div>
          <h3>Assessment type</h3>
          <p>{assessment.assessmentType || "Mixed"}</p>
        </div>
        <div>
          <h3>Time limit</h3>
          <p>{assessment.durationMinutes || 90} minutes</p>
        </div>
      </div>

      <div className="answer-review">
        {mcqQuestions.map((question) => {
          const selected = selectedAnswers[question.id];
          const correct = answerKey?.[question.id];
          const isCorrect = selected && selected === correct;
          const explanation =
            answerExplanations?.[question.id]?.explanation ||
            answerExplanations?.[question.id];

          return (
            <div
              key={question.id}
              className={`review-item ${isCorrect ? "correct" : "incorrect"}`}
            >
              <span>{question.question || question.prompt}</span>
              <p>
                Your answer: <strong>{selected || "Not answered"}</strong>
              </p>
              <p>
                Correct answer: <strong>{correct || "Not available"}</strong>
              </p>

              {!isCorrect && explanation && (
                <div className="explanation-box">
                  <strong>Explanation:</strong>
                  <p>{explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="coding-review-note">
        Coding questions are intentionally linked out so you can solve them on
        your platform of choice.
      </div>
    </section>
  );
}

export default ResultsSummary;
