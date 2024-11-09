import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    // Extract request body as JSON
    const {
      name,
      gender,
      interests,
      age,
      future_age,
      job,
      goals,
      habits,
      financial_situation,
      relationships,
      lifestyle,
    } = await request.json();

    // Validate if the input fields exist, otherwise set defaults
    const userData = {
      name: name || "Unknown",
      gender: gender || "Unknown",
      interests: Array.isArray(interests) ? interests : ["Fitness", "Health"],
      age: age || "Unknown",
      future_age: future_age || "Unknown",
      job: job || "Unknown",
      goals: Array.isArray(goals)
        ? goals
        : ["Improve physical fitness", "Maintain a healthy lifestyle"],
      habits: Array.isArray(habits)
        ? habits
        : ["Regular exercise", "Healthy eating habits"],
      financial_situation: financial_situation || "Unknown",
      relationships: Array.isArray(relationships) ? relationships : [],
      lifestyle: lifestyle || "Unknown",
    };

    // Create a detailed request to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "What will happen with me in the future. Keep the response short and simple. Don't respond negatively.",
            },
          ],
        },
        {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Help me with my future. Give me some advices based on my personal information. Don't respond negatively. Keep the response short and simple.",
            },
          ],
          tool_calls: [
            {
              id: "call_EXcclTzuHbVK6ZdXqjVspOcW",
              type: "function",
              function: {
                name: "my_ai_version",
                arguments: JSON.stringify(userData),
              },
            },
          ],
        },
        {
          role: "tool",
          content: [
            {
              type: "text",
              text: '{"success" : true}',
            },
          ],
          tool_call_id: "call_EXcclTzuHbVK6ZdXqjVspOcW",
        },
        {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "Based on your personal information, give me some advice on how to improve your future. Don't respond negatively. Keep the response short and simple.",
            },
          ],
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
      top_p: 0.9,
      frequency_penalty: 0,
      presence_penalty: 0,
      tools: [
        {
          type: "function",
          function: {
            name: "my_ai_version",
            strict: true,
            parameters: {
              type: "object",
              required: [
                "name",
                "gender",
                "interests",
                "date_of_birth",
                "job",
                "goals",
                "habits",
                "financial_situation",
                "relationships",
                "lifestyle",
              ],
              properties: {
                job: {
                  type: "string",
                  description: "User's current job or profession",
                },
                name: { type: "string", description: "User's name" },
                goals: {
                  type: "array",
                  items: {
                    type: "string",
                    description: "A goal that the user aims to achieve",
                  },
                  description: "List of user's goals",
                },
                gender: { type: "string", description: "User's gender" },
                habits: {
                  type: "array",
                  items: {
                    type: "string",
                    description: "A habit that the user has",
                  },
                  description: "List of user's habits",
                },
                interests: {
                  type: "array",
                  items: {
                    type: "string",
                    description: "An interest or hobby of the user",
                  },
                  description: "List of user's interests",
                },
                lifestyle: {
                  type: "string",
                  description: "Description of user's lifestyle",
                },
                date_of_birth: {
                  type: "string",
                  description: "User's date of birth in YYYY-MM-DD format",
                },
                relationships: {
                  type: "array",
                  items: {
                    type: "string",
                    description: "A relationship in the user's life",
                  },
                  description:
                    "List of significant relationships in user's life",
                },
                financial_situation: {
                  type: "string",
                  description: "Description of user’s financial situation",
                },
              },
              additionalProperties: false,
            },
            description:
              "Stores and uses personalized information about the user for future inquiries",
          },
        },
      ],
      parallel_tool_calls: true,
      response_format: { type: "text" },
    });

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
