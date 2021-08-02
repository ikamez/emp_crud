<template>
  <div>
    <v-system-bar height="50px" color="white" class="mb-3 mt-3">
      <v-btn icon light to="/services">
        <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
      </v-btn>
      <span class="ml-4" style="color: black; font-size: 16pt"
        >Services/EasyTax</span
      >
    </v-system-bar>
    <v-divider />
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col>
            <v-row justify="center">
              <v-col>
                <v-card class="rounded-border">
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
                      <v-stepper-content step="1"><br/>
                        <v-row>
                          <v-col cols="12">
                            <v-select
                              :rules="[(v) => !!v || 'ກະລຸນາເລືອກບັນຊີ']"
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
                              :rules="eztaxRules"
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
                                :rules="payRules"
                              ></v-text-field>
                            </v-col>
                            <v-col>
                              <v-textarea
                                outlined
                                counter
                                name="input-7-4"
                                label="ເນື້ອໃນ"
                                required
                                :rules="detailRules"
                              ></v-textarea>
                            </v-col>
                          </v-card>
                        </v-container>
                        <v-btn
                          color="primary"
                          @click="e1 = 2"
                          :disabled="!valid"
                        >
                          ດຳເນີນການຕໍ່
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
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  ເລກທີ່ ID EasyTax:
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b>123</b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  ເລກບັນຊີອາກອນ:
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b>234</b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  ຊື່ຫົວໜ່ວຍທຸລະກິດ:
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b>Ex Company</b></h3>
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
                                  <h3><b>16-7-21</b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat> ສະກຸນເງິນ: </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b>LAK</b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat> ຈຳນວນເງິນ: </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b>25.000</b></h3>
                                </v-card>
                              </v-col>
                            </v-row>
                            <v-col>
                              <v-divider />
                            </v-col>
                            <v-row no-gutters>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  ມອບເຂົ້າບັນຊີ:
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b>1234567889</b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat> ຊື່ບັນຊີ: </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b>Account 1</b></h3>
                                </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat> ເນື້ອໃນ: </v-card>
                              </v-col>
                              <v-col cols="12" sm="2">
                                <v-card class="pa-2" flat>
                                  <h3><b>ກຂຄງ</b></h3>
                                </v-card>
                              </v-col>
                            </v-row>
                            <v-col>
                              <v-divider />
                            </v-col>
                          </v-card>
                        </v-container>
                        <v-btn color="grey darken-3" dark @click="e1 = 1"
                          >ກັບຄືນ</v-btn
                        >
                        <v-btn color="primary" @click="e1 = 3">
                          ຢືນຍັນການຊຳລະ
                        </v-btn>
                      </v-stepper-content>
                      <v-stepper-content step="3">
                        <v-container>
                          <v-img
                            class="rounded-border"
                            max-height="350px"
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
                              <v-row no-gutters align="center">
                                <v-col cols="12" sm="2" class="pa-2">
                                  ເລກທີ່ ID EasyTax:
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  <h3><b>123</b></h3>
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  ເລກບັນຊີອາກອນ:
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  <h3><b>234</b></h3>
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  ຊື່ຫົວໜ່ວຍທຸລະກິດ:
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  <h3><b>Ex Company</b></h3>
                                </v-col>
                              </v-row>

                              <v-row no-gutters align="center">
                                <v-col cols="12" sm="2" class="pa-2">
                                  ມື້ອອກໃບແຈ້ງ:
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  <h3><b>16-7-21</b></h3>
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  ສະກຸນເງິນ:
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  <h3><b>LAK</b></h3>
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  ຈຳນວນເງິນ:
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  <h3><b>25.000</b></h3>
                                </v-col>
                              </v-row>

                              <v-row no-gutters align="center">
                                <v-col cols="12" sm="2" class="pa-2">
                                  ມອບເຂົ້າບັນຊີ:
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  <h3><b>1234567889</b></h3>
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  ຊື່ບັນຊີ:
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  <h3><b>Account 1</b></h3>
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  ເນື້ອໃນ:
                                </v-col>
                                <v-col cols="12" sm="2" class="pa-2">
                                  <h3><b>ກຂຄງ</b></h3>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-img>
                        </v-container>

                        <v-btn
                          color="grey darken-3"
                          dark
                          @click="$router.push('/services')"
                          >ປິດ</v-btn
                        >
                        <v-btn color="primary" nuxt to="easytaxbill">
                          ພິມໃບບິນ
                        </v-btn>
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
      valid: true,
      e1: 1,
      dialogm1: '',
      dialog: false,
      payRules: [(v) => !!v || 'ກະລຸນາປ້ອນຈຳນວນເງິນ'],
      detailRules: [(v) => !!v || 'ກະລຸນາປ້ອນເນື້ອໃນ'],
      eztaxRules: [(v) => !!v || 'ກະລຸນາປ້ອນລະຫັດ EasyTax'],
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
  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>

<style scoped>
.rounded-border {
  border-radius: 20px;
}
</style>
