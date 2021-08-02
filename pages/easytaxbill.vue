<template>
  <div class="page">
    <h1 class="f">
      ທະນາຄານພັດທະນາລາວ<br />
      Lao Development Bank
    </h1>
    <img class="icon" src="/easytax.png" />
    <p class="doucumentinfo">
      <b>ລະຫັດອ້າງອີງ:</b> 123<br />
      <b>ວັນທີ່ສ້າງ:</b> 23-7-2021
    </p>
    <h2 class="text-center">ໂອນເງິນບັນຊີພາຍໃນທະນາຄານ ຜ່ານ EasyTax</h2>
    <div class="detail">
      <v-row>
        <v-col cols="6">
          <h2>ລາຍລະອຽດຜູ້ໂອນ</h2>
          <br />
          <p><b>ຊື່ບັນຊີ:</b> abcdefg</p>
          <p><b>ເລກບັນຊີ:</b> 0123456789101112</p>
          <p><b>ອັດຕາແລກປ່ຽນ:</b> 123</p>
          <p><b>ຈຳນວນເງິນ:</b> 25.000</p>
          <p><b>ຄ່າທຳນຽມ:</b> 1.000</p>
          <p><b>ຈຳນວນເງິນທັງໝົດ:</b> 26.000</p>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="6">
          <h2>ລາຍລະອຽດຜູ້ຮັບ</h2>
          <br />
          <p><b>ຊື່ບັນຊີ:</b> onetwothree</p>
          <p><b>ເລກບັນຊີ:</b> 987654321987654</p>
          <p><b>ຈຳນວນເງິນທີ່ໄດ້ຮັບ:</b> 25.000</p>
          <p><b>ເນື້ອໃນ:</b> hello</p>
        </v-col>
      </v-row>
    </div>
    <div class="signature">
      <v-row>
        <v-col cols="6">
          <h3 class="text-center">ລາຍເຊັນຜູ້ອະນຸມັດ</h3>
        </v-col>
        <v-col cols="6">
          <h3 class="text-center">ລາຍເຊັນຜູ້ໂອນ</h3>
        </v-col>
      </v-row>
    </div>
    <div class="qr-code">
      <img src="qrcode.png" width="100px" height="100px" /><br />
      Verify by LDB
    </div>
  </div>
</template>

<script>
export default {
  layout: 'reportlayout',
  methods: {
    print() {
      setTimeout(function () {
        window.print()
      }, 500)
    },
  },
  mounted() {
    this.print()
  },
}
</script>

<style scoped>
body {
  background: rgb(204, 204, 204);
}
.page {
  display: block;
  width: 21cm;
  height: 29.7cm;
  margin: 0cm auto;
  border: 1px white solid;
  border-radius: 5px;
  background: white;
  font-family: saysettha_ot;
}
.f {
  font-size: 20px;
  position: absolute;
  padding-left: 110px;
  padding-top: 20px;
}
.icon {
  width: 100px;
  height: 100px;
  position: absolute;
}
.doucumentinfo {
  margin-top: 120px;
  padding-left: 20px;
  text-align: right;
}
.detail {
  padding-top: 40px;
}
.signature {
  padding-top: 40px;
}
.qr-code {
  margin-top: 50px;
  text-align: center;
}
@media print {
  body,
  page {
    margin: 0;
    box-shadow: 0;
  }
}
</style>
