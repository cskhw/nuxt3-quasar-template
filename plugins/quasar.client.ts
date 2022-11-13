import * as components from "quasar";
import { QuasarPluginOptions } from "quasar";
export default defineNuxtPlugin(({ vueApp }) => {
  const quasarPluginOptions: QuasarPluginOptions = {
    components: components,
    iconSet: "svg-mdi-v6",
    plugins: {},
  };
  vueApp.use(components.Quasar, quasarPluginOptions);
});
