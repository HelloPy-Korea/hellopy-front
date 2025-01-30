import type { Meta, StoryObj } from "@storybook/react";

import { TextCircle } from "./TextCircle";

const meta = {
  title: "Components/TextCircle",
  component: TextCircle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: <span className="text-2xl">행동강령</span>,
    size: 300,
  },
};
