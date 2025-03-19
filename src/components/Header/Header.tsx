import { useState } from "react";
import HeaderMenu from "@/components/Header/HeaderMenu.tsx";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import HellopyImg from "@/assets/img/logo/img_hellopy.png";
import HellopyImgPurple from "@/assets/img/logo/img_hellopy_purple.png";
import { Container } from "@/components/Container";
import { useNavigate } from "react-router-dom";

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
  /*  { label: "NEWS", hasDropdown: false },
  { label: "SUPPORT", hasDropdown: false },
  { label: "COC", hasDropdown: false },*/
];

interface HeaderProps {
  backgroundColor?: string;
  textColor?: string;
}

const Header = ({ backgroundColor, textColor }: HeaderProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = useNavigate();
  const goToMenu = (path: string) => {
    if (path) {
      nav(path);
    }
  };

  return (
    <div
      className={`relative ${backgroundColor} flex items-center justify-center`}
    >
      <Container className="flex h-[78px] w-full items-center justify-between px-4 md:px-10">
        {/* 로고 */}
        <img
          className="h-[78px] w-[145px] object-contain"
          src={textColor === "text-white" ? HellopyImg : HellopyImgPurple}
          onClick={() => goToMenu("/")}
          alt="Logo"
        />

        {/* 데스크탑 네비게이션 */}
        <nav className="relative z-[999] hidden gap-2 md:flex md:gap-10">
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
                  {subItems?.map(({ label: subLabel, path }, index) => (
                    <div
                      key={subLabel}
                      className={`flex h-[53px] w-[143px] items-center justify-center border-b border-[#ECECEC] hover:bg-[#908F8F1A] ${
                        index === subItems.length - 1 ? "border-b-0" : ""
                      }`}
                      onClick={() => goToMenu(path)}
                    >
                      <div className="text-base font-medium text-black">
                        {subLabel}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <button
          className="z-[1000] text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 모바일 네비게이션 (햄버거 메뉴) */}
        <div
          className={`absolute left-0 top-[78px] z-50 w-full transform bg-white shadow-md transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 p-4">
            {menuItems.map(({ label, hasDropdown, subItems }) => (
              <div key={label} className="relative">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() =>
                    setOpenDropdown(openDropdown === label ? null : label)
                  }
                >
                  <span className="text-lg font-medium">{label}</span>
                  {hasDropdown && <FaChevronDown className="text-gray-600" />}
                </div>

                {hasDropdown && openDropdown === label && (
                  <div className="mt-2 flex flex-col rounded-[8px] border-[#ECECEC] bg-white">
                    {subItems?.map(({ label: subLabel, path }, index) => (
                      <div
                        key={subLabel}
                        className={`flex h-[53px] items-center justify-center border-b border-[#ECECEC] hover:bg-[#908F8F1A] ${
                          index === subItems.length - 1 ? "border-b-0" : ""
                        }`}
                        onClick={() => goToMenu(path)}
                      >
                        <div className="text-base font-medium text-black">
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
      </Container>
    </div>
  );
};

export default Header;
