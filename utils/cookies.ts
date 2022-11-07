import Cookies from "js-cookie";

const cookies = Cookies.withAttributes({
  expires: 365,
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

export default cookies;
