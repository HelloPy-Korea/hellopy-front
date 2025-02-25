import type { Meta, StoryObj } from "@storybook/react";

import {HomeCard} from ".";
import ActiveImg from '@/assets/img/home/img_active.png';
import CalendarImg from '@/assets/img/home/img_this_calendar.png';

const meta = {
  title: "Components/HomeCard",
  component: HomeCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HomeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div
        className="flex flex-col justify-center items-center"
        style={{ width: "1600px", height: "484px" }} // ✅ 고정 크기 설정
    >
        {children}
    </div>
);


export const Left: Story = {
    render: (args) => (
        <Wrapper>
            <HomeCard {...args} />
        </Wrapper>
    ),
    args: {
        backgroundImage: CalendarImg,
        title: "이달의 달력",
        subtitle: "Wallpaper",
        description: `
      HelloPY는 매달 새로운 달력을 제작하여 무료로 배포합니다.<br/>
      지금 바로 최신 파이몬 달력을 다운로드해보세요!`,
        buttonText: "전체 이미지 보기 →",
        textPosition: "left",
        buttonUrl: "",
    },
};

export const Right: Story = {
    render: (args) => (
        <Wrapper>
            <HomeCard {...args} />
        </Wrapper>
    ),
    args: {
        backgroundImage: ActiveImg,
        title: "이달의 달력",
        subtitle: "Wallpaper",
        description: `
      HelloPY는 매달 새로운 달력을 제작하여 무료로 배포합니다.<br/>
      지금 바로 최신 파이몬 달력을 다운로드해보세요!`,
        buttonText: "전체 이미지 보기 →",
        textPosition: "right",
        buttonUrl: "",
    },
};
