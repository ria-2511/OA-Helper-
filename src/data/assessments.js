const configModules = import.meta.glob("../../assessments/configs/*.json", {
  eager: true,
});
const questionModules = import.meta.glob("../../assessments/questions/*.json", {
  eager: true,
});
const answerKeyModules = import.meta.glob(
  "../../assessments/answer-keys/*.json",
  { eager: true },
);

const toEntry = (module) => module.default ?? module;

export const assessments = Object.values(configModules)
  .map((module) => {
    const config = toEntry(module);
    const assessmentId = config.assessmentId ?? config.id;
    const questionFile =
      questionModules[`../../assessments/questions/${assessmentId}.json`];
    const answerKeyFile =
      answerKeyModules[`../../assessments/answer-keys/${assessmentId}.json`];

    const questions = toEntry(questionFile ?? {});
    const answerKey = toEntry(answerKeyFile ?? {});

    return {
      ...config,
      assessmentId,
      questions: questions.questions ?? questions.sections ?? [],
      answerKey: answerKey.answers ?? {},
      answerExplanations: answerKey.explanations ?? {},
    };
  })
  .filter((assessment) => assessment.assessmentId);

export const defaultAssessment = assessments[0] ?? null;
