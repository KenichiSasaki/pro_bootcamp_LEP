<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>What is the LEP program?</h3>
    <p>Private partner relationship between two students to support their
learning foreign languages each other.
Only you need is fixing a schedule with your partner. Then you
can learn foreign languages practically at any time and any place
without any fee.</p> 

    <h3>Aim of the LEP program</h3>
    <p>We offer you opportunities to learn foreign languages,
especially speaking, and will contribute improvement of
language skill for students at Tokyo Tech and know culture and social
background of foreign countries through learning foreign
languages in this program.</p>  

    <h3>News</h3>
    <p>Registration for 2nd term LEP in 4Q
      Please check link below 
    </p>
    <ul>
      <li><a href="https://docs.google.com/forms/d/1Oes9VQjuPvzwkWxJ3ItA3xhUBlouVIxLFUOPmpFw6_c/edit" target="_blank" rel="noopener">Registration</a></li>
      <li><a href="https://drive.google.com/open?id=1T8HfqHmq4urYis2j4i8AfRbQbxKCkTuc" target="_blank" rel="noopener">制度概要</a></li>
      
    </ul>
    <h3>Event</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
