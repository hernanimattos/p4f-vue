import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import PostsContainer from '@/containers/PostsContainer.vue';
import PostCard from '@/components/PostCard.vue';

describe('Loader.vue', () => {
  let wrapper = '';

  beforeEach(() => {
    const store = new Vuex.Store({
      modules: {
        main: {
          name: 'main',
          namespaced: true,

          state: {
            posts: [
              {
                id: 123,
                title: 'titulo',
                body: 'aqui'
              }
            ]
          }
        }
      }
    });
    wrapper = shallowMount(PostsContainer, {
      store
    });
  });
  it('expect render post card', () => {
    expect(wrapper.find(PostCard).exists()).toBe(true);
  });
});
