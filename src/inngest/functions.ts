import { inngest } from "./client";
import prisma from "@/lib/db";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from 'ai';

  const google =  createGoogleGenerativeAI();

export const executeAi = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("pretend","5s");
    const {steps} = await step.ai.wrap(
      "gemini-generative-text",
      generateText,
      {
        model: google("gemini-2.5-flash"),
        system: "You are such a helpful assistant",
        prompt : "What is2+2?"
      }
    );
    return steps;
  },
);