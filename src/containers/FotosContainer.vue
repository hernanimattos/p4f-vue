<template>
  <div class="foto" @click="click">
    fotos
    <h2>{{ title }}</h2>
    <p>{{ email }}</p>
    <p>{{ company }}</p>
  </div>
</template>

<script>
export default {
  name: 'fotos-container',
  props: {
    title: String,
    email: String,
    company: String
  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style></style>
