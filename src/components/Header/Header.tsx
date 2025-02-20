import * as React from "react";
import HeaderMenu from "@/components/Header/HeaderMenu.tsx";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import HellopyImg from "@/assets/img/logo/img_hellopy.png"

const Header: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const menuItems = [
        {
            label: "HOME",
            hasDropdown: true,
            subItems: [{ label: "HOME" }, { label: "공지사항" }],
        },
        {
            label: "ABOUT",
            hasDropdown: true,
            subItems: [{ label: "ABOUT" }, { label: "IDENTITY" }, { label: "MD" }],
        },
        { label: "NEWS", hasDropdown: false },
        { label: "SUPPORT", hasDropdown: false },
        { label: "COC", hasDropdown: false },
    ];

    return (
        <div className="w-full h-[78px] bg-[#891FBD] flex items-center justify-center">
            <div className="w-[1280px] h-[78px] flex items-center justify-between ">
                <img
                    className="w-[145px] h-[78px] object-contain"
                    src={HellopyImg}
                    alt="Logo"
                />

                {/* 네비게이션 메뉴 */}
                <nav className="flex gap-10 relative z-[999]">
                    {menuItems.map(({ label, hasDropdown, subItems }) => (
                        <div
                            key={label}
                            className="relative flex items-center gap-2 cursor-pointer "
                            onClick={() =>
                                setOpenDropdown(openDropdown === label ? null : label)
                            }
                        >
                            <HeaderMenu label={label} />
                            {hasDropdown && <FaChevronDown className="text-gray-600 text-white" />}

                            {/* 드롭다운 메뉴 렌더링 */}
                            {hasDropdown && openDropdown === label && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col rounded-[8px] bg-white border border-[#ECECEC]">
                                    {subItems?.map(({ label: subLabel }, index) => (
                                        <div
                                            key={subLabel}
                                            className={`w-[143px] h-[53px] flex justify-center items-center hover:bg-[#908F8F1A] border-b border-[#ECECEC] 
                                            ${index === subItems.length - 1 ? "border-b-0" : ""}`}
                                        >
                                            <div className="text-black text-base font-medium">{subLabel}</div>
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