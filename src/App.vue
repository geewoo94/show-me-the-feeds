<template>
  <div id="app">
    <Header />
    <main>
      <Login />
      <Feeds />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import Feeds from './components/Feeds.vue'

export default {
  name: 'App',
  components: {
    Header,
    Login,
    Feeds,
  }
}
</script>

<style>
html, body {
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

i {
  display: inline-block;
}

h1, h2, h3, h4, h5, h6, p, ul {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>
