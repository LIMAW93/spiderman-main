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
    <img src="../assets/comicSpider.jpg" alt width="100%">
    <!-- comic -->
    <v-container fluid grid-list-md>
      <v-layout row wrap fill-height white--text v-for="info in comic" :key="info.id">
        <!-- image -->
        <v-flex class="xs12 md5 grow" :class="{'flexColumn': $vuetify.breakpoint.mdAndDown}">
          <div class="headline text-xs-center text-uppercase hidden-md-and-up">{{info.title}}</div>
          <img
            class="hidden-md-and-up imageContain"
            :src="info.thumbnail.path + '/portrait_uncanny.jpg'"
            alt="comic portrait"
            height="100%"
          >
          <img
            class="hidden-sm-and-down imageContain"
            :src="info.thumbnail.path + '/detail.jpg'"
            alt="comic portrait"
            height="100%"
          >
          <!-- mobile hidden md and up description -->
          <div class="hidden-md-and-up">
            <div class="flexWrapBTW mt-3">
              <div>
                <ul v-if="info.dates[0]" class="pl-0" style="list-style-type:none;">
                  <li>Published:</li>
                  <li>{{convertDate((info.dates[0].date).toString())}}</li>
                </ul>
              </div>
              <div>
                <ul v-if="info.pageCount" class="pl-0" style="list-style-type:none;">
                  <li>Pages:</li>
                  <li>{{info.pageCount}}</li>
                </ul>
              </div>
              <div>
                <!-- spacer div -->
              </div>
            </div>

            <p class="mt-3" v-if="info.creators.items[0]">Creators:</p>
            <div class="flexWrap" v-if="info.creators.items[0]">
              <v-flex class="md4 sm2" v-for="creator in info.creators.items" :key="creator.name">
                <p>{{creator.name}} ({{creator.role}})</p>
              </v-flex>
            </div>
            <p v-if="info.description">{{info.description}}</p>
            <v-btn v-if="info.urls[1]" :href="info.urls[1].url" target="_blank">BUY</v-btn>

            <!-- end mobile description -->
          </div>
        </v-flex>

        <!-- Description -->
        <v-flex class="hidden-sm-and-down md7 shrink">
          <div class="headline mb-3 text-uppercase">{{info.title}}</div>
          <!-- main div -->
          <div class="subheading">
            <div class="flexWrapBTW">
              <div>
                <ul v-if="info.dates[0]" class="pl-0" style="list-style-type:none;">
                  <li>Published:</li>
                  <li>{{convertDate((info.dates[0].date).toString())}}</li>
                </ul>
              </div>
              <div>
                <ul v-if="info.pageCount" class="pl-0" style="list-style-type:none;">
                  <li>Pages:</li>
                  <li>{{info.pageCount}}</li>
                </ul>
              </div>
              <div>
                <!-- spacer div -->
              </div>
            </div>

            <p class="mt-3" v-if="info.creators.items[0]">Creators:</p>
            <div class="flexWrap" v-if="info.creators.items[0]">
              <v-flex class="md4 sm2" v-for="creator in info.creators.items" :key="creator.name">
                <p>{{creator.name}} ({{creator.role}})</p>
              </v-flex>
            </div>
            <p v-if="info.description">{{info.description}}</p>
            <v-btn v-if="info.urls[1]" :href="info.urls[1].url" target="_blank">BUY</v-btn>
            <!-- end description -->
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- footer -->
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
export default {
  props: ["id"],
  data: () => ({
    items: [
      { title: "Comics", path: "/comics" },
      { title: "Contact", path: "/contact" }
      // { title: "Videogames", path: "" }
    ],
    url1: "https://gateway.marvel.com:443/v1/public/comics/",
    url2:
      "?ts=1&apikey=e3e2eed85560ec86d4db7d4987be2e72&hash=c08b0f4229036475c36fb27705bd8349",
    comic: []
  }),

  created() {
    this.getOneComic();
  },
  methods: {
    getOneComic() {
      fetch(this.url1 + this.id + this.url2)
        .then(res => res.json())
        .then(data => (this.comic = data.data.results));
    },
    convertDate(date) {
      var strArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      date = new Date(date);
      var d = date.getDate();
      var m = strArray[date.getMonth()];
      var y = date.getFullYear();
      return d + " " + m + "," + " " + y;
    }
  },
  computed: {}
};
</script>

<style>
.imageContain {
  object-fit: contain;
}
.flexColumn {
  display: flex;
  flex-direction: column;
}
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
.flexWrapBTW {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.flexWrap {
  display: flex;
  flex-wrap: wrap;
}
</style>
