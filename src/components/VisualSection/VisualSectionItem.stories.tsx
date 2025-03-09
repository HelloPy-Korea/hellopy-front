import { Meta, StoryObj } from "@storybook/react";
import VisualSectionItem from "./VisualSectionItem.tsx";
import { FaMicrophone, FaChartLine, FaLightbulb } from "react-icons/fa";

const meta: Meta<typeof VisualSectionItem> = {
  title: "Components/VisualSectionItem",
  component: VisualSectionItem,
  args: {
    icon: <FaMicrophone />,
    title: "발표와 나눔",
    description: "파이썬 사용자들이 발표하고 지식을 나눌 수 있습니다.",
  },
};

export default meta;

export const ChartLine: StoryObj<typeof VisualSectionItem> = {
  args: {
    icon: <FaChartLine />,
    title: "학습과 성장",
    description: "파이썬에 관심 있는 사람들에게 학습과 성장을 촉진합니다.",
  },
};

export const Lightbulb: StoryObj<typeof VisualSectionItem> = {
  args: {
    icon: <FaLightbulb />,
    title: "공유와 협력",
    description: "다양한 파이썬 프로젝트와 아이디어를 공유하고 협력합니다.",
  },
};

export const Default: StoryObj<typeof VisualSectionItem> = {};
