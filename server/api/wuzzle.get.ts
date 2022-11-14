import { wuzzle } from "../lib/wuzzle";
export default defineEventHandler((event) => {
  return {
    wuzzle: wuzzle, // 6 letters
  };
});
