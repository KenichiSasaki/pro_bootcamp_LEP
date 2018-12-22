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
          <a class="snslink" href="https://www.facebook.com/Tokyo.Tech.ACTION" target="_blanck"><v-icon size="24px">fab fa-facebook</v-icon></a>
        </v-btn>

        <v-btn
          :key="tw"
          class="mx-3"
          dark
          icon
        >
          <a class="snslink" href="https://twitter.com/titech_action" target="_blanck"><v-icon size="24px">fab fa-twitter</v-icon></a>
        </v-btn>
        <br>
        <strong class="subheading">Get connected with email!: <a href="mailto:tandem.titech@gmail.com">tandem.titech@gmail.com</a></strong>
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
      
    }),
    
    methods: {

    }
  }
</script>

<style scoped>
.snslink {
  color: white;
  text-decoration: none;
}
</style>