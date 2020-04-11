import { storiesOf } from '@storybook/vue';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import cButton from '../components/c-Button.vue';
import UserCard from '../components/UserCard.vue';

export default {
  component: cButton,
  title: 'c-Button'
};

// export const button = () => ({
//   components: { cButton },
//   template: '<c-button @click="action"/>',
//   methods: { action: action('clicked') }
// });

// export const userCard = () => ({
//   components: { UserCard },
//   template:
//     '<user-card @click="click" title="hernani" email="teste@teste.com" company="minha copanhia"/>',
//   methods: { click: action('fois') }
// });

const userCard = storiesOf('UserCard', module);
userCard.addDecorator(
  withKnobs({
    escapeHTML: false
  })
);

userCard.add('User card default', () => {
  return {
    components: { UserCard },
    props: {
      title: {
        type: String,
        default: text('title', 'hernani')
      },
      email: {
        type: String,
        default: text('email', 'aqui@aqui.com')
      },
      company: {
        type: String,
        default: text('company', 'companhia')
      }
    },
    methods: {
      click: action('foi clicado')
    },
    template: `
      <user-card
        :title="title"
        :email="email"
        :company="company"
        @click="click"
      />
    `
  };
});
