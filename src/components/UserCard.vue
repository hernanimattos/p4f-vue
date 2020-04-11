<template>
  <div :class="[isActive ? 'default' : '']" class="user-card" @click="click">
    <h2>{{ title }}</h2>
    <p>{{ email }}</p>
    <p>{{ company }}</p>
  </div>
</template>

<script>
export default {
  name: 'user-card',
  data() {
    return {
      isActive: this.default
    };
  },
  props: {
    title: String,
    email: String,
    company: String,
    default: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style>
.user-card {
  /* box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2); */
  padding: 1rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
}

.user-card.default {
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
}

.user-card.default:hover {
  transform: scale(1.05);
  background-color: rgb(26, 117, 255);
  color: #fff;
}
</style>
