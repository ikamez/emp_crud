<template>
  <div>
    <!-- navaigation-bar -->
    <!-- <v-system-bar height="50px" color="white" class="mb-3 mt-3">
      <v-btn icon light @click="$router.go(-1)">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <span class="ml-4" style="color: black; font-size: 16pt"
        >/ເງິນກູ້/ການຊຳລະ</span
      >
    </v-system-bar>
    <v-divider /> -->
    <v-row>
      <v-col cols="12" md="5" sm="2">
        <v-btn
          @click="$router.go(-1)"
          class="mx-2"
          fab
          dark
          small
          color="primary"
        >
          <v-icon dark> mdi-arrow-left </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" sm="4">
        <h2>ເງິນກູ້/ການຊຳລະ</h2>
      </v-col>
    </v-row>
    <v-container>
      <v-form ref="form">
        <v-row class="mx-0">
          <!--data-table-->
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-row justify="center">
              <v-col cols="12" sm="12" md="12" lg="12">
                <v-card class="rounded-lg">
                  <v-data-table
                    hide-default-footer
                    :headers="headers"
                    :items="payment"
                    :search="search"
                    :items-per-page="10"
                    :page.sync="page"
                    @page-count="pageCount = $event"
                  >
                    <template v-slot:[`item.index`]="{ item }">
                      {{ payment.indexOf(item) + 1 }}
                    </template>
                    <template v-slot:top>
                      <v-toolbar flat color="white">
                        <v-toolbar-title>ຂໍ້ມູນການຊຳລະ</v-toolbar-title>
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
                  <!-- pagination -->
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
          text: 'ລຳດັບ',
          value: 'index',
        },
        {
          text: 'ລະຫັດພະນັກງານ',
          align: 'start',
          sortable: true,
          value: 'emp_id',
        },
        {
          text: 'ລະຫັດກູ້ຍືມ',
          align: 'start',
          sortable: true,
          value: 'loan_id',
        },
        { text: 'ວັນທີ່ເລີ່ມ', sortable: false, value: 'start_date' },
        { text: 'ຕົ້ນທຶນ', sortable: false, value: 'principal' },
        { text: 'ດອກເບ້ຍ', sortable: false, value: 'interest' },
        { text: 'ຈຳນວນຈ່າຍ', sortable: false, value: 'to_pay_amt' },
        { text: 'ຈຳນວນທີ່ເຫຼືອ', sortable: false, value: 're_amt' },
      ],
      payment: [],
    }
  },

  methods: {
    async loadpayment() {
      try {
        const response = await this.$axios.$get(
          'http://10.0.10.122:8000/api/v1/kmb/loan/payment/' +
            this.$route.params.id
        )

        this.payment = response
        console.log(response)
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
