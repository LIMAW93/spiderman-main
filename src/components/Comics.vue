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
          <v-list-tile v-for="(item, index) in items" :key="index">
            <router-link :to="item.path" class="decorationNone">
              <v-list-tile-title class="spiderColor font-weight-black">{{ item.title }}</v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- main image -->
    <img src="../assets/spidermanComicWP.jpg" alt="spiderman Comic Wallpaper" width="100%">

    <!-- comics content -->
    <v-container grid-list-sm fluid>
      <v-layout row wrap justify-space-around>
        <v-flex v-for="comic in spidermanComics" :key="comic.name" xs5 sm2 class="mx-1">
          <v-card class="grey darken-4" dark :to="'/details/' + comic.id">
            <v-img :src="comic.thumbnail.path + '/portrait_uncanny.jpg'" height="100%" contain></v-img>
            <p>{{comic.title}}</p>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-btn @click="previous">Previous</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="next">Next</v-btn>
      </v-layout>
    </v-container>
    <!-- end comics -->
    <v-footer height="8vh" class="grey darken-4 white--text">
      <div class="heightLogo ml-3 mr-1">
        <a href="http://marvel.com" class="height100" target="_blank">
          <img :src="require('../assets/LogoMarvel.png')" alt="logo marvel" height="100%">
        </a>
      </div>
      <v-spacer></v-spacer>
      <div
        align-center
        class="subheading mr-3"
      >Data provided by Marvel. &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
    <!-- <img :src="comic.thumbnail.path + '/portrait_incredible.jpg'" width="100%">offset-xs1
    <p>{{comic.title}}</p>-->
    <!-- </div> -->
  </v-content>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Comics", path: "/comics" },
      { title: "Contact", path: "/contact" }
      // { title: "Videogames", path: "" }
    ]
  }),
  methods: {
    next() {
      this.$store.dispatch("nextPage");
    },
    previous() {
      this.$store.dispatch("previousPage");
    }
  },
  computed: {
    spidermanComics() {
      return this.$store.getters.getAllSpiderman;
    }
  }
};
</script>

<style>
.height100 {
  height: 100%;
}
.spiderColor {
  color: rgb(193, 29, 6) !important;
}

.decorationNone {
  text-decoration: none;
  color: black;
}
</style>
