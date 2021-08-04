<template>
  <div class="container">
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="email"
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
              ></v-text-field>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'gradient',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { user: { email: this.email, password: this.password } },
        })
        console.log(response)
        if (response.data.success) {
          this.$router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style scoped>
.container {
  padding-top: 50px;
}
</style>
