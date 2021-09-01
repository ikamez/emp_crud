<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" sm="3" xs="12">
          <v-card
            max-width="200px"
            class="rounded-lg mx-auto"
            style="cursor: pointer"
            @click="$router.push('/easytax')"
          >
            <v-list-item>
              <v-list-item-content>
                <v-img
                  style="margin-left: auto; margin-right: auto"
                  max-height="200"
                  max-width="200"
                  :src="require('~/assets/billinfo/easytax.png')"
                ></v-img>
              </v-list-item-content>
            </v-list-item>
            <h3 class="text-center mb-4" style="padding-bottom: 10px">
              EasyTax<br />Payment
            </h3>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="3" xs="12">
          <v-card
            max-width="200px"
            class="rounded-lg mx-auto"
            style="cursor: pointer"
            @click="$router.push('/electricity_payment')"
          >
            <v-list-item>
              <v-list-item-content>
                <v-img
                  style="margin-left: auto; margin-right: auto"
                  max-height="200"
                  max-width="200"
                  :src="require('~/assets/billinfo/edl.png')"
                ></v-img>
              </v-list-item-content>
            </v-list-item>
            <h3 class="text-center mb-4" style="padding-bottom: 10px">
              Electricity<br />Payment
            </h3>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="3" xs="12">
          <v-card
            max-width="200px"
            class="rounded-lg mx-auto"
            style="cursor: pointer"
            @click="dialog()"
          >
            <v-list-item>
              <v-list-item-content>
                <v-img
                  style="margin-left: auto; margin-right: auto"
                  max-height="200"
                  max-width="200"
                  :src="require('~/assets/billinfo/npp.png')"
                ></v-img>
              </v-list-item-content>
            </v-list-item>
            <h3 class="text-center mb-4" style="padding-bottom: 10px">
              Water<br />Payment
            </h3>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="3" xs="12">
          <v-card
            max-width="200px"
            class="rounded-lg mx-auto"
            style="cursor: pointer"
            @click="dialog()"
          >
            <v-list-item>
              <v-list-item-content>
                <v-img
                  style="margin-left: auto; margin-right: auto"
                  max-height="200"
                  max-width="200"
                  :src="require('~/assets/billinfo/pakun.png')"
                ></v-img>
              </v-list-item-content>
            </v-list-item>
            <h3 class="text-center mb-4" style="padding-bottom: 10px">
              Social Security<br />Payment
            </h3>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    dialog() {
      alert('ຢູ້ໃນຂັ້ນຕອນການພັດທະນາ')
    },
  },
}
</script>

<style scoped>

</style>
