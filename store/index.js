import Vue from "vue";
import Vuex from "vuex";
import * as todos from "./todos";

Vue.use(Vuex);

export default () => {
  return new Vuex.Store({
    modules: {
      todos: {
        namespaced: true,
        ...todos,
      },
    },
  });
};
