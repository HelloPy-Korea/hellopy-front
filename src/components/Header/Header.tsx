import * as React from "react";
import HeaderMenu from "@/components/Header/HeaderMenu.tsx";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import HellopyImg from "@/assets/img/logo/img_hellopy.png"
import HellopyImgPurple from "@/assets/img/logo/img_hellopy_purple.png"
import {useNavigate} from "react-router-dom";

interface HeaderProps {
    backgroundColor?: string;
    textColor?: string;
  }

const Header: React.FC<HeaderProps> = ({ 
    backgroundColor,
    textColor
}) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const menuItems = [
        {
            label: "HOME",
            hasDropdown: true,
            path:"/",
            subItems: [{ label: "HOME", path:"/" }, { label: "공지사항", path:"/board/notice" }],
        },
        {
            label: "ABOUT",
            hasDropdown: true,
            path:"/about",
            subItems: [{ label: "ABOUT", path:"/about" }, { label: "IDENTITY", path:"/about/identity" }, { label: "MD", path:"/about/md" }],
        },
        { label: "NEWS", hasDropdown: false },
        { label: "SUPPORT", hasDropdown: false },
        { label: "COC", hasDropdown: false },
    ];

    const nav = useNavigate();
    const goToMenu = (path:string) => {
        if(path){
            nav(path);
        }
    }

    return (
        <div className={`relative w-[1920px] h-[78px] ${backgroundColor} flex items-center justify-center`}>
            <div className="w-[1280px] h-[78px] flex items-center justify-between ">
                <img
                    className={`w-[145px] h-[78px] object-contain`}
                    src={textColor==="text-white" ? HellopyImg : HellopyImgPurple}
                    alt="Logo"
                />

                <nav className="flex gap-10 relative z-[999]">
                    {menuItems.map(({ label, hasDropdown, subItems }) => (
                        <div
                            key={label}
                            className="relative flex items-center gap-2 cursor-pointer "
                            onClick={() =>
                                setOpenDropdown(openDropdown === label ? null : label)
                            }
                        >
                            <HeaderMenu 
                                label={label} 
                                textColor={textColor}
                            />
                            {hasDropdown && <FaChevronDown className={`text-gray-600 ${textColor}`} />}
                            {hasDropdown && openDropdown === label && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col rounded-[8px] bg-white border border-[#ECECEC]">
                                    {subItems?.map(({ label: subLabel, path: path }, index) => (
                                        <div
                                            key={subLabel}
                                            className={`w-[143px] h-[53px] flex justify-center items-center hover:bg-[#908F8F1A] border-b border-[#ECECEC] 
                                            ${index === subItems.length - 1 ? "border-b-0" : ""}`}
                                            onClick={()=>goToMenu(path)}
                                        >
                                            <div className="{text-black text-base font-medium">{subLabel}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Header;