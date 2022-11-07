// https://v3.nuxtjs.org/guide/directory-structure/middleware/
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from);

  if (to.params.id === "1") {
    return abortNavigation();
  }
  return navigateTo("/");
});
