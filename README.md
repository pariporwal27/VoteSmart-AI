# VoteSmart AI 🗳️

An intelligent, AI-powered election guidance platform designed to simplify complex election procedures, deadlines, and requirements for citizens. Built for a seamless and responsive hackathon experience.

## � Live Demo
**Visit the deployed app:** https://vote-smart-ai-seven.vercel.app

## �🎯 Chosen Vertical
**Civic Technology & AI Assistance**
Our chosen vertical focuses on empowering citizens with accessible, unbiased, and personalized election information using modern web architecture and generative AI.

## 🧠 Approach and Logic
The platform is designed to break down the overwhelming process of voting into manageable, actionable steps. Our approach relies on two core pillars:
1. **Dynamic Contextualization**: Instead of providing users with a generic wall of text, the **Personalized Roadmap** uses logical branching to generate a custom timeline and checklist based on the user's specific age, state, and current registration status.
2. **Conversational Intelligence**: We recognize that citizens have highly specific edge-case questions. Rather than building an exhaustive FAQ, we integrated Google's Generative AI to provide real-time, contextually aware answers in a friendly, conversational format.

## 🚀 How the Solution Works
*   **Hero & Educational Hub**: Instantly hooks the user with high-performance Framer Motion animations and provides simplified cards explaining voter rights and privacy.
*   **Personalized Roadmap Generator**: Users input their demographic context, and the React state engine maps their inputs to a dynamically rendered, interactive checklist. Users can physically check off tasks as they complete them.
*   **Interactive Election Timeline**: A responsive UI element that visualizes critical approaching deadlines to prevent voter drop-off.
*   **VoteSmart Assistant (Gemini AI)**: A fully functional chatbot connected to the **Google Gemini API (`gemini-2.5-flash`)**. It utilizes a strict system instruction prompt to ensure all responses are completely unbiased, avoid political jargon, and strictly serve as a civic guide.

## ✨ Latest Features
*   **Hindi / English language toggle** across the entire UI and chatbot.
*   **Microphone voice input** in the chatbot for hands-free question entry.
*   **BLO helpline call button** added to the chat assistant section for quick support.
*   **Form 6 download link** added directly to the election timeline registration deadline step.
*   **Form 6 access in the Personalized Roadmap** registration step for easy voter onboarding.
*   **Polling Booth Finder** - Search and locate nearby polling booths by city.
*   **Google Maps booth preview** - Select any found booth to view its map location and open directions in Google Maps.
*   **Dark mode toggle** with improved contrast for forms, cards, navigation, and section backgrounds.
*   **Loading skeleton screens** for lazy-loaded sections to keep the app feeling responsive.
*   **Google Analytics 4 support** through `VITE_GA_MEASUREMENT_ID`.
*   **Keyboard shortcuts help modal** available from the navbar or by pressing `?`.
*   **PWA manifest and SEO meta tags** for better installability and sharing.
*   **Skip-to-content link** for keyboard and screen-reader accessibility.
*   **Feedback email button** for quick support contact.
*   **Live Vercel deployment** available at `https://vote-smart-ai-seven.vercel.app`.
*   **Gemini demo fallback** when `VITE_GEMINI_API_KEY` is not provided, with a friendly notice shown in the chat.

## 🔒 Security & Quality Improvements 
*   **Input validation & sanitization** across all forms and chatbot inputs to prevent XSS attacks.
*   **Rate limiting** on chatbot API calls to prevent abuse (10 requests per minute).
*   **Error boundary components** for graceful error handling and user recovery.
*   **Network error detection** with retry suggestions for offline scenarios.
*   **Test suite added** with Vitest + React Testing Library for components and utilities.
*   **Improved accessibility** with ARIA labels, screen reader announcements, and focus management.
*   **Error logging utility** for debugging and monitoring (ready for Sentry integration).

## 🛠️ Google Services Integration
**Google Generative AI (Gemini)** is the core intelligence driving the VoteSmart Assistant.
*   **Implementation**: We utilize the `@google/generative-ai` SDK to establish a chat session.
*   **Optimization**: We leverage the Gemini Flash model for sub-second response latency, ensuring the bot feels like a live, snappy assistant. The AI maintains conversation history context, allowing for natural follow-up questions from the user.
*   **Google Maps**: Polling booth search results include an embedded Google Maps preview and direct links for opening the selected booth in Google Maps.
*   **Google Analytics**: Optional GA4 tracking can be enabled by setting `VITE_GA_MEASUREMENT_ID`.

## ⚙️ Assumptions Made
1.  **Connectivity**: The solution assumes the user has a stable internet connection to communicate with the Gemini LLM.
2.  **API Keys**: It is assumed that reviewers testing the code locally will inject their own `VITE_GEMINI_API_KEY` into the local `.env` file to activate the live AI.
3.  **Modern Browsers**: The CSS glassmorphism and Framer Motion animations assume the user is on a relatively modern web browser.

## 💻 Tech Stack
*   **Frontend**: React (Vite), Tailwind CSS v4
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **AI Backend**: Google Gemini API
*   **Maps**: Google Maps embed and search links

## 🏃‍♂️ How to Run Locally
1. Clone the repository: `git clone https://github.com/pariporwal27/VoteSmart-AI.git`
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example` and add your Google Gemini API Key.
4. Start the server: `npm run dev`
5. Run tests: `npm run test` (uses Vitest)
6. Build for production: `npm run build`
