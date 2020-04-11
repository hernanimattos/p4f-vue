<template>
  <article>
    <post-card
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :body="post.body"
    />
  </article>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import PostCard from '../components/PostCard';

const { mapState, mapActions } = createNamespacedHelpers('main');

export default {
  name: 'posts-container',
  computed: {
    ...mapState(['posts'])
  },
  components: {
    PostCard
  }
};
</script>

<style></style>
