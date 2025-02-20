import * as React from "react";

interface NavItemProps {
    label: string,
    textColor?: string
}

const HeaderMenu: React.FC<NavItemProps> = ({ label, textColor }) => {
    return <div className={`text-center ${textColor} text-lg px-4`}>{label}</div>;
};

  export default HeaderMenu;