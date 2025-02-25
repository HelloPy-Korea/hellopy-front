import type { Meta, StoryObj } from "@storybook/react";

import {ProgramInfo} from ".";
import ProgramImg from '@/assets/img/about/img_program.png';

const meta = {
  title: "Components/ProgramInfo",
  component: ProgramInfo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProgramInfo>;

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


export const Example: Story = {
    render: (args) => (
        <Wrapper>
            <ProgramInfo {...args} />
        </Wrapper>
    ),
    args: {
        backgroundImage: ProgramImg,
        programDetails: [
            {
                title: "세미나",
                description:
                    "상반기 & 하반기로 총 2번 진행합니다. 발표, 나눔, 네트워킹, 멘토링, 커리어빌딩, 핸즈온 등 여러 세션을 준비 중입니다.",
            },
            {
                title: "스터디",
                description:
                    "HelloPY는 개발자의 성장을 응원합니다. 필요에 따라 스터디를 자유롭게 오픈, 참여할 수 있습니다. 모각코, 줌각코 등 다양한 형태로 모여 공부합니다.",
            },
            {
                title: "멘토링",
                description:
                    "HelloPY는 시니어 파이써니스타와 주니어 파이써니스타의 활발한 멘토링을 지향합니다. HelloPY는 3년차 이하 파이썬 주니어 유저들을 위한 모임이에요. 경력 3년 이상이시라면, 멘토로 함께해주세요!",
                buttonText: "멘토로 참여",
                redirectUrl: ""

            }
        ],
        textPosition: "left",
    },
};

