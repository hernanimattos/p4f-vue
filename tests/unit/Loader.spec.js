import { shallowMount } from '@vue/test-utils';
import Loader from '@/components/Loader.vue';

describe('Loader.vue', () => {
  it('expect show prop set true', () => {
    const wrapper = shallowMount(Loader, {
      propsData: {
        show: true
      }
    });
    expect(wrapper.classes()).toContain('show');
  });
  it('expect show prop set false', () => {
    const wrapper = shallowMount(Loader, {
      propsData: {
        show: false
      }
    });
    expect(wrapper.classes()).not.toContain('show');
  });
});
