import type { Meta, StoryObj } from "@storybook/react";

import { Gallery } from "./Gallery";

const meta = {
  title: "Components/Gallery",
  component: Gallery,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Gallery>;

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
