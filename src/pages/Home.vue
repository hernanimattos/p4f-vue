<template>
  <Layout class="home">
    <template slot="header">
      <Logo />
    </template>
    <template slot="left-side">
      <aside v-if="users">
        <user-card
          v-for="user in users"
          :key="user.id"
          :title="user.name"
          :company="user.company.name"
          :email="user.email"
          @click="getUser(user)"
        />
      </aside>
    </template>
    <template slot="main-content">
      <section>
        <menu>
          <ul>
            <li>
              <router-link to="posts">Posts</router-link>
            </li>
            <li>
              <router-link to="fotos"> fotos</router-link>
            </li>
          </ul>
          <user-card
            v-if="user && user.name"
            :title="user.name"
            :company="user.company.name"
            :email="user.email"
          />
          <component :is="comp" />
        </menu>
      </section>
    </template>
  </Layout>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('main');

import Layout from '@/containers/Layout';
import Logo from '@/components/Logo';
import UserCard from '@/components/UserCard';
import PostsContainer from '@/containers/PostsContainer';
import FotosContainer from '@/containers/FotosContainer';

export default {
  name: 'Home',
  data() {
    return {
      comp: PostsContainer
    };
  },
  watch: {
    $route(to) {
      const { meta } = to || {};
      const { component } = meta;
      this.comp = component || PostsContainer;
    }
  },
  computed: {
    ...mapState(['users', 'user'])
  },
  methods: {
    ...mapActions(['getUsers', 'getUser'])
  },
  created() {
    if (this.users.length === 0) {
      this.getUsers().then(res => {
        this.getUser(res[0]);
      });
    }
  },

  components: {
    Layout,
    Logo,
    UserCard,
    PostsContainer,
    FotosContainer
  }
};
</script>
<style>
.home {
  padding: 1rem;
}
</style>
