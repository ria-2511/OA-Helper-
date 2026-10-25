# Company Info Blog Authoring Guide

Use this repository as a static React + JSON-based app for two things:

1. quiz assessments
2. company info pages for placement preparation

When creating a new company info page, create the content in a consistent structure so the app can render it without missing details.

## Core rules

1. Every company page should live in `company-info/*.json`.
2. The file name should match the `companyId` value.
3. Each company JSON object should include:
   - `companyId`
   - `name`
   - `tagline`
   - `overview`
   - `highlights`
   - `targetTopics`
   - `links`
   - `notes`
   - `sections`
   - `questions`
4. Use a simple layout for the page:
   - header/title
   - short overview
   - highlights list
   - useful links
   - content sections
   - FAQ-like interview question answers
5. Keep each company page static and simple. No backend is required.
6. If you add a new company, also add a summary entry to `company-info/index.json`.
7. Keep `name`, `companyId`, and file names consistent.
8. If the user wants to add more details, include them in `sections` or `questions` rather than creating custom code paths.
9. The app should stay GitHub Pages friendly and easy to extend.

## Required company page shape

```json
{
  "companyId": "infosys",
  "name": "Infosys",
  "tagline": "A global leader in consulting, technology, and outsourcing.",
  "overview": "Short description of the company.",
  "highlights": [
    "Campus-friendly hiring process",
    "Core CS fundamentals matter"
  ],
  "targetTopics": [
    "Aptitude",
    "OOPs",
    "DBMS"
  ],
  "links": [
    { "label": "Company Careers", "url": "https://example.com" }
  ],
  "notes": [
    "Practice aptitude mocks and short technical explanations.",
    "Use this section for any extra company-specific reminders."
  ],
  "sections": [
    {
      "heading": "Interview pattern",
      "content": "Describe the general process here."
    }
  ],
  "questions": [
    {
      "question": "What topics should I prepare?",
      "answer": "Answer here."
    }
  ]
}
```

## Authoring checklist

Before finalizing a company page, ask the user these questions in this exact order and wait for answers before creating any file:

1. What is the company name?
2. What is the company short tagline?
3. What overview should I include for this company?
4. Which highlights or special points should be included?
5. Which topics should this company target in interviews or screening tests?
6. Which useful links should be added? (company site, careers, developer portal, preparation resources, etc.)
7. Do you want a notes section for extra reminders or strategy?
8. What sections do you want to add? Examples: interview process, hiring pattern, preparation strategy, role overview, domain-specific notes.
9. Do you want interview-facing questions and answers for the company? If yes, what are they?
10. Do you want a short profile or a more detailed company prep page?
11. Should this page include only company info, or also resume/placement-specific notes?
12. Do you want to include any role-specific or topic-specific notes such as AI, SDE, data, systems, or product roles?
13. Are there any company-specific rules, topics, or constraints to avoid?

After collecting the answers, organize the information into these sections for every company:

- Overview
- Highlights
- Topics the company targets
- Useful links
- Notes
- Interview prep sections
- Q&A / interview notes

If the user does not provide some fields, leave them blank or ask one follow-up question instead of guessing.

## Authoring workflow

When creating a new company info page, do the following in order:

1. Ask the checklist questions above and wait for answers.
2. Confirm the final structure with the user if any section is unclear.
3. Create the company JSON file in `company-info/`.
4. Add the company summary to `company-info/index.json`.
5. Keep the naming consistent across file name, `companyId`, and `name`.
6. Validate the app by running `npm run build`.

Important: do not create the company file immediately just because the user says “create a company page.” Ask the questions first. This prevents missing information and makes each company page consistent.

## Important reminders

- Do not create a company page without a matching entry in `company-info/index.json`.
- Do not assume content. Always ask the user for the company details before creating a page.
- If the user gives exact topics, links, notes, or Q&A content, preserve them exactly and do not replace them with generic assumptions.
- If the user provides specific URLs, use those exact URLs in the final JSON instead of substituting other website links.
- Do not add random company links or generic sources when the user has already given a preferred list.
- Keep content useful for placement prep, not just generic marketing text.
- Use `targetTopics` for the topics the company usually tests.
- Use `notes` for personal reminders or extra info.
- Use `sections` for educational details and `questions` for short FAQ-style interview prep.
- Use real links only when the user provides them; otherwise leave a placeholder or ask for final URLs.
- Keep the app simple, static, and GitHub Pages friendly.

## Default behavior for this repo

If the user says they want a company info page without extra details, ask the missing questions before creating the JSON content. Do not assume the structure or content without confirmation.

For every new company, use this flow:

1. Ask for the company basics.
2. Ask what sections they want.
3. Ask which topics and links to include.
4. Ask whether they want notes or Q&A.
5. If the user provides exact links, topics, or notes, copy those exactly.
6. Never replace the user’s specific URLs with generic defaults.
7. Then create the JSON file and add it to `company-info/index.json`.
8. Validate the build.
