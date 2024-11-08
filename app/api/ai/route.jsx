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
      date_of_birth,
      job,
      goals,
      habits,
      financial_situation,
      relationships,
      lifestyle,
    } = await request.json();

    // Create a detailed request to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "What will happen in the future if I start exercising?",
            },
          ],
        },
        {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "",
            },
          ],
          tool_calls: [
            {
              id: "call_EXcclTzuHbVK6ZdXqjVspOcW",
              type: "function",
              function: {
                name: "my_ai_version",
                arguments: JSON.stringify({
                  job: job || "Unknown",
                  name: name || "Unknown",
                  goals: goals || [
                    "Improve physical fitness",
                    "Maintain a healthy lifestyle",
                  ],
                  gender: gender || "Unknown",
                  habits: habits || [
                    "Regular exercise",
                    "Healthy eating habits",
                  ],
                  interests: interests || ["Fitness", "Health"],
                  lifestyle: lifestyle || "Unknown",
                  date_of_birth: date_of_birth || "Unknown",
                  relationships: relationships || [],
                  financial_situation: financial_situation || "Unknown",
                }),
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
              text: "Starting to exercise can have several positive effects on your future. Here are some potential outcomes:\n\n1. **Improved Physical Fitness**: Regular exercise can lead to improved physical fitness, increased strength, endurance, and flexibility.\n\n2. **Better Health**: Exercise can help in maintaining a healthy weight, reducing the risk of chronic diseases like heart disease, diabetes, and certain types of cancer.\n\n3. **Enhanced Mental Well-being**: Physical activity is known to boost mood, reduce stress, anxiety, and depression. It can also improve cognitive function and sleep quality.\n\n4. **Increased Energy Levels**: Engaging in physical activity can increase your energy levels and combat feelings of fatigue.\n\n5. **Enhanced Self-esteem**: Achieving fitness goals and feeling healthier can boost your confidence and self-esteem.\n\n6. **Social Opportunities**: Exercising can provide opportunities to meet new people, join group classes, or participate in sports, enhancing your social connections.\n\nRemember, it's essential to start exercising gradually and choose activities that you enjoy to maintain consistency and make it a sustainable habit.",
            },
          ],
        },
      ],
      temperature: 0.7,
      max_tokens: 302,
      top_p: 1,
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
