import { AccessibilityIcon } from '@radix-ui/react-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '.';

export default {
  component: Button,

  argTypes: {
    children: { type: 'string', defaultValue: 'Button' },
    type: {
      control: { type: 'radio' },
      options: ['regular', 'solid', 'transparent'],
      defaultValue: 'regular',
    },
    color: {
      control: { type: 'radio' },
      options: ['regular', 'accent', 'danger', 'positive'],
      defaultValue: 'regular',
    },
    disabled: { type: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const WithInTextIcon = Template.bind({});
WithInTextIcon.args = {
  children: (
    <>
      <AccessibilityIcon />
      Button
    </>
  ),
};
