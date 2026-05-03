import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm VoteSmart AI. I can help you with registration, finding polling booths, or understanding your eligibility. What would you like to know?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [apiError, setApiError] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize Gemini API
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
  
  // We keep a chat history to maintain conversation context
  const [chatHistory, setChatHistory] = useState([]);

  const quickReplies = [
    "Am I eligible to vote?",
    "How do I register?",
    "What documents do I need?",
    "I lost my Voter ID"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    
    // Add user message to UI
    const userMsg = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setApiError(false);

    if (!genAI) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          text: "I'm currently in demo mode! To enable live AI responses, please add your Gemini API key to the .env file as VITE_GEMINI_API_KEY.", 
          sender: 'ai' 
        }]);
        setIsTyping(false);
        setApiError(true);
      }, 1000);
      return;
    }

    try {
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        systemInstruction: "You are VoteSmart AI, a helpful, unbiased, and friendly election companion assistant. Your goal is to help citizens understand the election process, voter registration, deadlines, and requirements. Provide concise, step-by-step answers. Use formatting like bullet points when helpful. Avoid complicated legal jargon and NEVER show political bias."
      });

      const chat = model.startChat({
        history: chatHistory,
      });

      const result = await chat.sendMessage(text);
      const responseText = result.response.text();

      // Update history for context
      setChatHistory([
        ...chatHistory,
        { role: "user", parts: [{ text }] },
        { role: "model", parts: [{ text: responseText }] }
      ]);

      setMessages(prev => [...prev, { id: Date.now() + 1, text: responseText, sender: 'ai' }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "I'm sorry, I encountered an error connecting to the AI brain. Please make sure your API key is valid and you have an active internet connection.", 
        sender: 'ai' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="chatbot" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ask the AI Assistant
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4">
            Get instant, unbiased answers to all your election-related questions powered by real-time LLM intelligence.
          </p>
          {!apiKey && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 rounded-lg text-sm">
              <AlertCircle size={16} /> API Key missing. Running in demo mode.
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 h-[600px] flex flex-col relative">
          {/* Header */}
          <div className="bg-[var(--primary)] text-white p-4 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight">VoteSmart Assistant</h3>
              <p className="text-blue-200 text-xs flex items-center gap-1">
                <Sparkles size={10} /> Powered by Gemini AI
              </p>
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === 'user' ? 'bg-[var(--secondary)] text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                      {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-[var(--primary)] text-white rounded-tr-none shadow-sm' 
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none shadow-sm prose prose-sm prose-slate dark:prose-invert max-w-none'
                    }`}>
                      {/* Render markdown-like spacing manually for simple AI text */}
                      {msg.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line.startsWith('* ') ? <li className="ml-4">{line.substring(2)}</li> : line}
                          {i !== msg.text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex gap-2 max-w-[80%]">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-700 rounded-tl-none shadow-sm flex gap-1 items-center">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-3 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex gap-2 overflow-x-auto no-scrollbar">
            {quickReplies.map((reply, i) => (
              <button
                key={i}
                onClick={() => handleSend(reply)}
                className="whitespace-nowrap px-4 py-2 rounded-full border border-[var(--primary)] text-[var(--primary)] dark:text-blue-400 text-sm hover:bg-[var(--primary)] hover:text-white transition-colors shadow-sm"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about voter registration, dates, or rules..."
                className="flex-1 bg-slate-100 dark:bg-slate-900 border-none rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm dark:text-white shadow-inner"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:bg-blue-800 disabled:opacity-50 transition-colors shadow-md"
              >
                <Send size={18} className="ml-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
