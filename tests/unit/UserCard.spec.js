import { shallowMount } from '@vue/test-utils';
import UserCard from '@/components/UserCard.vue';

describe('UserCard.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'titulo';
    const company = 'company';
    const email = 'email';
    const active = true;
    const wrapper = shallowMount(UserCard, {
      propsData: { title, company, email, active }
    });
    expect(wrapper.classes()).toContain('default');
    expect(wrapper.text()).toMatch(company);
    expect(wrapper.text()).toMatch(email);
    expect(wrapper.text()).toMatch(title);
  });
});
