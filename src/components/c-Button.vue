<template>
  <div class="button">
    <button type="button" @click="click">aqui</button>
  </div>
</template>

<script>
export default {
  name: 'cButton',
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style></style>
