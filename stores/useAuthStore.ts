import { defineStore } from "pinia";

export default defineStore("auth", {
  state: () => ({
    isLoading: false,
    isAuth: false,
  }),
  getters: {
    loading: (state) => {
      const config = useRuntimeConfig();
      console.log(config.public);

      return state.isLoading;
    },
  },
  actions: {
    async login() {
      const config = useRuntimeConfig();
      console.log(config.public);
      const response = await this.api.auth.login({
        email: "gusdn0828@gmail.com",
        password: "test1234!",
      });
      this.router.push("");
    },

    startLoading() {
      this.isLoading = true;
    },
    endLoading() {
      this.isLoading = false;
    },
  },
});
