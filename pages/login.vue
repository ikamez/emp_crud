<template>
  <div class="container">
    <v-container>
      <v-card class="mx-auto rounded-xl" width="350" elevation="0">
        <v-col cols="12" sm="12">
          <v-img
            :src="require('~/assets/logo/ldblogo.svg')"
            width="130"
            class="mx-auto"
          ></v-img>
          <br />
          <v-text-field
            append-icon="mdi-account"
            v-model="email"
            label="Email"
            outlined
            required
          ></v-text-field>
          <v-text-field
            append-icon="mdi-key"
            v-model="password"
            type="password"
            label="Password"
            outlined
            required
          ></v-text-field>
          <v-row justify="center">
            <v-col>
              <v-btn rounded @click="login()" class="btn-grad" block large>
                Login
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <br />
      </v-card>
    </v-container>

    <!-- dialog warning login failed  -->
    <v-dialog v-model="dialog_login" persistent max-width="290">
      <v-card color="" class="rounded-xl" elevation="15">
        <v-container>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <v-img
                width="40"
                style="align: center"
                :src="require('~/assets/image/error.png')"
              ></v-img>
            </v-flex>
          </v-layout>
          <br />
          <h2 class="text-center red--text">ຂໍ້ມູນບໍ່ຖືກຕ້ອງ</h2>
          <br />
          <p class="text-center">ກະລຸນາປ້ອນຂໍ້ມູນຄືນໃໝ່</p>
        </v-container>
        <v-card-actions>
          <v-btn
            large
            class="mx-auto"
            color="green darken-1"
            text
            @click="dialog_login = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      dialog_login: false,
      email: 'saklism+demo19@gmail.com',
      password: '12341234',
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { user: { email: this.email, password: this.password } },
        })
        if (response.data.success) {
          this.$router.push('/')
        }
      } catch (err) {
        console.log(err)
        this.dialog_login = true
      }
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #02aab0 0%,
    #00cdac 51%,
    #02aab0 100%
  );
}
.btn-grad {
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
