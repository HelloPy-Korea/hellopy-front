import * as React from "react";

interface NavItemProps {
    label: string;
}

const HeaderMenu: React.FC<NavItemProps> = ({ label }) => {
    return <div className="text-center text-black text-lg px-4">{label}</div>;
};

  export default HeaderMenu;