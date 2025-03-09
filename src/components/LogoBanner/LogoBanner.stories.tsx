import type { Meta, StoryObj } from "@storybook/react";

import {
  LogoBanner,
  LogoBannerImage,
  LogoBannerLink,
  LogoBannerTitle,
} from ".";

const meta = {
  title: "Components/LogoBanner",
  component: LogoBanner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LogoBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
    <div className="flex w-full justify-between gap-10">
      <LogoBanner>
        <LogoBannerTitle>HelloPY Main Logo</LogoBannerTitle>
        <LogoBannerImage src="https://placehold.co/480x250" />
        <LogoBannerLink href="#">메인로고 다운받기</LogoBannerLink>
      </LogoBanner>
      <LogoBanner>
        <LogoBannerTitle>HelloPY 3D Logo</LogoBannerTitle>
        <LogoBannerImage src="https://placehold.co/480x250" />
        <LogoBannerLink href="#">3D로고 다운받기</LogoBannerLink>
      </LogoBanner>
    </div>
  ),
};
