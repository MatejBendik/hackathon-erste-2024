import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST", // Still needs to be POST for sending a prompt
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
      "OpenAI-Organization": "org-sJqVpWFyX8O3RALfnUP54HBY",
      "OpenAI-Project": process.env.PROJECT_ID || "",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // Model to use
      messages: [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: "You are a helpful assistant that answers programming questions.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "What are the advantages of AI?",
            },
          ],
        },
      ],
      max_tokens: 50, // Limit for response length
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to send prompt to OpenAI API" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json(); // Parse incoming request body

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
      "OpenAI-Organization": "org-sJqVpWFyX8O3RALfnUP54HBY",
      "OpenAI-Project": process.env.PROJECT_ID || "",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // You can change this to any model you want
      messages: [
        {
          role: "user",
          content: body.prompt || "Hello, can you tell me a fun fact?",
        },
      ],
      max_tokens: 50, // Limit for response length
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to send prompt to OpenAI API" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
