<template>
  <div id="app">
    <Header/>
    <Pages/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Pages from './pages/Pages.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Pages,
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=STIX+Two+Math&display=swap');

*{
  font-family: 'STIX Two Math';
  color: rgb(163, 127, 29);
}

#app {
  text-align: center;
  background: url('https://static.vecteezy.com/system/resources/previews/001/838/464/original/golden-black-premium-background-free-vector.jpg');
  overflow-x: hidden;
}

</style>
