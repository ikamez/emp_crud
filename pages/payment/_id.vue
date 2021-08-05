<template>
  <div>
    <v-system-bar height="50px" color="white" class="mb-3 mt-3">
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <span class="ml-4" style="color: black; font-size: 16pt"
        >/ເງິນກູ້/ການຊຳລະ</span
      >
    </v-system-bar>
    <v-divider />
    <v-container>
      <v-form ref="form">
        <v-row class="mx-0">
          <!--data table-->
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-row justify="center">
              <!--department-->
              <v-col cols="12" sm="12" md="12" lg="12">
                <v-card class="shadow-box">
                  <v-data-table
                    hide-default-footer
                    :headers="headers"
                    :items="payment"
                    :search="search"
                    :items-per-page="10"
                    :page.sync="page"
                    @page-count="pageCount = $event"
                  >
                    <template v-slot:top>
                      <v-toolbar flat color="white">
                        <v-toolbar-title>ການຊຳລະ</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-text-field
                          v-model="search"
                          clearable
                          clear-icon="mdi-close-circle"
                          class="mt-6 mr-5"
                          rounded
                          prepend-inner-icon="mdi-magnify"
                          flat
                          dense
                          solo-inverted
                          label="ຄົ້ນຫາການຊຳລະ"
                        />
                      </v-toolbar>
                      <v-divider></v-divider>
                      <v-divider></v-divider>
                    </template>
                  </v-data-table>
                  <div class="text-center pt-2 pb-5">
                    <v-pagination
                      v-model="page"
                      prev-icon="mdi-menu-left"
                      next-icon="mdi-menu-right"
                      :length="pageCount"
                    />
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      search: '',
      headers: [
        {
          text: 'emp_id',
          align: 'start',
          sortable: true,
          value: 'emp_id',
        },
        {
          text: 'loan_id',
          align: 'start',
          sortable: true,
          value: 'loan_id',
        },
        { text: 'start_date', sortable: false, value: 'start_date' },
        { text: 'principal', sortable: false, value: 'principal' },
        { text: 'interest', sortable: false, value: 'interest' },
        { text: 'to_pay_amt', sortable: false, value: 'to_pay_amt' },
        { text: 're_amt', sortable: false, value: 're_amt' },
      ],
      payment: [],

    }
  },

  methods: {
    async loadpayment() {
      try {
        const response = await this.$axios.$get(
          'http://10.0.10.122:8000/api/v1/kmb/loan/payment/' + this.$route.params.id
        )
    
        this.payment = response
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.loadpayment()
  },
}
</script>