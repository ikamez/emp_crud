<template>
  <div>
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
        <h2>EasyTax Payment</h2>
      </v-col>
    </v-row>
    <v-container>
      <v-form ref="form">
        <v-row>
          <v-col>
            <v-row justify="center">
              <v-col>
                <v-card class="rounded-lg">
                  <v-stepper v-model="e1">
                    <v-stepper-header>
                      <v-stepper-step :complete="e1 > 1" step="1">
                        ຂໍ້ມູນ EasyTax
                      </v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step :complete="e1 > 2" step="2">
                        ການຊຳລະ EasyTax
                      </v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step step="3"> ສຳເລັດ </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                      <v-stepper-content step="1"
                        ><br />
                        <v-row>
                          <v-col cols="12">
                            <v-select
                              required
                              :items="items"
                              label="ເລືອກບັນຊີຕົ້ນທາງ"
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col cols="12" md="10">
                            <v-text-field
                              label="ປ້ອນ ID EasyTax"
                              outlined
                              append-icon="mdi-barcode-scan"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="2">
                            <v-btn block x-large dark color="primary"
                              ><h4>ຄົ້ນຫາຂໍ້ມູນ</h4>
                              <v-icon dark> mdi-magnify-plus </v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                        <v-container>
                          <v-card class="mb-12">
                            <v-col> <h3>ຂໍ້ມູນການຄົ້ນຫາ:</h3></v-col>
                            <v-col>
                              <v-divider />
                            </v-col>
                            <v-row no-gutters>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  ເລກທີ່ ID EasyTax:
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b></b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  ເລກບັນຊີອາກອນ:
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b></b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  ຊື່ຫົວໜ່ວຍທຸລະກິດ:
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b></b></h3>
                                </v-card>
                              </v-col>
                            </v-row>
                            <v-col>
                              <v-divider />
                            </v-col>
                            <v-row no-gutters>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  ມື້ອອກໃບແຈ້ງ:
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b></b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat> ສະກຸນເງິນ: </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b></b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat> ຈຳນວນເງິນ: </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b></b></h3>
                                </v-card>
                              </v-col>
                            </v-row>
                            <v-col>
                              <v-divider />
                            </v-col>
                            <v-expansion-panels>
                              <v-expansion-panel>
                                <v-expansion-panel-header>
                                  <h3>ເບິ່ງລາຍການຍ່ອຍ:</h3>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  <v-data-table
                                    hide-default-footer
                                    :headers="headers"
                                  ></v-data-table>
                                </v-expansion-panel-content>
                              </v-expansion-panel>
                            </v-expansion-panels>
                            <v-col> <h3>ປ້ອນຂໍ້ມູນການຊຳລະ:</h3></v-col>
                            <v-col>
                              <v-text-field
                                type="number"
                                label="ຈຳນວນເງິນ"
                                outlined
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col>
                              <v-textarea
                                outlined
                                counter
                                name="input-7-4"
                                label="ເນື້ອໃນ"
                                required
                              ></v-textarea>
                            </v-col>
                          </v-card>
                        </v-container>
                        <v-btn color="primary" @click="e1 = 2">
                          ດຳເນີນການຕໍ່ <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                      </v-stepper-content>
                      <v-stepper-content step="2">
                        <v-container>
                          <div>
                            <p>ບັນຊີຕົ້ນທາງ:</p>
                          </div>
                          <v-row>
                            <v-col cols="12" md="6">
                              <div class="border-ldb">
                                <h3>
                                  <span class="blue--text"> LAK </span>
                                  123
                                </h3>
                                <h3>Mr. Test</h3>
                              </div>
                            </v-col>
                          </v-row>
                          <br />
                          <div>
                            <p style="margin-bottom: 4px">ID Easytax:</p>
                            <h3 class="blue--text">123</h3>
                          </div>

                          <p style="margin-bottom: 4px">ຊື່ລູກຄ້າ:</p>
                          <p class="blue--text">123</p>

                          <p style="margin-bottom: 4px">ຄ່າທຳນຽມ:</p>
                          <p class="red--text">123</p>

                          <p style="margin-bottom: 4px">ຈຳນວນເງິນທັງຫມົດ</p>
                          <h3 class="blue--text">123</h3>

                          <br />
                          <p style="margin-bottom: 4px">ເນື້ອໃນ:</p>
                          <p class="blue--text">123</p>
                        </v-container>
                        <v-layout justify-center="justify-center">
                          <v-flex class="text-md-center">
                            <v-row no-gutters>
                              <v-col xs="2">
                                <v-btn
                                  @click="e1 = 1"
                                  color="blue-grey"
                                  class="ma-2 white--text"
                                >
                                  <v-icon>mdi-chevron-left</v-icon>
                                  ກັບຄືນ
                                </v-btn>
                              </v-col>
                              <v-col md="8" xs="8"></v-col>
                              <v-col xs="2">
                                <v-btn color="primary" @click="e1 = 3">
                                  ຢືນຍັນນການຊຳລະ
                                  <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-flex>
                        </v-layout>
                      </v-stepper-content>
                      <v-stepper-content step="3">
                        <v-container>
                          <v-img
                            class="rounded-border"
                            max-height="100%"
                            max-width="100%"
                            :src="require('~/assets/image/bg.png')"
                          >
                            <v-col>
                              <v-layout justify-center align-center>
                                <v-img
                                  max-height="100"
                                  max-width="100"
                                  :src="require('~/assets/image/success.png')"
                                ></v-img>
                              </v-layout>
                            </v-col>

                            <v-container>
                              <div>
                                <p>ບັນຊີຕົ້ນທາງ:</p>
                              </div>
                              <v-row>
                                <v-col cols="12" md="6">
                                  <div class="border-ldb">
                                    <h3>
                                      <span class="blue--text"> LAK </span>
                                      123
                                    </h3>
                                    <h3>Mr. Test</h3>
                                  </div>
                                </v-col>
                              </v-row>
                              <br />
                              <div>
                                <p style="margin-bottom: 4px">ID Easytax:</p>
                                <h3 class="blue--text">123</h3>
                              </div>

                              <p style="margin-bottom: 4px">ຊື່ລູກຄ້າ:</p>
                              <p class="blue--text">123</p>

                              <p style="margin-bottom: 4px">ຄ່າທຳນຽມ:</p>
                              <p class="red--text">123</p>

                              <p style="margin-bottom: 4px">ຈຳນວນເງິນທັງຫມົດ</p>
                              <h3 class="blue--text">123</h3>

                              <br />
                              <p style="margin-bottom: 4px">ເນື້ອໃນ:</p>
                              <p class="blue--text">123</p>
                            </v-container>
                          </v-img>
                        </v-container>
                        <v-layout justify-center="justify-center">
                          <v-flex class="text-md-center">
                            <v-row no-gutters>
                              <v-col xs="2">
                                <v-btn
                                  color="blue-grey"
                                  class="ma-2 white--text"
                                >
                                  Print Bill
                                  <v-icon right dark> mdi-printer </v-icon>
                                </v-btn>
                              </v-col>
                              <v-col md="8" xs="8"></v-col>
                              <v-col xs="2">
                                <v-btn
                                  color="red"
                                  class="ma-2 white--text"
                                  @click="$router.push('/billinfo')"
                                >
                                  ປິດ
                                  <v-icon>mdi-close</v-icon>
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-flex>
                        </v-layout>
                      </v-stepper-content>
                    </v-stepper-items>
                  </v-stepper>
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
      items: ['THB', 'USD', 'LAK'],
      e1: 1,
      dialogm1: '',
      dialog: false,
      headers: [
        {
          text: 'ລາຍການ',
          align: 'start',
          sortable: false,
          value: 'item',
        },
        { text: 'ເລກໃບແຈ້ງອາກອນ', value: 'no', sortable: false },
        { text: 'ຊື່ຫົວໜ່ວຍທຸລະກິດ', value: 'company', sortable: false },
        { text: 'ຈຳນວນເງິນ', value: 'amount', sortable: false },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>
.border-ldb {
  padding: 15px;
  border-style: solid;
  border-color: #7a7a7a;
  border-width: thin;
  border-radius: 5px;
}
</style>
