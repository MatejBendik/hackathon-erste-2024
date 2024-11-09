import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    // Parse request body
    const { userMessage, formData } = await req.json();

    console.log({ userMessage, formData });

    // Ensure userMessage and formData are provided
    if (!userMessage || !formData) {
      return NextResponse.json(
        { error: "Missing userMessage or formData" },
        { status: 400 }
      );
    }

    // Create a context message using formData to give the AI user-specific information
    const initialContextMessage = {
      role: "system",
      content: `You are an AI that has detailed knowledge about the user. The user's details are as follows:
        Name: ${formData.name},
        Gender: ${formData.gender},
        Age: ${formData.age},
        Future Age: ${formData.future_age},
        Hobbies: ${formData.hobbies},
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
      temperature: 0.7,
      max_tokens: 200,
    });

    const aiResponse = response.choices[0].message.content;

    // Return AI response
    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Error in chatHandler:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
