import { shallowMount } from '@vue/test-utils';
import PostCard from '@/components/PostCard.vue';

describe('PostCard.vue', () => {
  it('renders props when passed', () => {
    const title = 'titulo';
    const body = 'lorem ipsum';
    const wrapper = shallowMount(PostCard, {
      propsData: { title, body }
    });

    expect(wrapper.text()).toMatch(body);
    expect(wrapper.text()).toMatch(title);
  });
  it('expect emit click event whne clicked', () => {
    const wrapper = shallowMount(PostCard);
    wrapper.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
