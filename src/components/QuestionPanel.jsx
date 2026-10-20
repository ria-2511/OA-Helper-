import CodeSnippetMcqOptions from './CodeSnippetMcqOptions'

function QuestionPanel({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onPrevious,
  onNext,
  onSubmit,
  isFirst,
  isLast,
}) {
  if (!question) {
    return null
  }

  const options = Array.isArray(question.options) ? question.options : []
  const codeSnippet = question.codeSnippet ?? question.snippet ?? question.code ?? null
  const formattedCodeSnippet =
    typeof codeSnippet === 'string'
      ? { language: 'javascript', code: codeSnippet }
      : codeSnippet && typeof codeSnippet === 'object'
        ? { language: codeSnippet.language ?? 'javascript', code: codeSnippet.code ?? codeSnippet.text ?? '' }
        : null

  return (
    <section className="question-panel">
      <div className="question-panel__header">
        <span className="question-index">
          Question {questionNumber} / {totalQuestions}
        </span>
        <span className="question-type">{question.type?.toUpperCase() || 'QUESTION'}</span>
      </div>

      <h2>{question.question || question.prompt}</h2>

      {question.description && <p className="question-description">{question.description}</p>}

      {formattedCodeSnippet?.code && (
        <div className="question-code-block">
          {formattedCodeSnippet.language && (
            <span className="code-option__language">{formattedCodeSnippet.language}</span>
          )}
          <pre className="code-option__snippet">
            <code>{formattedCodeSnippet.code}</code>
          </pre>
        </div>
      )}

      {question.type === 'mcq' ? (
        <div className="options-list">
          {options.map((option, index) => {
            const optionLabel = String.fromCharCode(65 + index)
            const isSelected = selectedAnswer === optionLabel

            return (
              <label
                key={`${question.id}-${optionLabel}`}
                className={`option-item ${isSelected ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={optionLabel}
                  checked={isSelected}
                  onChange={() => onSelectAnswer(question.id, optionLabel)}
                />
                <span className="option-label">{optionLabel}</span>
                <span>{option}</span>
              </label>
            )
          })}
        </div>
      ) : question.type === 'coding-mcq' ? (
        <CodeSnippetMcqOptions
          questionId={question.id}
          options={options}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={onSelectAnswer}
        />
      ) : (
        <div className="coding-card">
          <p>
            Solve this problem on your chosen platform and then continue with the next question.
          </p>
          {question.platform && (
            <div className="coding-platform">Platform: {question.platform}</div>
          )}
          {question.link && (
            <a href={question.link} target="_blank" rel="noreferrer" className="coding-link">
              Open {question.platform || 'coding question'}
            </a>
          )}
          {question.problemStatement && (
            <div className="problem-statement">{question.problemStatement}</div>
          )}
        </div>
      )}

      <div className="question-actions">
        {!isFirst && (
          <button type="button" className="secondary-button" onClick={onPrevious}>
            Previous
          </button>
        )}

        {!isLast ? (
          <button type="button" onClick={onNext}>
            Next
          </button>
        ) : (
          <button type="button" onClick={onSubmit}>
            Finish assessment
          </button>
        )}
      </div>
    </section>
  )
}

export default QuestionPanel
