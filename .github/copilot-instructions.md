# OA Helper Quiz Authoring Guide

Use this repository as a static React + JSON-based assessment app. When creating a new quiz, always follow these rules so the app loads correctly and nothing important is missed.

## Core rules

1. Create exactly three JSON files for each new assessment:
   - `assessments/configs/<assessment-name>.json`
   - `assessments/questions/<assessment-name>.json`
   - `assessments/answer-keys/<assessment-name>.json`
2. Keep the file name and the `assessmentId` value consistent.
3. Use a numbered generic title if the user prefers a simpler selector, such as:
   - `Assessment 1`
   - `Assessment 2`
   - `Assessment 3`
4. The config file must include:
   - `assessmentId`
   - `title`
   - `description`
   - `assessmentType`
   - `durationMinutes`
   - `isSectionBased`
   - `sections`
5. `assessmentType` must be one of:
   - `mixed`
   - `mcq`
   - `coding`
6. Section names in the config must match the `section` values used in the question file.
7. Each question must have a unique `id`.
8. The questions file must be shaped like:
   ```json
   {
     "questions": [
       {
         "id": "q1",
         "type": "mcq",
         "section": "Aptitude",
         "question": "Sample question",
         "options": ["A", "B", "C", "D"],
         "correctAnswer": "C"
       }
     ]
   }
   ```
9. The answer key file must include both:
   - `answers`
   - `explanations` (optional but recommended)
10. If the user says the quiz is section-based, every question must belong to one of the listed sections.
11. If the quiz is coding-only, do not add MCQ options unless the user specifically says to include coding MCQ style questions.
12. For coding MCQ questions, use `type: "coding-mcq"` and give `codeSnippet` plus option objects or text options.
13. For external coding problems, use `type: "coding"` with `platform` and `link`.
14. Keep the app working by validating with `npm run build` after creating the assessment.

## Question creation checklist

Before finalizing a quiz, confirm these details with the user:

1. What is the quiz name or generic label? (for example: Assessment 5)
2. What is the assessment type?
   - mixed
   - mcq only
   - coding only
3. How many questions should it contain?
4. What is the time limit in minutes?
5. Which sections should it contain?
6. Are the questions standard MCQ, coding MCQ, or coding platform problems?
7. Should each question have a code snippet?
8. Should each question have a link/platform for coding problems?
9. Should there be answer explanations after submission?
10. Should the quiz be section-based or a single continuous list?
11. Are the question difficulty and topic mix already decided?
12. What is the difficulty level for each section being added? (for example: OOPs = medium, OS = easy, DBMS = hard)
13. Does the user want a beginner/medium/hard level set?
14. Are there any topic constraints or exclusions?

## Authoring workflow

When creating a new quiz, do the following in order:

1. Ask the user the checklist questions above, including the per-section difficulty level.
2. Create the config JSON.
3. Create the questions JSON.
4. Create the answer-key JSON.
5. Ensure unique question IDs and consistent section names.
6. Validate the app by running `npm run build`.
7. If the user wants a new numbered assessment, update the title to a generic label like `Assessment X`.

## Important reminders

- Do not skip the answer-key file.
- Do not create a question without a matching section if `isSectionBased` is true.
- Do not mix incompatible question types unless the user explicitly requests it.
- If coding links are required, leave placeholders only if the user has not yet given the final URLs.
- Always keep the repo simple, static, and GitHub Pages friendly.

## Good examples

### MCQ-only config
```json
{
  "assessmentId": "assessment-5",
  "title": "Assessment 5",
  "description": "A 20-question MCQ quiz on operating systems.",
  "assessmentType": "mcq",
  "durationMinutes": 30,
  "isSectionBased": true,
  "sections": ["OS"]
}
```

### Coding-only config
```json
{
  "assessmentId": "assessment-6",
  "title": "Assessment 6",
  "description": "Three coding problems for practice.",
  "assessmentType": "coding",
  "durationMinutes": 90,
  "isSectionBased": false,
  "sections": []
}
```

## Default behavior for this repo

If the user says “create a new quiz” without extra details, ask the missing questions before generating files. Do not assume the quiz type, section count, or time limit.
