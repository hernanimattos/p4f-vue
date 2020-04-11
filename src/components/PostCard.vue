<template>
  <div class="post-card" @click="click">
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'post-card',
  props: {
    title: String,
    body: String
  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style></style>
