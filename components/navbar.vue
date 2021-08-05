<template>
  <div>
    <!-- navigation-bar -->
    <v-navigation-drawer
      class="elevation-5 rounded-r-xl"
      color="grey lighten-5"
      v-model="drawer"
      fixed
      app
    >
      <v-layout column align-center>
        <v-flex class="mt-10 mb-8">
          <v-img src="/ldblogo.svg" max-width="90"></v-img>
        </v-flex>
      </v-layout>
      <h4 class="text-center"> {{ userinfo.user ? userinfo.user.email : '' }}</h4>
      <p class="text-center" style="font-size: 13px"> userID: {{ userinfo.user ? userinfo.user.id : '' }}</p>
      <v-list dense rounded>
        <v-list-item to="/">
          <v-list-item-action>
            <v-img src="/homepage.png" width="30"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ໜ້າຫຼັກ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="provinces">
          <v-list-item-action>
            <v-img src="/architecture-and-city.png" width="30"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ແຂວງ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="districts">
          <v-list-item-action>
            <v-img src="/region.png" width="30"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ເມືອງ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="villages">
          <v-list-item-action>
            <v-img src="/village.png" width="30"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ບ້ານ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="loan">
          <v-list-item-action>
            <v-img src="/loan.png" width="30"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> ເງິນກູ້ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="billinfo">
          <v-list-item-action>
            <v-img src="invoice.png" width="30"></v-img>
          </v-list-item-action>
          <v-list-item-content style="margin-left: -10px">
            <v-list-item-title> billinfo </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- App-bar -->
    <v-app-bar
      class="bg elevation-5 rounded-b-xl ml-2 mr-2 mt-0"
      color="primary"
      fixed
      app
    >
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text">My-Project</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="dialog = true"
        rounded
        color="red"
        class="white--text"
        elevation="0"
      >
        Logout
      </v-btn>
    </v-app-bar>
    <!-- logout-dialog -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline"> Are you sure? </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="logout"> OK </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: { },
      drawer: true,
      dialog: false,
      drawerMobile: false,
    }
  },
  methods: {
    logout() {
      $nuxt.$auth.logout()
          this.$router.push('/login')
    },
    async getemail() {
      try {
        const response = await this.$axios.$get(
          'https://sakko-demo-api.herokuapp.com/api/v1/user/me'
        )
        this.userinfo = response
        console.log('UserData:', this.userinfo)
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.getemail()
  },
}
</script>
