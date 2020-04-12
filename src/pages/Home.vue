<template>
  <Layout class="home">
    <template slot="header">
      <Logo />
    </template>
    <template slot="left-side">
      <aside v-if="users" class="side-nav">
        <user-card
          v-for="user in users"
          :key="user.id"
          :title="user.name"
          :company="user.company.name"
          :email="user.email"
          @click="getDataByUserId(user)"
          default
        />
      </aside>
    </template>
    <template slot="main-content">
      <section class="main-content__dinamic">
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
      comp: ''
    };
  },
  watch: {
    $route(to) {
      const { name } = to || {};
      const { id } = this.user;
      this.manageCallsByRoute(id);
    }
  },
  computed: {
    ...mapState(['users', 'user'])
  },
  methods: {
    ...mapActions([
      'getUsers',
      'getUser',
      'getPostsByUserId',
      'getImagesByUserId'
    ]),
    componentRender(route) {
      const component = {
        Home: PostsContainer,
        Posts: PostsContainer,
        Fotos: FotosContainer
      };

      return component[route];
    },

    getDataByUserId(user) {
      const { id } = user;

      this.getUser(user);
      this.manageCallsByRoute(id);
    },
    manageCallsByRoute(id) {
      const { name } = this.$route;
      const routeCall = {
        Home: id => this.getPostsByUserId(id),
        Posts: id => this.getPostsByUserId(id),
        Fotos: id => this.getImagesByUserId(id)
      };

      this.comp = this.componentRender(name);

      return routeCall[name](id);
    }
  },
  created() {
    if (this.users.length === 0) {
      this.getUsers().then(res => {
        const { id } = res[0];
        this.getUser(res[0]);
        this.manageCallsByRoute(id);
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
  min-width: 1px;
}

.side-nav {
  display: flex;
  max-width: 100%;
  flex-direction: column;
  word-break: break-word;
  background-color: rgb(26, 117, 255);
}

.main-content__dinamic {
  padding-left: 1rem;
  min-width: 1px;
  overflow: hidden;
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
  display: block;
  padding: 1rem;
}
.router-link-exact-active {
  background-color: rebeccapurple;
}

@media screen and (max-width: 768px) {
  .main-content__dinamic {
    margin-top: 2rem;
    padding-left: 0;
  }
}

@media screen and (min-width: 768px) {
  .side-nav {
    padding: 1rem;
  }
}
</style>
