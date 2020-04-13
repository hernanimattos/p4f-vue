import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import FotosContainer from '@/containers/FotosContainer.vue';
import FotoThumb from '@/components/FotoThumb.vue';

describe('Loader.vue', () => {
  let wrapper = '';

  beforeEach(() => {
    const store = new Vuex.Store({
      modules: {
        main: {
          name: 'main',
          namespaced: true,

          state: {
            imgs: [
              {
                id: 'aaaaaa',
                title: 'bbbbb',
                thumbnailUrl: 'ccccc',
                url: 'ddddd'
              }
            ],
            imgInit: {
              url: 'ddddd',
              width: 111
            }
          }
        }
      }
    });
    wrapper = shallowMount(FotosContainer, {
      propsData: {
        slideWidth: 0,
        thumbIndex: 0,
        thumbContainer: '',
        fotoItem: [{}],
        thumbWidth: 0,
        move: ''
      },
      store,
      methods: {}
    });
  });
  it('expect render post FotoThumb', () => {
    expect(wrapper.find(FotoThumb).exists()).toBe(true);
  });
  it('expect render post card', () => {
    wrapper.vm.getImageSelected = jest.fn();
    wrapper.vm.setActiveCheck('url da imagem');

    expect(wrapper.vm.getImageSelected).toBeCalledWith({
      url: 'url da imagem'
    });
  });
});
