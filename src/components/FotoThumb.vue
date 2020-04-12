<template>
  <figure @click="click" class="foto-item">
    <img :src="src" alt="" :width="imgSize" />
  </figure>
</template>

<script>
export default {
  name: 'foto-thumb',
  data() {
    return {
      imgSize: ''
    };
  },
  watch: {
    thumbWidth(a, b) {
      this.imgSize = `${a}px`;
    },
    slideWidth(a, b) {
      this.imgSize = `${a}px`;
    }
  },
  props: {
    src: String,
    thumbActive: String,
    width: {
      type: String,
      required: false
    },
    thumbWidth: {
      type: Number,
      required: false
    },
    slideWidth: {
      type: Number,
      required: false
    }
  },
  methods: {
    click() {
      this.$emit('click', this.thumbActive);
    }
  }
};
</script>

<style>
.foto-item {
  transition: ease;
  padding: 0.5rem;
}
</style>
