import { Meta, StoryObj } from "@storybook/react";
import FaqTextField from "./FaqTextField";

const meta: Meta<typeof FaqTextField> = {
  title: "Components/FaqTextField",
  component: FaqTextField,
};

export default meta;

type Story = StoryObj<typeof FaqTextField>;

export const Default: Story = {
  render: () => <FaqTextField />,
};
