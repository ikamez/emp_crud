<template>
  <div>
    <v-system-bar height="50px" color="white" class="mb-3 mt-3">
      <v-btn icon light to="/">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <span class="ml-4" style="color: black; font-size: 16pt">/ເມືອງ</span>
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
                    :items="district"
                    :search="search"
                    :items-per-page="10"
                    :page.sync="page"
                    @page-count="pageCount = $event"
                    sort-by="dis_name"
                  >
                    <template v-slot:top>
                      <v-toolbar flat color="white">
                        <v-toolbar-title>ເມືອງ</v-toolbar-title>
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
                          label="ຄົ້ນຫາເມືອງ"
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
                                      v-model="districtData.dis_name"
                                      clearable
                                      clear-icon="mdi-close-circle"
                                      dense
                                      outlined
                                      hint="EX: ຈັນທະບູລີ"
                                      label="ປ້ອນຊື່ເມືອງ"
                                    />
                                  </v-col>
                                  <v-col cols="12" v-if="btnstatus == false">
                                    <v-select
                                      v-model="provinceData.pro_id"
                                      :items="provinces"
                                      item-value="pro_id"
                                      item-text="pro_name"
                                      outlined
                                      label="ແຂວງ"
                                      required
                                    ></v-select>
                                  </v-col>
                                  <v-col cols="12" v-if="btnstatus == true">
                                    <v-text-field
                                      v-model="districtData.dis_name"
                                      clearable
                                      clear-icon="mdi-close-circle"
                                      dense
                                      outlined
                                      hint="EX: ຈັນທະບູລີ"
                                      label="ແກ້ໄຂຊື່ເມືອງ"
                                    />
                                  </v-col>
                                  <v-col cols="12" v-if="btnstatus == true">
                                    <v-select
                                      v-model="provinceData.pro_id"
                                      :items="provinces"
                                      item-value="pro_id"
                                      item-text="pro_name"
                                      outlined
                                      label="ແກ້ໄຂແຂວງ"
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
  middleware: 'auth',
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
          value: 'dis_id',
        },
        {
          text: 'ເມືອງ',
          align: 'start',
          sortable: true,
          value: 'dis_name',
        },
        { text: 'ແຂວງ', value: 'province.pro_name' },
        { text: 'ແກ້ໄຂ', value: 'edit', sortable: false },
        { text: 'ລົບ', value: 'delete', sortable: false },
      ],
      district: [],
      provinces: [],
      districtData: {},
      provinceData: {},
    }
  },
  methods: {
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

    async loadProvinces() {
      try {
        const response = await this.$axios.$get(
          'http://10.0.10.122:8000/api/v1/provinces/'
        )
        this.provinces = response
      } catch (error) {
        console.log(error)
      }
    },

    postData(e) {
      if (this.btnstatus == false) {
        const insert = {
          dis_name: this.districtData.dis_name,
          pro_id: this.provinceData.pro_id,
        }
        this.$axios
          .$post('http://10.0.10.122:8000/api/v1/districts/create/', insert)
          .then((result) => {
            console.log(result)
            result
            this.districtData.dis_name = ''
            this.provinceData.pro_id = ''
            this.dialog = false
            this.loadDistrict()
          })
        e.preventDefault()
      }
    },

    async loadProvincesById(id) {
      try {
        const response = await this.$axios.$get(
          'http://10.0.10.122:8000/api/v1/provinces/' + id
        )
        this.provinceData = response
        console.log('Province', response)
      } catch (error) {
        console.log(error)
      }
    },

    editData(item) {
      console.log(item)
      this.districtIndex = this.district.indexOf(item)
      this.districtData = Object.assign({}, item)
      this.loadProvincesById(item.province.pro_id)
      this.dialog = true
      this.btnstatus = true
    },

    updateData() {
      const update = {
        dis_name: this.districtData.dis_name,
        pro_id: this.provinceData.pro_id,
      }
      console.log('insert Data', update)
      this.$axios
        .$put(
          'http://10.0.10.122:8000/api/v1/districts/update/' +
            this.districtData.dis_id,
          update
        )
        .then((result) => {
          console.log('result', result)
          console.log('Update', this.districtData)
          this.districtData.dis_name = ''
          this.provinceData.pro_id = ''
          this.dialog = false
          this.loadProvinces()
          this.loadDistrict()
        })
    },

    deleteData(item) {
      console.log('==============')
      console.log(item)
      this.$axios
        .$delete(
          'http://10.0.10.122:8000/api/v1/districts/delete/' + item.dis_id
        )
        .then((response) => {
          console.log(response)
          this.loadDistrict()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.loadDistrict()
    this.loadProvinces()
  },
}
</script>
