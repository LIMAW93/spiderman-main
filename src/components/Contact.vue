<template>
  <v-content class="black">
    <v-toolbar class="black">
      <!-- icon link -->
      <div class="height100">
        <router-link to="/">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61b00e4d-5c1e-4108-9081-a53867382e10/d6e0cgh-f3d4f929-e4fe-435f-bdc0-537a370723c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxYjAwZTRkLTVjMWUtNDEwOC05MDgxLWE1Mzg2NzM4MmUxMFwvZDZlMGNnaC1mM2Q0ZjkyOS1lNGZlLTQzNWYtYmRjMC01MzdhMzcwNzIzYzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RJkD1ohduI1gNlkvXW6x5iy3_QqUcXMqyW3pa6OPQKw"
            alt="spidermanLogo"
            height="100%"
          >
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <!-- menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-toolbar-side-icon class="spiderColor" v-on="on"></v-toolbar-side-icon>
        </template>
        <v-list class="black">
          <router-link
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
            class="decorationNone"
          >
            <v-list-tile>
              <v-list-tile-title class="spiderColor font-weight-black">{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- end toolbar -->
    <v-container>
      <v-card v-for="message in chat" :key="message.id" class="grey darken-4" dark>
        <strong>{{message.post.author}}</strong>
        <p>{{message.post.message}}</p>
        <p></p>
      </v-card>

      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            background-color="grey darken-4"
            color="rgb(193, 29, 6)"
            dark
            v-model="text"
            :append-outer-icon="text ? 'send' : ''"
            box
            clearable
            label="Message"
            type="text"
            @click:append-outer="sendMessage"
            @click:clear="clearMessage"
            placeholder="Type here..."
          ></v-text-field>
        </v-flex>
      </v-layout>
      <div class="flexCenter">
        <v-btn @click="login">Login</v-btn>
      </div>
    </v-container>
    <v-footer height="8vh" class="grey darken-4 white--text">
      <div class="heightLogo ml-3 mr-1">
        <a href="http://marvel.com" class="height100">
          <img :src="require('../assets/LogoMarvel.png')" alt="logo marvel" height="100%">
        </a>
      </div>
      <v-spacer></v-spacer>
      <div
        align-center
        class="subheading mr-3"
      >Data provided by Marvel. &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-content>
</template>

<script>
import firebase from "firebase";

export default {
  data: () => ({
    items: [
      { title: "Comics", path: "/comics" },
      { title: "Contact", path: "/contact" }
      // { title: "Videogames", path: "" }
    ]
  }),
  methods: {
    sendMessage() {
      var name = firebase.auth().currentUser
        ? firebase.auth().currentUser.displayName
        : "Anonimo";
      var objectToSend = {
        message: this.text,
        author: name
      };
      firebase
        .database()
        .ref("test")
        .push(objectToSend);
    },
    clearMessage() {
      this.text = "";
    },

    login() {
      // https://firebase.google.com/docs/auth/web/google-signin
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
  },
  computed: {
    chat() {
      return this.$store.getters.getFullChat;
    }
  },
  created() {
    this.$store.dispatch("getChat");
  }
};
</script>

<style>
.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
