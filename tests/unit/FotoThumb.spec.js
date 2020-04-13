import { shallowMount } from '@vue/test-utils';
import FotoThumb from '@/components/FotoThumb.vue';

describe('FotoThumb.vue', () => {
  it('renders props when passed', () => {
    const src = 'titulo';
    const title = 'aaaaaaa';
    const thumbActive = 'bbbbbbb';
    const width = 'ccccccc';
    const thumbWidth = 123;
    const slideWidth = 123;
    const wrapper = shallowMount(FotoThumb, {
      propsData: { src, title, thumbActive, width, thumbWidth, slideWidth }
    });

    expect(wrapper.props().src).toBe(src);
    expect(wrapper.props().title).toBe(title);
    expect(wrapper.props().thumbActive).toBe(thumbActive);
    expect(wrapper.props().width).toBe(width);
    expect(wrapper.props().thumbWidth).toBe(thumbWidth);
    expect(wrapper.props().slideWidth).toBe(slideWidth);
  });
  it('expect emit click event whne clicked', () => {
    const wrapper = shallowMount(FotoThumb, {
      propsData: {
        thumbActive: '123'
      }
    });
    wrapper.vm.click();
    expect(wrapper.emitted().click[0][0]).toBe('123');
  });
});
