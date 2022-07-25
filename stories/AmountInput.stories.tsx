import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AmountInput from '../components/AmountInput';

export default {
  title: 'Components/Amount Input',
  component: AmountInput,
} as ComponentMeta<typeof AmountInput>;

const Template: ComponentStory<typeof AmountInput> = (args) =>
  <AmountInput {...args}/>;

export const Default = Template.bind({});
Default.args = {
  label: 'How much do you want to invest?',
  amount: '10000',
  inputID: 'default-amount-input',
};

export const Empty = Template.bind({});
Empty.args = {
  label: 'How much do you want to invest?',
  inputID: 'default-amount-input',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'How much do you want to invest?',
  amount: '25000',
  inputID: 'default-amount-input',
  isError: true,
  errorMessage: 'Not Enough Money',
};
