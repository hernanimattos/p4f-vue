<template>
  <figure @click="click" class="foto-item">
    <img :src="src" alt="" />
  </figure>
</template>

<script>
export default {
  name: 'foto-thumb',
  props: {
    src: String
  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style>
.foto-item {
  transition: ease;
}
</style>
