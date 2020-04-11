<template>
  <div id="app">
    <!-- <div id="nav"><router-link to="/">Home</router-link> |</div> -->
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;700&display=swap');
* {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  list-style: none;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
