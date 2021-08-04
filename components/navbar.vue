<template>
  <!-- navbar -->
  <nav>
    <v-toolbar color="primary" dark>
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">
        Employee CRUD</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text nuxt to="/services"> services </v-btn>
        <v-divider vertical></v-divider>
        <v-btn text nuxt to="/loan"> ເງິນກູ້ </v-btn>
        <v-divider vertical></v-divider>
        <v-btn text nuxt to="/provinces"> ແຂວງ </v-btn>
        <v-divider vertical></v-divider>
        <v-btn text nuxt to="/districts"> ເມືອງ </v-btn>
        <v-divider vertical></v-divider>
        <v-btn text nuxt to="/villages"> ບ້ານ </v-btn>
        <!-- <v-divider vertical></v-divider>
        <v-btn text nuxt to="/report"> ລາຍງານ </v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>
