import * as components from "quasar";
import { QuasarPluginOptions } from "quasar";
export default defineNuxtPlugin(({ vueApp }) => {
  const quasarUserOptions = {
    components: components,
    plugins: {},
  };
  console.log(vueApp.config.compilerOptions);

  vueApp.use(components.Quasar, quasarUserOptions);
});
