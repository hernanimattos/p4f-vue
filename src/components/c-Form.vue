<template>
  <div class="form">
    <form @submit.prevent="submit">
      <slot name="fields" :fields="{ fields }"> </slot>
      <div class="form-buttons">
        <slot name="actions" :fields="{ fields }"> </slot>
        <button type="submit">Click Me!</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'cForm',
  props: {
    fields: Object,
  },

  methods: {
    submit() {
      this.$emit('submit');
    },
  },
};
</script>

<style></style>
