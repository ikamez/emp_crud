<template>
  <div>
    <v-container>
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
          <h3>Electricity Payment</h3>
        </v-col>
      </v-row>
      <v-form ref="form">
        <v-row>
          <v-col>
            <v-row justify="center">
              <v-col>
                <v-card class="rounded-border">
                  <v-stepper v-model="e1">
                    <v-stepper-header>
                      <v-stepper-step :complete="e1 > 1" step="1">
                        Step 1
                      </v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step :complete="e1 > 2" step="2">
                        Step 2
                      </v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step :complete="e1 > 3" step="3">
                        Step 3
                      </v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step step="4"> Step 4 </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                      <v-stepper-content step="1">
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-select
                                required
                                label="ເລືອກບັນຊີຕົ້ນທາງ"
                                outlined
                              ></v-select>
                            </v-col>
                            <v-col cols="12">
                              <v-select
                                required
                                label="ເລືອກແຂວງ"
                                outlined
                              ></v-select>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="ເລກໃບບິນ"
                                outlined
                                append-icon="mdi-barcode-scan"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                        <v-btn color="primary" @click="e1 = 2">
                          ດຳເນີນການຕໍ່ <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                      </v-stepper-content>
                      <v-stepper-content step="2">
                        <v-container>
                          <v-card class="mb-12">
                            <v-col> <h3>ລາຍລະອຽດຂໍ້ມູນ:</h3></v-col>
                            <v-col>
                              <v-divider />
                            </v-col>
                            <v-row no-gutters>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat> ຈາກບັນຊີ: </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat>
                                  <h3><b>123</b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat> ຊຳລະໃຫ້ບິນ: </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat>
                                  <h3><b>123</b></h3>
                                </v-card>
                              </v-col>
                            </v-row>
                            <v-col>
                              <v-divider />
                            </v-col>
                            <v-row no-gutters>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat> ແຂວງ: </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat>
                                  <h3><b>123</b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat> ເລກໃບບິນ: </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat>
                                  <h3><b>123</b></h3>
                                </v-card>
                              </v-col>
                            </v-row>
                            <v-col>
                              <v-divider />
                            </v-col>
                            <v-row no-gutters>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat> ຊື່ລູກຄ້າ: </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat>
                                  <h3><b>123</b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat> ເດືອນ: </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat>
                                  <h3><b>123</b></h3>
                                </v-card>
                              </v-col>
                            </v-row>
                            <v-col>
                              <v-divider />
                            </v-col>
                            <v-row no-gutters>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat> ຈຳນວນເງິນ: </v-card>
                              </v-col>
                              <v-col cols="3" sm="3">
                                <v-card class="pa-2" flat>
                                  <h3 class="red--text"><b>123</b></h3>
                                </v-card>
                              </v-col>
                            </v-row>
                            <v-col>
                              <v-divider />
                            </v-col>
                            <v-col> <h3>ປ້ອນຂໍ້ມູນການຊຳລະ:</h3></v-col>
                            <v-col cols="12">
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
                                  ດຳເນີນການຕໍ່
                                  <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-flex>
                        </v-layout>
                      </v-stepper-content>
                      <v-stepper-content step="3">
                        <v-container>
                          <div>
                            <p>ຈາກບັນຊີ:</p>
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
                          <div>
                            <p style="margin-bottom: 4px">ຊຳລະໃຫ້ບິນ:</p>
                            <h3 class="blue--text">123</h3>
                          </div>

                          <p style="margin-bottom: 4px">ແຂວງ:</p>
                          <p class="blue--text">123</p>

                          <p style="margin-bottom: 4px">ເລກໃບບິນ:</p>
                          <p class="blue--text">123</p>

                          <p style="margin-bottom: 4px">ຊື່ລູກຄ້າ:</p>
                          <p class="blue--text">123</p>

                          <p style="margin-bottom: 4px">ເດືອນ:</p>
                          <p class="blue--text">123</p>

                          <p style="margin-bottom: 4px">ຈຳນວນເງິນ</p>
                          <h3 class="blue--text">123 LAK</h3>
                          <br />
                          <p style="margin-bottom: 4px">ເນື້ອໃນ:</p>
                          <p class="blue--text">123</p>
                        </v-container>
                        <br />

                        <v-layout justify-center="justify-center">
                          <v-flex class="text-md-center">
                            <v-row no-gutters>
                              <v-col xs="2">
                                <v-btn
                                  @click="e1 = 2"
                                  color="blue-grey"
                                  class="ma-2 white--text"
                                >
                                  <v-icon>mdi-chevron-left</v-icon>
                                  ກັບຄືນ
                                </v-btn>
                              </v-col>
                              <v-col md="8" xs="8"></v-col>
                              <v-col xs="2">
                                <v-btn color="primary" @click="e1 = 4">
                                  ດຳເນີນການຕໍ່
                                  <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-flex>
                        </v-layout>
                      </v-stepper-content>

                      <v-stepper-content step="4">
                        <v-container>
                          <v-img
                            class="rounded-border"
                            max-height="100%"
                            max-width="100%"
                            src="/bg.png"
                          >
                            <v-col>
                              <v-layout justify-center align-center>
                                <v-img
                                  max-height="100"
                                  max-width="100"
                                  src="/done.png"
                                ></v-img>
                              </v-layout>
                            </v-col>

                            <v-container>
                              <div>
                                <p>ຈາກບັນຊີ:</p>
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
                              <div>
                                <p style="margin-bottom: 4px">ຊຳລະໃຫ້ບິນ:</p>
                                <h3 class="blue--text">123</h3>
                              </div>

                              <p style="margin-bottom: 4px">ແຂວງ:</p>
                              <p class="blue--text">123</p>

                              <p style="margin-bottom: 4px">ເລກໃບບິນ:</p>
                              <p class="blue--text">123</p>

                              <p style="margin-bottom: 4px">ຊື່ລູກຄ້າ:</p>
                              <p class="blue--text">123</p>

                              <p style="margin-bottom: 4px">ເດືອນ:</p>
                              <p class="blue--text">123</p>

                              <p style="margin-bottom: 4px">ຈຳນວນເງິນ</p>
                              <h3 class="blue--text">123 LAK</h3>
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
                                  @click="$router.push('/services')"
                                >
                                  ປິດ
                                  <v-icon>mdi-close</v-icon>
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-flex>
                        </v-layout>

                        <br />
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
        { text: 'ເລກໃບແຈ້ງອາກອນ', value: 'no' },
        { text: 'ຊື່ຫົວໜ່ວຍທຸລະກິດ', value: 'company' },
        { text: 'ຈຳນວນເງິນ', value: 'amount' },
      ],
    }
  },
}
</script>

<style scoped>
.rounded-border {
  border-radius: 20px;
}
.border-ldb {
  padding: 15px;
  border-style: solid;
  border-color: #7a7a7a;
  border-width: thin;
  border-radius: 5px;
}
</style>
