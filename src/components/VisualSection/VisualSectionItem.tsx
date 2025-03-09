import React from "react";

interface VisualItemProps {
  icon: string;
  iconSize: string;
  title: string;
  description: string;
}

const VisualSectionItem: React.FC<VisualItemProps> = ({
  icon,
  iconSize,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={icon}
        alt="Program"
        style={{ width: iconSize, height: iconSize }}
        className="mb-[35px]"
      />
      <h3 className="text-[#2D003D]-500 mb-[11px] text-[24px]">{title}</h3>
      <p className="text-[#2D003D]-300 whitespace-pre-line text-[px]">
        {description}
      </p>
    </div>
  );
};

export default VisualSectionItem;
