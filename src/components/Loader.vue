<template>
  <div :class="{ show: show }" class="loader">
    <img src="../assets/load.gif" alt="" />
  </div>
</template>

<script>
export default {
  name: 'loader',
  props: {
    show: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style>
.loader {
  display: none;
}
.loader.show {
  display: block;
  position: fixed;
  z-index: 500;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  overflow: hidden;
  top: 0;
  height: 100%;
  left: 0;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
}
.loader img {
  position: absolute;
  top: 50%;
  left: calc(50% - 100px);
}
</style>
