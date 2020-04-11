<template>
  <div class="card" @click="click">
    <h2>{{ title }}</h2>
    <p>{{ email }}</p>
    <p>{{ company }}</p>
  </div>
</template>

<script>
export default {
  name: 'post-card',
  props: {
    title: String,
    email: String,
    company: String,
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style></style>
