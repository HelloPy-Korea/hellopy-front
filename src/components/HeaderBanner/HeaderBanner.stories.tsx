import type { Meta, StoryObj } from "@storybook/react";

import {HeaderBanner} from ".";
import {Breadcrumb} from "@/components/Breadcrumb";
import mdBannerImg from '@/assets/img/md/img_banner.png';

const meta = {
  title: "Components/HeaderBanner",
  component: HeaderBanner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HeaderBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div
        className="bg-[#fdfafe] flex flex-col justify-center items-center"
        style={{ width: "1600px", height: "484px" }} // ✅ 고정 크기 설정
    >
      {children}
    </div>
);

export const Default: Story = {
  render: (args) => (
      <Wrapper>
        <HeaderBanner {...args} />
      </Wrapper>
  ),
  args: {
    backgroundImage: mdBannerImg, // ✅ 배경 이미지 추가
    title: "HelloPY MD",
    description: `
      저희 대표 캐릭터 <strong>파이몬</strong>으로 만든 <strong>귀여운 스티커</strong>들과 키링들..<br/>
      앞으로 더 많아질 <span style='color: yellow;'>굿즈들</span>을 기대해 주세요!!`,
  },
};

export const WithBreadcrumb: Story = {
  render: (args) => (
      <Wrapper>
        <HeaderBanner {...args}>
          <Breadcrumb children={[<a href="#">Home</a>, <a href="#">ABOUT</a>, "Identity"]} />
        </HeaderBanner>
      </Wrapper>
  ),
  args: {
    backgroundImage: mdBannerImg,
    title: "HelloPY MD",
    description: `
      저희 대표 캐릭터 <strong>파이몬</strong>으로 만든 <strong>귀여운 스티커</strong>들과 키링들..<br/>
      앞으로 더 많아질 <span style='color: yellow;'>굿즈들</span>을 기대해 주세요!!`,
  },
};
