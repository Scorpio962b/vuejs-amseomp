import { createStore } from "vuex";
export default createStore({
  state: {
    testimonials: null,
    Data: null,
  },
  mutations: {
    setTestimonial: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setData: (state, Data) => {
      state.Data = setData;
    },
  },
  actions: {
    getTestimonials: async (context) => {
      fetch("https://scorpio962b.github.io/portfoliovue-json-file/data.json")
        .then((res) => res.json())
        .then((testimonials) => context.commit("setTestimonial", testimonials.people));
    },
    async fetchData(context) {
      try {
        const response = await fetch("http://localhost:8080/data");
        const data = await response.json();
        context.commit("setData", data);
      } catch (error) {
        context.commit("setError", error.message);
      }
    },
  },
});