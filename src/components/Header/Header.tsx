import * as React from "react";
import HeaderMenu from "@/components/Header/HeaderMenu.tsx";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

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
        <div className="w-full h-[78px] px-[169px] bg-white flex items-center fixed top-0 left-0 right-0 z-[999]">
            {/* 로고 */}
            <img
                className="w-[145px] h-[78px] object-contain"
                src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6324be2c-a8b1-4af8-b50e-19249d994d67%2Ffa28ddd3-ea28-4898-990c-2f1934ae80cf%2FKakaoTalk_Photo_2024-09-23-02-35-01_004.png&blockId=1091cd0c-2cb8-80dd-9743-e68459de2ac4&width=256"
                alt="Logo"
            />

            {/* 네비게이션 메뉴 */}
            <nav className="flex ml-[795px] gap-10 relative">
                {menuItems.map(({ label, hasDropdown, subItems }) => (
                    <div
                        key={label}
                        className="relative flex items-center gap-2 cursor-pointer "
                        onClick={() =>
                            setOpenDropdown(openDropdown === label ? null : label)
                        }
                    >
                        <HeaderMenu label={label} />
                        {hasDropdown && <FaChevronDown className="text-gray-600" />}

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
    );
};

export default Header;