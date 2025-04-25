import { openrouter } from "../lib/ai";
import { streamText } from "ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter("google/learnlm-1.5-pro-experimental:free"),
      prompt,
    });    
    
    return result.textStream
  },
};
