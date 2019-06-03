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
    <!-- main image -->
    <img
      src="https://maxfarrow.files.wordpress.com/2013/01/amazing-spider-man-hd-wallpaper.jpg"
      width="100%"
      alt="webbing spiderman"
    >
    <!-- tab bar -->

    <!-- bio -->
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card class="grey darken-4" dark>
            <v-layout fill-height v-bind="resizeRowToColumn">
              <!-- image -->
              <v-flex class="xs12 md5 mx-2">
                <img
                  :src="require('../assets/spidermanGame.jpg')"
                  alt="spiderman ps4"
                  height="100%"
                  width="100%"
                  contain
                >
              </v-flex>
              <!-- description -->
              <v-flex class="xs12 md7 text-justify">
                <v-card-title primary-title>
                  <div class="display-1 mb-3 text-uppercase font-weight-light">Spider-man</div>
                  <div>
                    <p
                      class="title font-italic font-weight-thin"
                    >Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.</p>
                  </div>
                </v-card-title>
                <!-- space div -->
                <div class="columnSpace"></div>
                <!-- comment lg screen -->
                <v-container>
                  <v-layout fill-height class="hidden-md-and-down signature">
                    <!-- quote -->
                    <v-flex class="justify-center d-flex">
                      <img src="../assets/signatureSpiderman.png" contain width="90%">
                    </v-flex>
                    <!-- spidy logo -->

                    <v-flex class="spidyLogo mt-5 pt-3" absolute bottom right>
                      <img src="../assets/spidyLogo.png" alt height="70px" width="70px">
                    </v-flex>
                  </v-layout>
                </v-container>
                <!-- end signature -->
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- end bio -->
    <!-- <hr red>? -->
    <!-- power tabs -->
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-tabs fixed-tabs v-model="active" color="black" dark slider-color="red">
            <v-tab v-for="(tab, index) in tabs" :key="index" ripple>{{ tab.title }}</v-tab>
            <v-tab-item v-for="(tab, index) in tabs" :key="index">
              <v-card flat class="grey darken-4" dark>
                <v-layout fill-height v-bind="resizeRowToColumn">
                  <!-- image -->
                  <v-flex class="xs12 md5 mx-2">
                    <img :src="tab.image" alt="power spiderman" height="100%" width="100%" contain>
                  </v-flex>
                  <!-- description -->
                  <v-flex class="xs12 md7 text-justify">
                    <v-card-title primary-title>
                      <div class="display-1 mb-3 text-uppercase font-weight-light">{{tab.title}}</div>
                      <div>
                        <p class="title font-italic font-weight-thin">{{tab.power}}</p>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- end powers tab -->

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

    <!-- end content -->
  </v-content>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Comics", path: "/comics" },
      { title: "Contact", path: "/contact" }
      // { title: "Videogames", path: "" }
    ],
    active: null,
    tabs: [
      {
        title: "WEBCRAWLER & SUPERHUMAN STRENGTH",
        power:
          "Spider-Man is known as the wallcrawler for a reason—his hands and feet allow him to climb vertically and upside down, and his speed, superhuman strength, and leaping ability make him the most agile Super Hero around.",
        image: require("../assets/strength.jpg")
      },
      {
        title: "SPIDER-SENSE",
        power:
          "Spider-Man’s “spider-sense” grants him a high level of awareness, allowing him to respond to impending danger and to gauge the direction its coming from.",
        image: require("../assets/sense.jpg")
      },
      {
        title: "WEB-SHOOTER",
        power:
          "Among the many inventions that Peter Parker has created to augment his spider abilities are his signature web-shooters, which connect to his wrists and allow him to spray a “webbing” that he uses to swing on or fight with.",
        image: require("../assets/webbing.jpg")
      }
    ]
  }),
  computed: {
    resizeRowToColumn() {
      let resize = {};

      if (this.$vuetify.breakpoint.smAndDown) {
        resize.column = true;
        resize.reverse = true;
      }

      return resize;
    }
  }
};
</script>

<style>
.height100 {
  height: 100%;
}

.heightLogo {
  height: 70%;
}
.columnSpace {
  height: 50px;
}
.signature {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.spiderColor {
  color: rgb(193, 29, 6) !important;
}

.decorationNone {
  text-decoration: none;
  color: black;
}
.spidyLogo {
  display: -webkit-box;
  justify-content: end;
  align-items: center;
}
</style>
