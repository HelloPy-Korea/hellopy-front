import * as React from "react";
import HeaderMenu from "@/components/Header/HeaderMenu.tsx";
import {FaChevronDown} from "react-icons/fa";
import {useState} from "react";

const Header: React.FC = () => {
    const [showHomeDropdown, setShowHomeDropdown] = useState(false);
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);

    const menuItems = [
        { label: "HOME", hasDropdown: true },
        { label: "ABOUT", hasDropdown: true },
        { label: "NEWS", hasDropdown: false },
        { label: "SUPPORT", hasDropdown: false },
        { label: "COC", hasDropdown: false },
    ];

    return (
        <div className="w-full h-[78px] px-[169px] bg-white flex items-center">
            {/* 로고 */}
            <img
                className="w-[145px] h-[78px] object-contain flex-shrink-0"
                src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6324be2c-a8b1-4af8-b50e-19249d994d67%2Ffa28ddd3-ea28-4898-990c-2f1934ae80cf%2FKakaoTalk_Photo_2024-09-23-02-35-01_004.png&blockId=1091cd0c-2cb8-80dd-9743-e68459de2ac4&width=256"
                alt="Logo"
            />

            {/* 네비게이션 메뉴 */}
            <nav className="flex ml-[795px] gap-10 relative">
                {menuItems.map(({ label, hasDropdown }) => (
                    <div
                        key={label}
                        className="relative flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                            if (label === "HOME") {
                                setShowHomeDropdown(!showHomeDropdown);
                                setShowAboutDropdown(false);
                            } else if (label === "ABOUT") {
                                setShowAboutDropdown(!showAboutDropdown);
                                setShowHomeDropdown(false);
                            }
                        }}
                    >
                        <HeaderMenu label={label}/>
                        {hasDropdown && <FaChevronDown className="text-gray-600"/>}
                        {label === "HOME" && showHomeDropdown && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[122px] h-[47px] px-[33px] py-3.5 bg-white rounded-md shadow-lg flex justify-center items-center">
                                <div className="text-black text-base font-medium">공지사항</div>
                            </div>
                        )}

                        {label === "ABOUT" && showAboutDropdown && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[122px] flex flex-col shadow-lg">
                                <div className="h-[47px] px-[34px] py-3.5 bg-white rounded-t-md flex justify-center items-center">
                                    <div className="text-black text-base font-medium">Identity</div>
                                </div>
                                <div className="h-[47px] px-[34px] py-3.5 bg-white rounded-b-md flex justify-center items-center">
                                    <div className="text-black text-base font-medium">MD</div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Header;