import type { Meta, StoryObj } from "@storybook/react";

import { Tab } from ".";

const meta = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    tabs: [
      { label: "공지사항", value: "notice" },
      { label: "FAQ", value: "faq" },
    ],
    activeTab: "notice",
    onTabChange: (value: string) => console.log("선택된 탭:", value),
  },
};
