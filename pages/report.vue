<template>
  <div class="container">
    <div>
      <h4 class="text-center">
        ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ <br />
        ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນະຖາວອນ
      </h4>
      <br />
      <h4 class="text-center">=====000=====</h4>
    </div>
    <div>
      <v-img
        src="/easytax.png"
        max-height="80"
        max-width="80"
      ></v-img>
      <h3 class="text-center">
        <u>ໃບລາຍງານການເຄື່ອນໄຫວຕົ້ນທຶນເງິນກູ້ກອງທຶນກຳມະບານ</u>
      </h3>
      <h5 class="text-left">
        ທະນາຄານພັດທະນາລາວ <br />
        ກຳມະບານຮາກຖານ <br />
        ທພລ ທຸກສາຂາ
      </h5>
      <h5 class="text-center">ປະຈຳເດືອນ ...</h5>
    </div>
    <br />
    <div>
    <table style="width: 100%">
      <tr>
        <th>ລ/ດ</th>
        <th>ລະຫັດພະນັກງານ</th>
        <th>ຊື່ ແລະ ນາມສະກຸນ</th>
        <th>ຕຳແໜ່ງ</th>
        <th>ເລກທີ່ສັນຍາເງິນກູ້</th>
        <th>ວັນທີ່ເລີ່ມສັນຍາເງິນກູ້</th>
        <th>ອັດຕາດອກເບ້ຍ</th>
        <th>ໄລຍະເງິນກູ້/ເດືອນ</th>
        <th>ວົງເງິນອະນຸມັດ</th>
        <th>ຍອດຍົກມາ</th>
        <th>ການຖອນເງິນກູ້</th>
        <th>ການຊຳລະເງິນກູ້</th>
        <th>ຍອດເຫຼືອເງິນກູ້</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script >
export default {
  layout: 'reportlayout',
}
</script>

<style scoped>
table,
th,
td {
  border: 3px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 15px;
}
.container {
    font-family: saysettha_ot ;
}
</style>


