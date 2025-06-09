import { OpenAIStream, StreamingTextResponse } from "ai"
import { Configuration, OpenAIApi } from "openai-edge"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export const runtime = "edge"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response("Unauthorized", { status: 401 })
  }

  const json = await req.json()
  const { messages } = json

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    stream: true,
    messages: [
      {
        role: "system",
        content: `You are an expert web developer specializing in creating beautiful and responsive landing pages.
        When responding to user requests, always provide complete HTML and CSS code that can be directly used.
        Focus on creating modern, clean designs with proper spacing, typography, and color schemes.
        Use Tailwind CSS classes for styling.
        Always wrap your response in a complete HTML document structure.
        Make sure the code is responsive and works well on all devices.
        Include proper meta tags and viewport settings.
        Use semantic HTML elements.
        Optimize for performance and accessibility.`,
      },
      ...messages,
    ],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
} 