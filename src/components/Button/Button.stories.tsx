import { Button } from "./Button";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

type T = typeof Button;

export default {
  component: Button,
  args: {
    children: "Default",
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};
