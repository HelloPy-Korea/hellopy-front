import type { Meta, StoryObj } from "@storybook/react";

import { AboutTable } from ".";

const meta = {
  title: "Components/AboutTable",
  component: AboutTable,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AboutTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    columns: [
      { label: "번호", value: "no" },
      { label: "태그", value: "tag" },
      { label: "제목", value: "title" },
      { label: "작성일", value: "date" },
    ],
    data: [
      {
        no: 10,
        tag: "활동",
        title: "제10회 HelloPY 컨퍼런스 공지",
        date: "2024. 10. 19.",
      },
      {
        no: 9,
        tag: "활동",
        title: "제9회 HelloPY 컨퍼런스 공지",
        date: "2024. 09. 19.",
      },
      {
        no: 8,
        tag: "활동",
        title: "제8회 HelloPY 컨퍼런스 공지",
        date: "2024. 08. 19.",
      },
    ],
  },
};
