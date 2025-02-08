import type { Meta, StoryObj } from "@storybook/react";

import {
  AboutSection,
  AboutSectionTitle,
} from ".";
import {SelectBox} from "@/components/SelectBox";

const meta = {
  title: "Components/AboutSection",
  component: AboutSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AboutSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
      <AboutSection>
        <AboutSectionTitle title={"월간 PYMON"} subtitle={"Wallpaper"} description={[
          "PYMON👾 달력 배경화면을 준비했습니다! 💜 누구나 이미지 다운로드 후 사용하실 수 있습니다😆",
          "이미지를 꾸욱 누르면 열리는 팝업에서 “내 폰에 저장” 혹은 “사진 다운로드”를 선택해주세요!",
          "헬로파이에서는 매달 새로운 달력을 디자인해서 공유하고 있어요. 다음 달의 달력도 기대해 주세요! ☘️",
        ]}/>
        <SelectBox  options={ [
        { label: "2023년", value: "2023" },
        { label: "2024년", value: "2024" },
        { label: "2025년", value: "2025" },
        ]}
        defaultValue={"년도"}
        onSelect={(value) => console.log("선택됨:", value)} />
      </AboutSection>
  ),
};
