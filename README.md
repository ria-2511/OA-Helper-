# OA Helper

A GitHub Pages-friendly React app for mock online assessments. It supports:

- multiple assessments
- mixed MCQ + coding questions
- section-based assessments
- answer-key scoring for MCQs
- external coding problem links to LeetCode, GeeksforGeeks, or any other platform
- zero backend required

## Project structure

- `assessments/configs/` - configuration files for each assessment
- `assessments/questions/` - question files for each assessment
- `assessments/answer-keys/` - answer key files mapped by assessment name
- `src/components/` - reusable app components
- `src/data/` - dataset loader
- `src/App.jsx` - main assessment UI

## Add a new assessment

1. Create a config file in `assessments/configs/`.
2. Create a matching question file in `assessments/questions/` with the same file name.
3. Create a matching answer file in `assessments/answer-keys/` with the same file name.
4. Keep each JSON file name consistent with the `assessmentId` value.

### Example config

```json
{
  "assessmentId": "sample-assessment",
  "title": "Sample OA Assessment",
  "description": "A mixed assessment with MCQ and coding questions.",
  "assessmentType": "mixed",
  "durationMinutes": 90,
  "isSectionBased": true,
  "sections": ["Aptitude", "Coding"]
}
```

### Example question file

```json
{
  "questions": [
    {
      "id": "output-q",
      "type": "mcq",
      "section": "Aptitude",
      "question": "What will be printed?",
      "codeSnippet": {
        "language": "javascript",
        "code": "let a = 1;\nlet b = 2;\nconsole.log(a + b);"
      },
      "options": ["1", "2", "3", "undefined"],
      "correctAnswer": "C"
    },
    {
      "id": "q1",
      "type": "mcq",
      "section": "Aptitude",
      "question": "Which is a JavaScript data type?",
      "options": ["String", "Boolean", "Number", "All of the above"],
      "correctAnswer": "D"
    },
    {
      "id": "c1",
      "type": "coding",
      "section": "Coding",
      "platform": "LeetCode",
      "link": "https://leetcode.com/problems/two-sum/",
      "question": "Two Sum",
      "description": "Solve the problem on the platform and continue."
    }
  ]
}
```

You can add a code block to any question by using `codeSnippet` with either a string or an object like `{ language: 'javascript', code: '...' }`.

### Example answer key file

```json
{
  "answers": {
    "q1": "D"
  }
}
```

## Local development

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
```

This creates a static `dist` folder that can be deployed to GitHub Pages.

## GitHub Pages note

Yes — GitHub Pages supports static React apps, including Vite builds. The important part is that you deploy the built static output, not the raw source files. Because this app is a Vite app, you should:

1. run `npm run build`
2. publish the generated `dist` directory to GitHub Pages or configure a GitHub Actions workflow
3. keep the `base: './'` setting in `vite.config.js` so relative links work correctly on the hosted page

If you want a repo-based GitHub Pages setup, the recommended path is:

- feature branch with the app source, and
- deploy the `dist` output to the `gh-pages` branch or via GitHub Actions

This project is intentionally frontend-only and does not require a backend.
