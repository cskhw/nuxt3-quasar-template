import { H3Error } from "h3";

interface LoginResponse {}

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const username = body.username;
  const password = body.password;
  console.log(body);

  if (username === "choonsik" && password === "asdf1234!") {
    console.log("success");
    return {
      status: 200,
      body: {
        access_token: "access_token",
        refresh_token: "refresh_token",
      },
    };
  } else {
    console.log("fail");
    const authError = createError({
      statusCode: 404,
      statusMessage: "Please check username or password.",
      data: {
        username: "choonsik",
        nickname: "choonsik",
        "access-token": "at-test",
        "request-token": "rt-test",
      },
    });

    return sendError(event, authError, true);
  }
});
