import { defineStore } from "pinia";

export const socialAssistanceStores = defineStore("social-assistance", {

  state: () => ({
    socialAssistances: [],
    meta: {
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: 0,
    },
    loading: false,
    error: null,
    success: null,
  }),
  actions: {

    async fetchSocialAssistancesPaginated(params) {
      this.loading = true

      try {
        const response = await axiosInstance.get(
          "social-assistance/all/paginated",
          { params });
        this.socialAssistances = response.data.data.data;
        this.meta = response.data.data.meta;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
