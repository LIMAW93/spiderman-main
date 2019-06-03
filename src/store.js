import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "spiderman",
    spiderman: [],
    offset: 0,
    limit: 20,
    url: "https://gateway.marvel.com/v1/public/characters?name=Spider-man&ts=1&apikey=e3e2eed85560ec86d4db7d4987be2e72&hash=c08b0f4229036475c36fb27705bd8349",
    urlComic1: "https://gateway.marvel.com/v1/public/characters/1009610/comics?",
    urlComic2: "&ts=1&apikey=e3e2eed85560ec86d4db7d4987be2e72&hash=c08b0f4229036475c36fb27705bd8349",
    chat: []
    // limit=40&offset=20
  },
  mutations: {
    setSpiderman(state, x) {
      state.spiderman = x;
    },
    setChat(state, data) {
      state.chat = data;
    },
    setOffset(state, data) {
      state.offset = state.offset + data;
    },
    setSubOffset(state, data) {
      state.offset = state.offset - data;
    }
  },
  actions: {
    getChat(context) {
      firebase.database().ref('test').on('value', function (data) {
        var messages = data.val();
        let chatAux = [];
        for (var key in messages) {
          var element = { post: messages[key], id: key };
          chatAux.push(element);
        }
        context.commit("setChat", chatAux);
      });
    },
    getSpiderman(context) {
      fetch(context.state.urlComic1 + "limit=" + context.state.limit + "&offset=" + context.state.offset + context.state.urlComic2)
        .then(res => res.json())
        .then(data => {
          context.commit("setSpiderman", data.data.results)
        });
    },

    nextPage({ dispatch, commit }) {
      commit("setOffset", 20);
      dispatch("getSpiderman");
    },

    previousPage({ dispatch, commit, state }) {
      if (state.offset != 0) {
        commit("setSubOffset", 20);
        dispatch("getSpiderman");
      }
    },

  },
  getters: {
    getFullChat(state) {
      return state.chat;
    },
    getAllSpiderman(state) {
      return state.spiderman;
    }
  },

});
// developer.marvel.com/v1/public/characters/1009610