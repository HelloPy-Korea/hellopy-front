import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumb from "./Breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: [<a href="#">Home</a>, <a href="#">ABOUT</a>, "Identity"],
  },
};

export const Dark: Story = {
  args: {
    children: [<a href="#">Home</a>, <a href="#">ABOUT</a>, "MD"],
    className: "dark",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
