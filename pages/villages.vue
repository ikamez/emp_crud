<template>
  <div>
    <v-system-bar height="50px" color="white" class="mb-3 mt-3">
      <v-btn icon light to="/">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <span class="ml-4" style="color: black; font-size: 16pt"
        >/ບ້ານ</span
      >
    </v-system-bar>
    <v-divider />
    <v-container>
      <v-form ref="form">
        <v-row class="mx-0">
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-row justify="center">
              <v-col cols="12" sm="12" md="12" lg="8">
                <v-card class="shadow-box">
                  <v-data-table
                    hide-default-footer
                    :headers="headers"
                    :items="villages"
                    :search="search"
                    :items-per-page="10"
                    :page.sync="page"
                    @page-count="pageCount = $event"
                    sort-by="vil_name"
                  >
                    <template v-slot:top>
                      <v-toolbar flat color="white">
                        <v-toolbar-title>ບ້ານ</v-toolbar-title>
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
                          label="ຄົ້ນຫາບ້ານ"
                        />
                        <v-dialog v-model="dialog" width="500">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              dark
                              color="#1778f3"
                              v-bind="attrs"
                              fab
                              class="shadow-button-blue"
                              v-on="on"
                              @click="btnstatus = false"
                            >
                              <v-icon>mdi-plus </v-icon>
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title>
                              <span v-if="btnstatus == false"> ຂໍ້ມູນ </span>
                              <span v-else> ແກ້ໄຂຂໍ້ມູນ </span>
                            </v-card-title>
                            <v-divider />
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col cols="12" v-if="btnstatus == false">
                                    <v-text-field
                                      v-model="villageData.vil_name"
                                      clearable
                                      clear-icon="mdi-close-circle"
                                      dense
                                      outlined
                                      hint="EX: ໂພນຕ້ອງ"
                                      label="ປ້ອນຊື່ບ້ານ"
                                    />
                                  </v-col>
                                  <v-col cols="12" v-if="btnstatus == false">
                                    <v-select
                                      v-model="districtData.dis_id"
                                      :items="district"
                                      item-value="dis_id"
                                      item-text="dis_name"
                                      outlined
                                      label="ເມືອງ"
                                      required
                                    ></v-select>
                                  </v-col>
                                  <v-col cols="12" v-if="btnstatus == true">
                                    <v-text-field
                                      v-model="villageData.vil_name"
                                      clearable
                                      clear-icon="mdi-close-circle"
                                      dense
                                      outlined
                                      hint="EX: ໂພນຕ້ອງ"
                                      label="ແກ້ໄຂຊື່ບ້ານ"
                                    />
                                  </v-col>
                                  <v-col cols="12" v-if="btnstatus == true">
                                    <v-select
                                      v-model="districtData.dis_id"
                                      :items="district"
                                      item-value="dis_id"
                                      item-text="dis_name"
                                      outlined
                                      label="ແກ້ໄຂເມືອງ"
                                      required
                                    ></v-select>
                                  </v-col>
                                </v-row>
                              </v-container>
                            </v-card-text>
                            <v-card-text>
                              <v-row class="mx-0">
                                <v-col cols="12" v-if="btnstatus == false">
                                  <v-btn
                                    width="100%"
                                    dark
                                    large
                                    color="#1778f3"
                                    class="shadow-button-blue"
                                    @click="postData"
                                    >ບັນທຶກ
                                  </v-btn>
                                </v-col>
                                <v-col cols="12" v-if="btnstatus == true">
                                  <v-btn
                                    width="100%"
                                    dark
                                    large
                                    color="#1778f3"
                                    class="shadow-button-blue"
                                    @click="updateData"
                                    >ບັນທຶກ
                                  </v-btn>
                                </v-col>
                                <v-col cols="12">
                                  <v-btn
                                    width="100%"
                                    color="#e4e6ec"
                                    large
                                    depressed
                                    @click="dialog = false"
                                    >ຍົກເລີກ
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-card>
                        </v-dialog>
                      </v-toolbar>
                      <v-divider></v-divider>
                      <v-divider></v-divider>
                    </template>
                    <template v-slot:[`item.edit`]="{ item }">
                      <v-icon
                        color=""
                        small
                        class="mr-2"
                        @click="editData(item)"
                      >
                        mdi-pencil
                      </v-icon>
                    </template>
                    <template v-slot:[`item.delete`]="{ item }">
                      <v-icon
                        color=""
                        small
                        class="mr-2"
                        @click="deleteData(item)"
                      >
                        mdi-delete
                      </v-icon>
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
      dialog: false,
      btnstatus: false,
      search: '',
      headers: [
        {
          text: 'ລະຫັດ',
          align: 'start',
          sortable: true,
          value: 'vil_id',
        },
        {
          text: 'ບ້ານ',
          align: 'start',
          sortable: true,
          value: 'vil_name',
        },
        { text: 'ເມືອງ', value: 'district.dis_name' },
        { text: 'ແກ້ໄຂ', value: 'edit', sortable: false },
        { text: 'ລົບ', value: 'delete', sortable: false },
      ],
      villages: [],
      district: [],
      villageData: {},
      districtData: {},
    }
  },

  methods: {
    async loadVillages() {
      try {
        const response = await this.$axios.$get(
          'http://10.0.10.122:8000/api/v1/villages/'
        )
        this.villages = response
      } catch (error) {
        console.log(error)
      }
    },

    async loadDistrict() {
      try {
        const response = await this.$axios.$get(
          'http://10.0.10.122:8000/api/v1/districts/'
        )
        this.district = response
      } catch (error) {
        console.log(error)
      }
    },

    async loadDistrictById(id) {
      try {
        const response = await this.$axios.$get(
          'http://10.0.10.122:8000/api/v1/districts/' + id
        )
        this.districtData = response
        console.log('District', response)
      } catch (error) {
        console.log(error)
      }
    },

    postData(e) {
      if (this.btnstatus == false) {
        const insert = {
          vil_name: this.villageData.vil_name,
          dis_id: this.districtData.dis_id,
        }
        console.log('insert data', insert)
        this.$axios
          .$post('http://10.0.10.122:8000/api/v1/villages/create/', insert)
          .then((result) => {
            console.log(result)
            result
            this.villageData.vil_name = ''
            this.districtData.dis_id = ''
            this.dialog = false
            this.loadVillages()
            this.loadDistrict()
          })
        e.preventDefault()
      }
    },

    editData(item) {
      this.villageIndex = this.villages.indexOf(item)
      this.villageData = Object.assign({}, item)
      this.loadDistrictById(item.district.dis_id)
      console.log(item.district.dis_name)
      this.dialog = true
      this.btnstatus = true
      console.log('vil_id', item.vil_id)
    },

    updateData() {
      const update = {
        vil_name: this.villageData.vil_name,
        dis_id: this.districtData.dis_id,
      }
      console.log('insert Data', update)
      this.$axios
        .$put(
          'http://10.0.10.122:8000/api/v1/villages/update/' +
            this.villageData.vil_id,
          update
        )
        .then((result) => {
          console.log('result', result)
          console.log('Update', this.villageData)
          this.villageData.vil_name = ''
          this.districtData.dis_id = ''
          this.dialog = false
          this.loadVillages()
          this.loadDistrict()
        })
    },

    deleteData(item) {
      console.log('==============')
      console.log(item)
      this.$axios
        .$delete(
          'http://10.0.10.122:8000/api/v1/villages/delete/' + item.vil_id
        )
        .then((response) => {
          console.log(response)
          this.loadVillages()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.loadVillages()
    this.loadDistrict()
  },
}
</script>
