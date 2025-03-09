import React from "react";
import VisualSectionItem from "./VisualSectionItem.tsx";

import MicIcon from "@/assets/img/about/icon_mic.png";
import GrowIcon from "@/assets/img/about/icon_grow.png";
import ShareIcon from "@/assets/img/about/icon_share.png";

const visualItems = [
  {
    icon: MicIcon,
    iconSize: "76px",
    title: "발표와 나눔",
    description: "파이썬 사용자들이 발표하고 \n지식을 나눌 수 있습니다.",
  },
  {
    icon: GrowIcon,
    iconSize: "70px",
    title: "학습과 성장",
    description: "파이썬에 관심 있는 사람들에게 \n학습과 성장을 촉진합니다.",
  },
  {
    icon: ShareIcon,
    iconSize: "76px",
    title: "공유와 협력",
    description: "다양한 파이썬 프로젝트와 \n아이디어를 공유하고 협력합니다.",
  },
];

const VisualSection: React.FC = () => {
  return (
    <section className="flex h-[708px] w-full items-center justify-center">
      <div className="grid grid-cols-3 gap-[270px] text-center">
        {visualItems.map((item, index) => (
          <VisualSectionItem
            key={index}
            icon={item.icon}
            iconSize={item.iconSize}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default VisualSection;
