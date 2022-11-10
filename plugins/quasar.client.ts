import * as components from "quasar";
export default defineNuxtPlugin(({ vueApp }) => {
  const quasarUserOptions = {
    components: components,
    plugins: {},
  };
  vueApp.use(components.Quasar, quasarUserOptions);
});
