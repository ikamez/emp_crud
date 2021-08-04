<template>
  <div>
    <v-system-bar height="50px" color="white" class="mb-3 mt-3">
      <v-btn icon light to="/">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <span class="ml-4" style="color: black; font-size: 16pt"
        >/ເງິນກູ້</span
      >
    </v-system-bar>
    <v-divider />
    <v-container>
      <v-form ref="form">
        <v-row class="mx-0">
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-row justify="center">
              <v-col cols="12" sm="12" md="12" lg="12">
                <v-card class="shadow-box">
                  <v-data-table
                    hide-default-footer
                    :headers="headers"
                    :items="loans"
                    :search="search"
                    :items-per-page="10"
                    :page.sync="page"
                    @page-count="pageCount = $event"
                    sort-by="loan_id"
                  >
                    <template v-slot:top>
                      <v-toolbar flat color="white">
                        <v-toolbar-title>ເງິນກູ້</v-toolbar-title>
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
                          label="ຄົ້ນຫາເງິນກູ້"
                        />
                      </v-toolbar>
                      <v-divider></v-divider>
                      <v-divider></v-divider>
                    </template>
                    <template v-slot:[`item.detail`]="{ item }">
                      <v-btn
                        color="#1778f3"
                        dark
                        small
                        fab
                        class="mr-2"
                        @click="loandetail(item)"
                      >
                        <v-icon> mdi-format-list-bulleted-square </v-icon>
                      </v-btn>
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
  middleware: 'auth',
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      search: '',
      headers: [
        {
          text: 'ລະຫັດພະນັກງານ',
          align: 'start',
          sortable: true,
          value: 'emp_id',
        },
        {
          text: 'ລະຫັດກູ້ຍືມ',
          sortable: true,
          value: 'loan_id',
        },
        { text: 'ຊື່ ແລະ ນາມສະກຸນ', sortable: false, value: 'emp_name' },
        { text: 'ວັນທີ່ເລີ່ມ', sortable: false, value: 'start_date' },
        { text: 'ວັນທີ່ສິ້ນສຸດ', sortable: false, value: 'end_date' },
        { text: 'ອັດຕາດອກເບ້ຍ', sortable: false, value: 'interest_rate' },
        { text: 'ໄລຍະເງິນກູ້', sortable: false, value: 'nb_month' },
        { text: 'ປະເພດການກູ້', sortable: false, value: 'loan_type' },
        { text: 'ລາຍລະອຽດການກູ້', sortable: false, value: 'loan_detail' },
        { text: 'ເບິ່ງຂໍ້ມູນ', sortable: false, value: 'detail' },
      ],
      loans: [],
    }
  },

  methods: {
    async loadloans() {
      try {
        const response = await this.$axios.$get(
          'http://10.0.10.122:8000/api/v1/kmb/loan/detail/1'
        )
        this.loans = response
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },

    loandetail(item) {
      console.log(item.loan_id)
      this.$router.push({
        name: 'payment-id',
        params: {
          id: item.loan_id,
        },
      })
    },
  },
  mounted() {
    this.loadloans()
  },
}
</script>
