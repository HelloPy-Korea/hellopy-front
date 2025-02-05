import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from ".";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    totalPages: 24,
    currentPage: 3,
    onPageChange: (page: number) => console.log("page:", page),
  },
};
