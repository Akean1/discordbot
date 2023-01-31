import { conf } from "../config.js";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: conf.aitoken });
const openai = new OpenAIApi(configuration);

export async function ask(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  const answer = response.data.choices[0].text;
  console.log(answer);
  return answer;
}

console.log(
  await ask("What are the names of the planets in the solar system?")
);
