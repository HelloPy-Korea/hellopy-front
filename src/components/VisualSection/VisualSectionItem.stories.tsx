import { Meta, StoryObj } from "@storybook/react";
import VisualSectionItem from "./VisualSectionItem.tsx";
import { FaMicrophone } from "react-icons/fa";

const meta: Meta<typeof VisualSectionItem> = {
    title: "Components/VisualSectionItem",
    component: VisualSectionItem,
    args: {
        icon: <FaMicrophone />,
        title: "발표와 나눔",
        description: "파이썬 사용자들이 평가 없이 발표하고 지식을 나눌 수 있습니다.",
    },
};

export default meta;


export const Primary: StoryObj<typeof VisualSectionItem> = {
    args: {
        icon: <FaMicrophone />,
        title: "발표 모드",
        description: "이 모드에서는 발표자가 화면을 공유합니다.",
    },
};

export const Warning: StoryObj<typeof VisualSectionItem> = {
    args: {
        icon: <FaMicrophone />,
        title: "마이크 문제",
        description: "마이크 연결이 감지되지 않았습니다.",
    },
};

export const Default: StoryObj<typeof VisualSectionItem> = {};