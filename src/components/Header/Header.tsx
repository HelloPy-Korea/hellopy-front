import * as React from "react";
import HeaderMenu from "@/components/Header/HeaderMenu.tsx";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import HellopyImg from "@/assets/img/logo/img_hellopy.png";
import HellopyImgPurple from "@/assets/img/logo/img_hellopy_purple.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  backgroundColor?: string;
  textColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  backgroundColor = "bg-[#891FBD]",
  textColor = "text-white",
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: "HOME",
      hasDropdown: true,
      path: "/",
      subItems: [
        { label: "HOME", path: "/" },
        { label: "공지사항", path: "/board/notice" },
      ],
    },
    {
      label: "ABOUT",
      hasDropdown: true,
      path: "/about",
      subItems: [
        { label: "ABOUT", path: "/about" },
        { label: "IDENTITY", path: "/about/identity" },
        { label: "MD", path: "/about/md" },
      ],
    },
    { label: "NEWS", hasDropdown: false },
    { label: "SUPPORT", hasDropdown: false },
    { label: "COC", hasDropdown: false },
  ];

  const nav = useNavigate();
  const goToMenu = (path: string) => {
    if (path) {
      nav(path);
    }
  };

  return (
    <div
      className={`relative h-[78px] w-[1920px] ${backgroundColor} flex items-center justify-center`}
    >
      <div className="flex h-[78px] w-[1280px] items-center justify-between">
        <img
          className={`h-[78px] w-[145px] object-contain`}
          src={textColor === "text-white" ? HellopyImg : HellopyImgPurple}
          alt="Logo"
        />

        <nav className="relative z-[999] flex gap-10">
          {menuItems.map(({ label, hasDropdown, subItems }) => (
            <div
              key={label}
              className="relative flex cursor-pointer items-center gap-2"
              onClick={() =>
                setOpenDropdown(openDropdown === label ? null : label)
              }
            >
              <HeaderMenu label={label} textColor={textColor} />
              {hasDropdown && (
                <FaChevronDown className={`text-gray-600 ${textColor}`} />
              )}
              {hasDropdown && openDropdown === label && (
                <div className="absolute left-1/2 top-full mt-2 flex -translate-x-1/2 flex-col rounded-[8px] border border-[#ECECEC] bg-white">
                  {subItems?.map(({ label: subLabel, path: path }, index) => (
                    <div
                      key={subLabel}
                      className={`flex h-[53px] w-[143px] items-center justify-center border-b border-[#ECECEC] hover:bg-[#908F8F1A] ${index === subItems.length - 1 ? "border-b-0" : ""}`}
                      onClick={() => goToMenu(path)}
                    >
                      <div className="{text-black text-base font-medium">
                        {subLabel}
                      </div>
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
