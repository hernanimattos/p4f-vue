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
      <section class="navigation-container">
        <nav class="navigation-content">
          <ul>
            <li>
              <router-link to="/posts">Posts</router-link>
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
        </nav>
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

aside {
  display: flex;
  max-width: 100%;
  flex-direction: column;
  word-break: break-word;
  background-color: rgb(26, 117, 255);
}

.navigation-container {
  padding-left: 1rem;
}

.navigation-content ul {
  background-color: #f09500;
  display: flex;
  margin-bottom: 1rem;
  font-weight: bold;
}

.navigation-content a {
  color: #fff;
  text-transform: uppercase;
}

.navigation-content ul li {
  padding: 1rem;
}

@media screen and (max-width: 768px) {
  .navigation-container {
    margin-top: 2rem;
    padding-left: 0;
  }
}

@media screen and (min-width: 768px) {
  aside {
    padding: 1rem;
  }
}
</style>
