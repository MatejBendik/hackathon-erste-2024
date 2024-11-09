'use client'

import React, { useState } from "react";
import axios from "axios";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface ChatComponentProps {
  formData: {
    name: string;
    gender: string;
    birthDate: string;
    hobbies: string;
    currentHairIndex: number;
    currentBodyIndex: number;
    currentMouthIndex: number;
    education_and_work_experience: string;
    long_term_goals_and_dreams: string;
    health_preferences_and_habits: string;
    financial_situation_and_goals: string;
    relationships_and_family: string;
    preffered_hobbies_and_activities: string;
  };
  initialAnswer: string;
}

const ChatComponent = ({ formData, initialAnswer }: ChatComponentProps) => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: initialAnswer },
  ]);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(updatedMessages);
    setUserMessage("");  // Clear the input field immediately after sending

    try {
      const response = await axios.post("/api/ai", {
        userMessage,
        formData,
      });

      const aiResponse = response.data.choices[0].message.content;
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Helper function to format GPT answers
  const formatMessage = (text: string) => {
    return text.split(/\n|(\d\.\s|\*\*|\* )/).map((part, index) => {
      if (part.startsWith("**")) {
        return (
          <span key={index} className="font-bold text-blue-600">
            {part.replace(/\*\*/g, "")}
          </span>
        );
      }
      if (part.startsWith("* ")) {
        return (
          <li key={index} className="list-disc ml-4">
            {part.replace("* ", "")}
          </li>
        );
      }
      if (part.match(/^\d\.\s/)) {
        return (
          <li key={index} className="list-decimal ml-4">
            {part.replace(/^\d\.\s/, "")}
          </li>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
      <BackgroundBeamsWithCollision className="inset-0 z-0">
    <div className="z-10 flex flex-col h-screen p-6 ">

      <div className=" flex-grow overflow-y-auto mt-20 p-4 mb-4 space-y-4 rounded-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xl px-4 py-2 rounded-lg ${message.role === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
                }`}
            >
              {message.role === "assistant" ? (
                <div className="space-y-2">{formatMessage(message.content)}</div>
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>

    </div>
      </BackgroundBeamsWithCollision>

  );
};

export default ChatComponent;