import type { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from "./SelectBox";

const meta = {
  title: "Components/SelectBox",
  component: SelectBox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    options: [
      { label: "2023년", value: "2023" },
      { label: "2024년", value: "2024" },
      { label: "2025년", value: "2025" },
    ],
    defaultValue: "년도",
    onSelect: (value) => console.log("선택됨:", value),
  },
};
