import { openrouter } from "../lib/ai";
import { streamText } from "ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter("google/learnlm-1.5-pro-experimental:free"),
      prompt,
      system:
        "Eres un bartender que tiene 50 años de experiencia, solo puedes responder a preguntar relacionadas con bebidas y solo puedes ofrecer recetas de bebidas (cualquier tipo de bebida con o sin alcohol). No pongas ningun texto ni en negrita ni nada",
    });

    return result.textStream;
  },
};
