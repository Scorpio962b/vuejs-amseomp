import { createStore } from "vuex";
export default createStore({
  state: {
    testimonials: null,
    projects:null,
    Data: null,
  },
  mutations: {
    setTestimonial: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setProject: (state, projects) => {
      state.projects = projects;
    },
    setData: (state, Data) => {
      state.Data = setData;
    },
  },
  actions: {
    getTestimonials: async (context) => {
      fetch("https://scorpio962b.github.io/portfoliovue-json-file/data.json")
        .then((res) => res.json())
        .then((data) => context.commit("setTestimonial", data.testimonial));
      
    },
    getProjects: async (context) => {
      fetch("https://scorpio962b.github.io/portfoliovue-json-file/data.json")
        .then((res) => res.json())
        .then((data) => context.commit("setProject", data.project));
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