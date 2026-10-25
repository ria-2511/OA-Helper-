function CodeSnippetMcqOptions({
  questionId,
  options,
  selectedAnswer,
  onSelectAnswer,
}) {
  return (
    <div className="options-list options-list--code">
      {options.map((option, index) => {
        const optionLabel = String.fromCharCode(65 + index);
        const isSelected = selectedAnswer === optionLabel;
        const snippet =
          typeof option === "string"
            ? option
            : (option.code ?? option.text ?? "");
        const language =
          typeof option === "string" ? "" : (option.language ?? "javascript");

        return (
          <label
            key={`${questionId}-${optionLabel}`}
            className={`option-item option-item--code ${isSelected ? "selected" : ""}`}
          >
            <input
              type="radio"
              name={questionId}
              value={optionLabel}
              checked={isSelected}
              onChange={() => onSelectAnswer(questionId, optionLabel)}
            />
            <span className="option-label">{optionLabel}</span>
            <span className="code-option">
              {language && (
                <span className="code-option__language">{language}</span>
              )}
              <pre className="code-option__snippet">
                <code>{snippet}</code>
              </pre>
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default CodeSnippetMcqOptions;
