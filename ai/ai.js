// import { conf } from "../config.js";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config()

const configuration = new Configuration({ apiKey: process.env.aitoken });
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
  // console.log(answer);
  return answer;
}

// const ans = await ask("Hello, let code nodejs project.")
// console.log(ans)

// console.log(
//   ask("What are the names of the planets in the solar system?")
// );
