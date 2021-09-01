<template>
  <div>
    <!-- navigation-bar -->
    <v-navigation-drawer
      class="elevation-2"
      color="grey lighten-5"
      v-model="drawer"
      fixed
      app
      width="250"
    >
      <v-layout column align-center>
        <v-flex class="mt-4">
          <v-img :src="require('~/assets/logo/ldblogo.svg')" width="100"></v-img>
        </v-flex>
      </v-layout>

      <v-row justify="center">
        <v-col>
          <!-- <h3 class="text-center">{{ this.$auth.user.email }}</h3> -->
          <!-- <p class="text-center">{{ this.$auth.user.id }}</p> -->
          <br />
            <h3 class="text-center">Ven LEOSAVANG</h3>
            <p class="text-center">Admin</p>
        </v-col>
      </v-row>

      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-img :src="require('~/assets/nav/home.png')" width="35"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ໜ້າຫຼັກ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="provinces">
          <v-list-item-action>
            <v-img
              :src="require('~/assets/nav/architecture-and-city.png')"
              width="35"
            ></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ແຂວງ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="districts">
          <v-list-item-action>
            <v-img :src="require('~/assets/nav/city.png')" width="35"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ເມືອງ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="villages">
          <v-list-item-action>
            <v-img
              :src="require('~/assets/nav/village.png')"
              width="35"
            ></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ບ້ານ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="loan">
          <v-list-item-action>
            <v-img :src="require('~/assets/nav/loan.png')" width="35"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ເງິນກູ້ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="billinfo">
          <v-list-item-action>
            <v-img :src="require('~/assets/nav/bill.png')" width="35"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> billinfo </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- App-bar -->
    <v-app-bar class="elevation-2" color="primary" fixed app>
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text">Project-Name</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small @click="dialog = true" fab color="red" dark elevation="0">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- logout-dialog -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card height="120">
        <v-card-title> ຍືນຍັນການອອກຈາກລະບົບ </v-card-title>
        <v-card-actions>
          <v-btn color="primary" dark @click="dialog = false"> ຕົກລົງ </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="#e4e6ec" @click="dialog = false"> ຍົກເລິກ </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // userinfo: {},
      drawer: true,
      dialog: false,
    }
  },
  methods: {
    // logout() {
    //   $nuxt.$auth.logout()
    //   this.$router.push('/login')
    // },
    draw() {
      if (this.drawer == true) {
        this.drawer = false
      } else {
        this.drawer = true
      }
    },
  },
}
</script>

<style scoped>
</style>
