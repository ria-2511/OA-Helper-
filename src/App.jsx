import { useEffect, useMemo, useState } from 'react'
import AssessmentSelector from './components/AssessmentSelector'
import QuestionPanel from './components/QuestionPanel'
import ResultsSummary from './components/ResultsSummary'
import { assessments, defaultAssessment } from './data/assessments'
import './App.css'

const STORAGE_KEY = 'oa-helper-progress'

const getSavedProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function App() {
  const savedProgress = getSavedProgress()

  const [selectedAssessmentId, setSelectedAssessmentId] = useState(
    savedProgress?.selectedAssessmentId ??
      defaultAssessment?.assessmentId ??
      assessments[0]?.assessmentId ??
      '',
  )
  const [currentIndex, setCurrentIndex] = useState(savedProgress?.currentIndex ?? 0)
  const [selectedAnswers, setSelectedAnswers] = useState(savedProgress?.selectedAnswers ?? {})
  const [isSubmitted, setIsSubmitted] = useState(savedProgress?.isSubmitted ?? false)

  useEffect(() => {
    const progress = {
      selectedAssessmentId,
      currentIndex,
      selectedAnswers,
      isSubmitted,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [selectedAssessmentId, currentIndex, selectedAnswers, isSubmitted])

  const assessment = useMemo(
    () => assessments.find((item) => item.assessmentId === selectedAssessmentId) ?? defaultAssessment,
    [selectedAssessmentId],
  )

  const questions = assessment?.questions ?? []
  const answerKey = assessment?.answerKey ?? {}
  const currentQuestion = questions[currentIndex]

  const sections = useMemo(() => {
    const names = new Set()
    questions.forEach((question) => {
      if (question.section) names.add(question.section)
    })
    return Array.from(names)
  }, [questions])

  const sectionMap = useMemo(() => {
    return questions.reduce((acc, question) => {
      const sectionName = question.section || 'General'
      acc[sectionName] = [...(acc[sectionName] ?? []), question]
      return acc
    }, {})
  }, [questions])

  const navigateToAssessment = (assessmentId) => {
    setSelectedAssessmentId(assessmentId)
    setCurrentIndex(0)
    setSelectedAnswers({})
    setIsSubmitted(false)
  }

  const handleSelectAnswer = (questionId, value) => {
    setSelectedAnswers((previous) => ({ ...previous, [questionId]: value }))
  }

  const handleNext = () => {
    setCurrentIndex((index) => Math.min(index + 1, questions.length - 1))
  }

  const handlePrevious = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0))
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY)
    setSelectedAssessmentId(defaultAssessment?.assessmentId ?? assessments[0]?.assessmentId ?? '')
    setCurrentIndex(0)
    setSelectedAnswers({})
    setIsSubmitted(false)
  }

  if (!assessment) {
    return (
      <main className="app-shell empty-state">
        <h1>No assessment found</h1>
        <p>Add a JSON assessment config and matching question files in the assessments folders.</p>
      </main>
    )
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
          <span>{assessment.assessmentType ?? 'mixed'}</span>
        </div>
      </header>

      <AssessmentSelector
        assessments={assessments}
        selectedAssessmentId={selectedAssessmentId}
        onSelect={navigateToAssessment}
        disabled={true}
      />

      <div className="assessment-body">
        <aside className="sidebar">
          <h3>Sections</h3>
          {assessment.isSectionBased && sections.length > 0 ? (
            <div className="section-list">
              {sections.map((section) => (
                <div key={section} className="section-pill">
                  <span>{section}</span>
                  <strong>{sectionMap[section]?.length ?? 0}</strong>
                </div>
              ))}
            </div>
          ) : (
            <p className="muted">This assessment does not use section-based grouping.</p>
          )}

          <div className="summary-box">
            <h4>Progress</h4>
            <p>
              {Object.keys(selectedAnswers).length} answered / {questions.length} total
            </p>
            <button type="button" className="reset-button" onClick={resetProgress}>
              Reset progress
            </button>
          </div>
        </aside>

        <section className="main-panel">
          {!isSubmitted ? (
            <>
              {assessment.description && <p className="assessment-description">{assessment.description}</p>}

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
  )
}

export default App
