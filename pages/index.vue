<template>
  <div>
    <h1 class="text-center">This is my first project with nuxt js and vuetify</h1>
   <!-- <v-system-bar height="50px" color="white" class="mb-3 mt-3">
      <v-btn icon light to="/">
        <v-icon color="grey darken-2">mdi-home</v-icon>
      </v-btn>
      <span class="ml-4" style="color: black; font-size: 16pt">ໜ້າຫຼັກ</span>
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
                    :search="search"
                    :items-per-page="10"
                    :page.sync="page"
                    @page-count="pageCount = $event"
                    sort-by=""
                  >
                    <template v-slot:top>
                      <v-toolbar flat color="white">
                        <v-toolbar-title>ພະນັກງານ</v-toolbar-title>
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
                          label="ຄົ້ນຫາພະນັກງານ"
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
                                      outlined
                                      label="ເມືອງ"
                                      required
                                    ></v-select>
                                  </v-col>
                                  <v-col cols="12" v-if="btnstatus == true">
                                    <v-text-field
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
                                    @click="false"
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
                                    @click="false"
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
    </v-container> -->
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
          text: 'ຊື່',
          align: 'start',
          value: 'name',
        },
        { text: 'ນາມສະກຸນ', value: 'lastName' },
        { text: 'ອາຍຸ', value: 'age' },
        { text: 'ອີເມວ', value: 'email' },
        { text: 'ທີ່ຢູ່', value: 'village' },
        { text: 'ແກ້ໄຂ', value: 'edit' },
        { text: 'ລົບ', value: 'delete' },
      ],
    }
  },
}
</script>

<style scoped></style>
