<template>
  <v-app>
    <v-main>
      <navbar />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  data() {
    return {}
  },
  components: {
    navbar,
  },
}
</script>


