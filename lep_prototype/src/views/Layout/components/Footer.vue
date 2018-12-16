<template>
 <div>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <strong class="subheading">Get connected with email!: matsuo.h.ae-lep-support@ml.m.titech.ac.jp</strong>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>Action</strong>
      </v-card-actions>
    </v-card>
  </v-footer>

 </div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
       
      ]
    })
  }
</script>



