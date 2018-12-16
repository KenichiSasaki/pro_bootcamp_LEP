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
        <v-card-text>
        <strong class="subheading">Get connected with us on social networks!</strong>
        <br>
        <v-btn
          :key="fb"
          class="mx-3"
          dark
          icon
        >
          <a href="https://www.facebook.com/Tokyo.Tech.ACTION"><v-icon size="24px">fab fa-facebook</v-icon></a>
        </v-btn>

        <v-btn
          :key="tw"
          class="mx-3"
          dark
          icon
        >
          <a href="https://twitter.com/titech_action"><v-icon size="24px">fab fa-twitter</v-icon></a>
        </v-btn>
        <br>
        <strong class="subheading">Get connected with email!: matsuo.h.ae-lep-support@ml.m.titech.ac.jp</strong>
        </v-card-text>
      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>TokyoTech Action</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
 </div>
</template>

<script>
  export default {
    name: "FooterBar",
    data: () => ({
      snss: {icon1:'fab fa-facebook',icon2:'fab fa-twitter'}
      
    }),
    methods: {
    
      }
  }
</script>