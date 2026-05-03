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
*   **Live Vercel deployment** available at `https://vote-smart-ai-seven.vercel.app`.
*   **Gemini demo fallback** when `VITE_GEMINI_API_KEY` is not provided, with a friendly notice shown in the chat.

## 🛠️ Google Services Integration
**Google Generative AI (Gemini)** is the core intelligence driving the VoteSmart Assistant.
*   **Implementation**: We utilize the `@google/generative-ai` SDK to establish a chat session.
*   **Optimization**: We leverage the Gemini Flash model for sub-second response latency, ensuring the bot feels like a live, snappy assistant. The AI maintains conversation history context, allowing for natural follow-up questions from the user.

## ⚙️ Assumptions Made
1.  **Connectivity**: The solution assumes the user has a stable internet connection to communicate with the Gemini LLM.
2.  **API Keys**: It is assumed that reviewers testing the code locally will inject their own `VITE_GEMINI_API_KEY` into the local `.env` file to activate the live AI.
3.  **Modern Browsers**: The CSS glassmorphism and Framer Motion animations assume the user is on a relatively modern web browser.

## 💻 Tech Stack
*   **Frontend**: React (Vite), Tailwind CSS v4
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **AI Backend**: Google Gemini API

## 🏃‍♂️ How to Run Locally
1. Clone the repository: `git clone https://github.com/pariporwal27/VoteSmart-AI.git`
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example` and add your Google Gemini API Key.
4. Start the server: `npm run dev`
