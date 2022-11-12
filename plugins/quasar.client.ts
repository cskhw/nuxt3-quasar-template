import * as components from "quasar";
import { QuasarPluginOptions } from "quasar";
export default defineNuxtPlugin(({ vueApp }) => {
  const quasarPluginOptions: QuasarPluginOptions = {
    components: components,
    plugins: {},
  };
  vueApp.use(components.Quasar, quasarPluginOptions);
});
