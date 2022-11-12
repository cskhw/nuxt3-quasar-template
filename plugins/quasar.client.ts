import * as components from "quasar";
import { QuasarPluginOptions } from "quasar";
export default defineNuxtPlugin(({ vueApp }) => {
  const quasarUserOptions: QuasarPluginOptions = {
    components: components,
    plugins: {},
  };
  vueApp.use(components.Quasar, quasarUserOptions);
});
