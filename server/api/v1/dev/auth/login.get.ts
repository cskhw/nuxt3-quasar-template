export default defineEventHandler((event) => {
  return { status: 200, detail: "Login not allowed GET method" };
});
