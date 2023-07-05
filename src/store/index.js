import { createStore } from 'vuex'

export default createStore({
  state: {
    projects:null
   
  },
  mutations: {
    setPeople: (state, projects) => {
      state.projects = project;
    },
  

  },
  actions: {
    getTestimonials: async(context)=> {
      fetch("https://scorpio962b.github.io/portfoliovue-json-file/data.json")
      .then((res) => res.json())
      .then((project) => context.commit("setproject", project));
  },
  
  }
})
