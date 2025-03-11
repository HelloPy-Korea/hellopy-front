import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextCircleGroup } from "./TextCircleGroup";

const meta = {
  title: "Components/TextCircleGroup",
  component: TextCircleGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextCircleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CodeOfConduct: Story = {
  name: "행동강령",
  args: {
    textList: Array.from({ length: 3 }, (_, index) =>
      ["행동강령", index + 1].map((text) => (
        <span key={text} className="text-2xl">
          {text}
        </span>
      )),
    ),
    size: 372,
    overlap: 10,
  },
};

export const Keyword: Story = {
  name: "HelloPY 키워드",
  args: {
    textList: [
      ["Neat", "깔끔"],
      ["Warm", "따뜻"],
      ["Embrace", "포용"],
      ["Relief", "안전"],
      ["Growth", "성장"],
    ].map(([text, subText]) => (
      <React.Fragment key={text}>
        <p className="text-lg font-light">{text}</p>
        <p className="text-2xl">{subText}</p>
      </React.Fragment>
    )),
    size: 238,
    overlap: 6,
  },
};
