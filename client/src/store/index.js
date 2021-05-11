import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems:[]
  },
  mutations: {
 
    ADD_CART_ITEM: (state, data) => {
      state.cartItems.push(data);
    },
    REMOVE_CART_ITEM: (state, data) => {
      state.cartItems.splice(data, 1);
    },
    // TOGGLE_CART_ITEMS: (state, data) => {
    //   state.cartItems[data].done = !state.cartItems[data].done;
    // },
    TRUNCATE_CART_ITEM: (state) => {
      state.cartItems = []
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
