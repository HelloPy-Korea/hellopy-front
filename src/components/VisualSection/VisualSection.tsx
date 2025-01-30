import React from "react";
import VisualSectionItem from "./VisualSectionItem.tsx";
import { FaMicrophone, FaChartLine, FaLightbulb } from "react-icons/fa";

// 🔹 아이템 목록을 배열로 관리
const visualItems = [
    { icon: <FaMicrophone />, title: "발표와 나눔", description: "파이썬 사용자들이 발표하고 지식을 나눌 수 있습니다." },
    { icon: <FaChartLine />, title: "학습과 성장", description: "파이썬에 관심 있는 사람들에게 학습과 성장을 촉진합니다." },
    { icon: <FaLightbulb />, title: "공유와 협력", description: "다양한 파이썬 프로젝트와 아이디어를 공유하고 협력합니다." },
];

const VisualSection: React.FC = () => {
    return (
        <section className="relative bg-gray-100 py-16">
            <div className="absolute left-0 w-1/2 h-full bg-gray-300 rounded-r-full"></div>
            <div className="relative z-10 flex flex-wrap justify-center gap-10">
                {visualItems.map((item, index) => (
                    <VisualSectionItem key={index} icon={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    );
};

export default VisualSection;