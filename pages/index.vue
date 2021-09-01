<template>
  <div>
    <br />
    <v-row>
      <!-- Card 1 -->
      <v-col cols="12" md="3" sm="12">
        <v-hover v-slot="{ hover }">
          <v-card
            class="rounded-lg"
            color="light-blue"
            :elevation="hover ? 8 : 2"
          >
            <v-col cols="12" sm="8">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    <v-btn fab color="light-blue lighten-2" elevation="0">
                      <v-icon color="white">mdi-notebook</v-icon>
                    </v-btn>
                  </div>
                  <v-list-item-title class="white--text">
                    <p style="font-size: 20px">ລາຍການ 1</p>
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text"
                    >1234</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-card>
        </v-hover>
      </v-col>
      <!-- card 2 -->
      <v-col cols="12" md="3" sm="12">
        <v-hover v-slot="{ hover }">
          <v-card
            class="rounded-lg"
            color="teal darken-1"
            :elevation="hover ? 8 : 2"
          >
            <v-col cols="12" sm="8">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    <v-btn fab color="teal lighten-2" elevation="0">
                      <v-icon color="white">mdi-comment-account</v-icon>
                    </v-btn>
                  </div>
                  <v-list-item-title class="white--text">
                    <p style="font-size: 20px">ລາຍການ 2</p>
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text"
                    >1234</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-card>
        </v-hover>
      </v-col>
      <!-- card 3 -->
      <v-col cols="12" md="3" sm="12">
        <v-hover v-slot="{ hover }">
          <v-card
            class="rounded-lg"
            color="blue-grey"
            :elevation="hover ? 8 : 2"
          >
            <v-col cols="12" sm="8">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    <v-btn fab color="blue-grey lighten-2" elevation="0">
                      <v-icon color="white">mdi-text-subject</v-icon>
                    </v-btn>
                  </div>
                  <v-list-item-title class="white--text">
                    <p style="font-size: 20px">ລາຍການ 3</p>
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text"
                    >1234</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-card>
        </v-hover>
      </v-col>
      <!-- card 4 -->
      <v-col cols="12" md="3" sm="12">
        <v-hover v-slot="{ hover }">
          <v-card
            class="rounded-lg"
            color="grey darken-3"
            :elevation="hover ? 8 : 2"
          >
            <v-col cols="12" sm="8">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    <v-btn fab color="grey darken-2" elevation="0">
                      <v-icon color="white">mdi-office-building</v-icon>
                    </v-btn>
                  </div>
                  <v-list-item-title class="white--text">
                    <p style="font-size: 20px">ລາຍການ 4</p>
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text"
                    >1234</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <!-- Working list left -->
    <v-row>
      <v-col cols="12" md="6" sm="12">
        <v-card
          class="mx-auto rounded-lg"
          outlined
          :elevation="2"
          style="text-decoration: none"
        >
          <v-container>
            <h3 class="ml-3">Working</h3>
            <v-container>
              <v-list class="border-work">
                <v-list-item>
                  <v-avatar color="orange" size="40" class="mr-2 white--text">
                    <v-icon class="white--text"
                      >mdi-text-box-check</v-icon
                    ></v-avatar
                  >
                  <v-list-item-title> ລາຍການ 1 </v-list-item-title>
                  <v-list-item-icon>
                    <b class="orange--text darken-2">123</b>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list class="border-work" style="margin-top: 10px">
                <v-list-item>
                  <v-avatar color="green" size="40" class="mr-2 white--text">
                    <v-icon class="white--text"
                      >mdi-credit-card-check</v-icon
                    ></v-avatar
                  >
                  <v-list-item-title> ລາຍການ 2 </v-list-item-title>
                  <v-list-item-icon>
                    <b class="green--text">123</b>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list class="border-work" style="margin-top: 10px">
                <v-list-item>
                  <v-avatar color="grey" size="40" class="mr-2 white--text">
                    <v-icon class="white--text"
                      >mdi-close-circle</v-icon
                    ></v-avatar
                  >
                  <v-list-item-title> ລາຍການ 3 </v-list-item-title>
                  <v-list-item-icon>
                    <b class="grey--text">123</b>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-list class="border-work" style="margin-top: 10px">
                <v-list-item>
                  <v-avatar color="red" size="40" class="mr-2 white--text">
                    <v-icon class="white--text"
                      >mdi-window-close</v-icon
                    ></v-avatar
                  >
                  <v-list-item-title> ລາຍການ 4 </v-list-item-title>
                  <v-list-item-icon>
                    <b class="red--text">123</b>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-container>
          </v-container>
        </v-card>
      </v-col>
      <!-- Working list right -->
      <v-col cols="12" md="6" sm="12">
        <v-card
          class="mx-auto rounded-lg"
          outlined
          :elevation="2"
          style="text-decoration: none"
        >
          <v-container>
            <h3 class="ml-3">Project</h3>
            <v-container>
              <v-list class="border-work">
                <v-list-item>
                  <v-avatar color="primary" size="40" class="mr-2 white--text">
                    <v-icon class="white--text">mdi-wordpress</v-icon></v-avatar
                  >
                  <v-list-item-title> ລາຍການ 1 </v-list-item-title>
                  <v-list-item-icon>
                    <b class="primary--text darken-2">123</b>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>

              <v-list class="border-work" style="margin-top: 10px">
                <v-list-item>
                  <v-avatar
                    color="pink lighten-1"
                    size="40"
                    class="mr-2 white--text"
                  >
                    <v-icon class="white--text"
                      >mdi-wallet-giftcard</v-icon
                    ></v-avatar
                  >
                  <v-list-item-title> ລາຍການ 2 </v-list-item-title>
                  <v-list-item-icon>
                    <b class="pink--text">123</b>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>

              <v-list class="border-work" style="margin-top: 10px">
                <v-list-item>
                  <v-avatar color="teal" size="40" class="mr-2 white--text">
                    <v-icon class="white--text"
                      >mdi-face-agent</v-icon
                    ></v-avatar
                  >
                  <v-list-item-title> ລາຍການ 3 </v-list-item-title>
                  <v-list-item-icon>
                    <b class="teal--text">123</b>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>

              <v-list class="border-work" style="margin-top: 10px">
                <v-list-item>
                  <v-avatar
                    color="deep-orange"
                    size="40"
                    class="mr-2 white--text"
                  >
                    <v-icon class="white--text">mdi-adobe</v-icon></v-avatar
                  >
                  <v-list-item-title> ລາຍການ 4 </v-list-item-title>
                  <v-list-item-icon>
                    <b class="deep-orange--text">123</b>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-container>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <!-- Table -->
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-card class="mx-auto rounded-lg" outlined :elevation="2">
          <v-container>
            <h3 class="ml-3">Working</h3>
            <v-container>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">ລາຍການ 1</th>
                      <th class="text-left">ລາຍການ 2</th>
                      <th class="text-left">ລາຍການ 3</th>
                      <th class="text-left">ລາຍການ 4</th>
                      <th class="text-left">ລາຍການ 5</th>
                      <!-- <th class="text-left">ຈັດການ</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>123</th>
                      <td>123</td>
                      <td>123</td>
                      <td><b class="blue--text"> 123</b></td>
                      <td><b class="red--text"> 123</b></td>
                      <!-- <td>
                        <v-btn
                          color="red"
                          depressed
                          rounded
                          dark
                          ><v-icon>mdi-trash-can</v-icon></v-btn
                        >
                      </td> -->
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-container>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.border-work {
  border-style: solid;
  border-color: #c7c7c7;
  border-width: thin;
  border-radius: 5px;
}
</style>
