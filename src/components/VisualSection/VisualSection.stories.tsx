import { Meta, StoryObj } from "@storybook/react";
import VisualSection from "./VisualSection";

const meta: Meta<typeof VisualSection> = {
  title: "Components/VisualSection",
  component: VisualSection,
};

export default meta;

export const Default: StoryObj<typeof VisualSection> = {
  render: () => <VisualSection />,
};
