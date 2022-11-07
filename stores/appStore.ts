import { defineStore } from "pinia";

export default defineStore("app", {
  state: () => ({
    isLoading: false,
    isAuth: false,
  }),
  getters: {
    loading: (state) => {
      return state.isLoading;
    },
  },
  actions: {
    startLoading() {
      this.isLoading = true;
    },
    endLoading() {
      this.isLoading = false;
    },
  },
});
