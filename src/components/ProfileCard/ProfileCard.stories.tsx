import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCard } from ".";

const meta = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: "KIM MINSU",
    position: "직책",
    links: {
      email: "mailto:print.hello.py@gmail.com",
      linkedin: "https://www.linkedin.com/company/hellopy/",
      github: "https://github.com/HelloPy-Korea",
    },
    image: "https://placehold.co/200x260/000/fff",
  },
};
