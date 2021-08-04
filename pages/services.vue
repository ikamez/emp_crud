<template>
  <div>
    <v-system-bar height="50px" color="white" class="mb-3 mt-3">
      <v-btn icon light to="/">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <span class="ml-4" style="color: black; font-size: 16pt">/Services</span>
    </v-system-bar>
    <v-divider />
    <v-container>
      <v-row>
        <v-col sm="3">
          <v-card
            class="rounded-card"
            max-width="200"
            style="cursor: pointer"
            @click="$router.push('/easytax')"
          >
            <v-list-item>
              <v-list-item-content>
                <v-img
                  max-height="200"
                  max-width="200"
                  src="/easytax.png"
                ></v-img>
              </v-list-item-content>
            </v-list-item>
            <v-col class="text-center mb-4"><h3>EasyTax Payment</h3></v-col>
          </v-card>
        </v-col>
        <v-col sm="3">
          <v-card
            class="rounded-card"
            max-width="200"
            style="cursor: pointer"
            @click="$router.push('/electricity_payment')"
          >
            <v-list-item>
              <v-list-item-content>
                <v-img
                  max-height="200"
                  max-width="200"
                  src="/edl.png"
                ></v-img>
              </v-list-item-content>
            </v-list-item>
            <v-col class="text-center mb-4"><h3>Electricity Eayment</h3></v-col>
          </v-card>
        </v-col>
        <v-col sm="3">
          <v-card
            class="rounded-card"
            max-width="200"
            style="cursor: pointer"
            @click="$router.push('/easytax')"
          >
            <v-list-item>
              <v-list-item-content>
                <v-img max-height="200" max-width="200" src="/tax.png"></v-img>
              </v-list-item-content>
            </v-list-item>
            <v-col class="text-center mb-4"><h3>Ex1</h3></v-col>
          </v-card>
        </v-col>
        <v-col sm="3">
          <v-card
            class="rounded-card"
            max-width="200"
            style="cursor: pointer"
            @click="$router.push('/easytax')"
          >
            <v-list-item>
              <v-list-item-content>
                <v-img max-height="200" max-width="200" src="/money.png"></v-img>
              </v-list-item-content>
            </v-list-item>
            <v-col class="text-center mb-4"><h3>Ex2</h3></v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style scoped>
.rounded-card {
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
