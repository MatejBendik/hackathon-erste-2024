import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { userMessage, formData } = req.body;

    // Ensure userMessage and formData are provided
    if (!userMessage || !formData) {
      return res.status(400).json({ error: "Missing userMessage or formData" });
    }

    // Create a context message using formData to give the AI user-specific information
    const initialContextMessage = {
      role: "system",
      content: `You are an AI that has detailed knowledge about the user. The user's details are as follows:
        Name: ${formData.name},
        Gender: ${formData.gender},
        Birth Date: ${formData.birthDate},
        Hobbies: ${formData.hobbies},
        Current Hair Index: ${formData.currentHairIndex},
        Current Body Index: ${formData.currentBodyIndex},
        Current Mouth Index: ${formData.currentMouthIndex},
        Education and Work Experience: ${formData.education_and_work_experience},
        Long-term Goals and Dreams: ${formData.long_term_goals_and_dreams},
        Health Preferences and Habits: ${formData.health_preferences_and_habits},
        Financial Situation and Goals: ${formData.financial_situation_and_goals},
        Relationships and Family: ${formData.relationships_and_family},
        Preferred Hobbies and Activities: ${formData.preffered_hobbies_and_activities}.
      `,
    };

    // Combine context with the user message
    const messages = [
      initialContextMessage,
      { role: "user", content: userMessage },
    ];

    // Send the request to OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7, // Adjust as needed
      max_tokens: 200, // Adjust as needed
    });

    const aiResponse = response.choices[0].message.content;

    // Return AI response
    res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error("Error in chatHandler:", error);
    res.status(500).json({ error: error.message });
  }
}
