import { IUser } from "@/types/stores/userStore";
import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    isLoading: false,
    isAuth: false,
    user: {} as IUser,
  }),
  getters: {
    loading: (state) => {
      const config = useRuntimeConfig();
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
