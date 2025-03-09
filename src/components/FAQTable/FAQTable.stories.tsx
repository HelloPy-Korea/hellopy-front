import type { Meta, StoryObj } from "@storybook/react";

import { FAQTable } from ".";

const meta = {
  title: "Components/FAQTable",
  component: FAQTable,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FAQTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    columns: ["category", "question", "date"],
    data: [
      {
        category: "활동",
        question: "제10회 HelloPY 컨퍼런스 공지",
        date: "2024. 10. 19.",
        contents:
          "HelloPY는 파이썬 커뮤니티로, 다양한 행사를 개최하고 있습니다.",
      },
      {
        category: "학습",
        question: "HelloPY는?",
        date: "2024. 10. 19.",
        contents:
          "HelloPY는 파이썬 개발자들을 위한 학습 및 커뮤니티 공간입니다.",
      },
    ],
  },
};
