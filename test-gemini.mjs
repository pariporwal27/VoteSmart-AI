import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyD5dqJkfJVA4xaX-pS9oS8ZMorlD2evNtg');

async function run() {
    try {
        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyD5dqJkfJVA4xaX-pS9oS8ZMorlD2evNtg");
        const data = await response.json();
        const flashModels = data.models.filter(m => m.name.includes("flash"));
        console.log("Flash Models:", flashModels.map(m => m.name));
    } catch (e) {
        console.error("Error:", e);
    }
}
run();
