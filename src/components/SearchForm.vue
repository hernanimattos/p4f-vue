<template>
  <div class="hello">
    <cform :fields="fields" @submit="testeAction">
      <template slot="fields" slot-scope="{ fields }">
        <cinput v-model="fields.search" />
      </template>
    </cform>
  </div>
</template>

<script>
import cform from './c-form';
import cinput from './c-input';
export default {
  name: 'search-form',
  data() {
    return {
      fields: { search: 'nome' },
    };
  },
  props: {
    msg: String,
  },
  methods: {
    testeAction() {
      alert();
    },
    teste() {
      console.log('nois');
    },
  },
  components: {
    cform,
    cinput,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
