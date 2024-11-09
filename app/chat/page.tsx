"use client";

import React, { useState, useEffect } from "react";
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

const ChatComponent = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [userMessage, setUserMessage] = useState("");
  const [formData, setFormData] = useState<ChatComponentProps["formData"] | null>(null);
  const [loading, setLoading] = useState(false); // Step 1: State for loading

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    const storedInitialAnswer = localStorage.getItem("initialAnswer");

    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }

    if (storedInitialAnswer) {
      setMessages([{ role: "assistant", content: storedInitialAnswer }]);
    }
  }, []);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(updatedMessages);
    setUserMessage("");

    if (!formData) {
      console.error("Form data is missing, cannot proceed with message send.");
      return;
    }

    // Step 2: Set loading to true before the API call
    setLoading(true);

    try {
      const response = await axios.post("/api/ai/chat", {
        userMessage,
        formData,
      });

      const aiResponse = response.data.response;

      // Step 3: After receiving the response, stop loading and update the messages
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
      setLoading(false); // Stop loading after response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error sending message:", error.response?.data || error.message);
      } else {
        console.error("Error sending message:", error);
      }
      setLoading(false); // Stop loading in case of an error
    }
  };

  const formatMessage = (text: string) => {
    return text.split(/\n/).map((line, index) => {
      const formattedLine = line.split(/(\*\*[^*]+\*\*)/).map((segment, i) => {
        if (segment.startsWith("**") && segment.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-blue-600 dark:text-blue-500">
              {segment.slice(2, -2)}
            </strong>
          );
        } else if (segment.startsWith("* ")) {
          return (
            <li key={i} className="list-disc ml-6">
              {segment.replace("* ", "")}
            </li>
          );
        }
        return segment;
      });

      return (
        <p key={index} className="mb-2">
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <BackgroundBeamsWithCollision className="inset-0 z-0">
      <div className="z-10 flex flex-col h-screen p-6 ">
        <div className="flex-grow overflow-y-auto mt-20 p-4 mb-4 space-y-4 rounded-lg">
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
                  <div className="space-y-2">
                    {/* Step 4: Show loader if loading is true */}
                    {loading ? (
                      <div className="flex justify-center items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-t-2 border-blue-500 rounded-full animate-spin" />
                        <span>AI is thinking...</span>
                      </div>
                    ) : (
                      formatMessage(message.content)
                    )}
                  </div>
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
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
