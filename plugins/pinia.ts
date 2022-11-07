import { PiniaPlugin, PiniaPluginContext } from "pinia";
import router from "vue-router";

function MyPiniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation) => {
    // react to store changes
    if (process.env.MODE === "dev")
      console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`);
  });

  // Note this has to be typed if you are using TS
  return { creationTime: new Date() };
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(({ store }: PiniaPlugin & { store: any }) => {
    store.router = markRaw(router);
  });
  $pinia.use(MyPiniaPlugin);
});
