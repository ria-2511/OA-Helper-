function AssessmentSelector({
  assessments,
  selectedAssessmentId,
  onSelect,
  disabled,
}) {
  return (
    <div className="assessment-selector">
      <h2>Assessment list</h2>
      <div className="assessment-list">
        {assessments.map((assessment) => (
          <button
            key={assessment.assessmentId}
            type="button"
            className={`assessment-card ${
              assessment.assessmentId === selectedAssessmentId ? "selected" : ""
            }`}
            onClick={() => onSelect(assessment.assessmentId)}
            disabled={
              disabled || assessment.assessmentId === selectedAssessmentId
            }
          >
            <span className="assessment-card__title">{assessment.title}</span>
            <span className="assessment-card__meta">
              {assessment.durationMinutes ?? 90} min •{" "}
              {assessment.assessmentType ?? "mixed"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AssessmentSelector;
