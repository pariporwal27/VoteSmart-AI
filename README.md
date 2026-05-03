# VoteSmart AI

An intelligent, AI-powered election guidance platform that helps citizens understand voter registration, deadlines, polling booth lookup, documents, and election-day preparation. The app is built as a responsive civic-tech experience with AI assistance, Google service integrations, accessibility improvements, and production deployment on Vercel.

## Live Demo

**Production app:** https://vote-smart-ai-seven.vercel.app

## Chosen Vertical

**Civic Technology and AI Assistance**

VoteSmart AI focuses on making election information clearer, faster, and more accessible. It combines structured civic workflows with conversational AI so users can move from confusion to action without reading dense government pages first.

## Approach

The product is designed around three ideas:

1. **Personalized guidance:** The roadmap generator uses the user's age, city, and voter status to create a practical checklist.
2. **Conversational support:** The Gemini-powered assistant answers election questions in simple, neutral language.
3. **Actionable integrations:** Google Maps, Google Calendar, Google Search, and optional Google Analytics make the app more useful beyond static information.

## How It Works

* **Hero and education hub:** Introduces the product and links users to simplified civic learning resources.
* **Personalized roadmap:** Generates an interactive checklist for eligibility, documents, registration, booth lookup, and election day.
* **Polling booth finder:** Lets users search by city, select a booth, preview it on Google Maps, open directions, and verify the location on Google Search.
* **Election timeline:** Shows key dates and provides one-click Google Calendar reminders.
* **VoteSmart Assistant:** Uses Google Gemini (`gemini-2.5-flash`) to answer election-related questions with a neutral civic-guide system prompt.

## Latest Features

* Hindi / English language toggle across the UI and chatbot.
* Microphone voice input for chatbot questions.
* BLO helpline call button in the assistant section.
* Form 6 links in both the timeline and personalized roadmap.
* Polling Booth Finder with city-based results.
* Google Maps booth preview and Google Maps directions links.
* Google Search verification links for booth addresses.
* Google Calendar reminders for registration, roll publication, election day, and results.
* Dark mode toggle with class-based Tailwind v4 support and improved contrast.
* Loading skeleton screens for lazy-loaded sections.
* Google Analytics 4 support via `VITE_GA_MEASUREMENT_ID`.
* Keyboard shortcuts help modal available from the navbar or by pressing `?`.
* PWA manifest and SEO/Open Graph/Twitter meta tags.
* Skip-to-content accessibility link.
* Feedback email button.
* Gemini demo fallback when `VITE_GEMINI_API_KEY` is missing.

## Google Services Integration

* **Google Gemini:** Powers the VoteSmart Assistant through `@google/generative-ai`.
* **Google Maps:** Embeds selected booth locations and opens directions in Google Maps.
* **Google Calendar:** Creates event templates for important election deadlines.
* **Google Search:** Opens booth address verification searches.
* **Google Analytics:** Optional GA4 tracking can be enabled with `VITE_GA_MEASUREMENT_ID`.

## Security and Quality

* Input validation and sanitization for forms and chatbot inputs.
* Chatbot rate limiting to reduce abuse.
* Error handling utilities and user-friendly fallback states.
* Network/offline error handling support.
* Vitest test suite for utility behavior.
* ARIA labels, keyboard support, focusable controls, and skip link.
* Lazy loading and code splitting for better performance.

## Tech Stack

* **Frontend:** React, Vite, Tailwind CSS v4
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **AI:** Google Gemini API
* **Maps and productivity:** Google Maps embeds, Google Calendar templates, Google Search links
* **Testing:** Vitest, React Testing Library
* **Deployment:** Vercel

## Environment Variables

Create a `.env` file from `.env.example`.

```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`VITE_GEMINI_API_KEY` enables live AI responses. `VITE_GA_MEASUREMENT_ID` is optional and enables Google Analytics 4 tracking.

## Run Locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm run lint
npm test -- --run
npm run build
```

## Assumptions

* Users have internet access for Gemini, Maps, Calendar, Search, and external civic resources.
* Reviewers can add their own Gemini API key locally.
* Polling booth data is mocked for MVP demonstration, while map/search links show how real address data would plug into the workflow.
