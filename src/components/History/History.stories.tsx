import type { Meta, StoryObj } from "@storybook/react";

import { History } from "./History";

const meta = {
  title: "Components/History",
  component: History,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof History>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    items: Array.from({ length: 7 }, (_, index) => ({
      image: {
        url: `https://picsum.photos/${getRandomInt(200, 800)}/${getRandomInt(
          200,
          800,
        )}?random=${index}`,
        alt: `Image ${index}`,
      },
      title: `Title ${index}`,
      description: `Description ${index}`,
    })),
  },
};

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
