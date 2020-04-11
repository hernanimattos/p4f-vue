<template>
  <div id="app">
    <!-- <div id="nav"><router-link to="/">Home</router-link> |</div> -->
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Roboto&display=swap');
* {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  list-style: none;
  box-sizing: border-box;
}
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
