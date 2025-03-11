import * as React from "react";

interface NavItemProps {
  label: string;
  textColor?: string;
}

const HeaderMenu: React.FC<NavItemProps> = ({ label, textColor }) => {
  return <div className={`text-center ${textColor} px-4 text-lg`}>{label}</div>;
};

export default HeaderMenu;
