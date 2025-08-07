import { useState, useEffect, useRef } from "react";
import HeaderMenu from "@/components/Header/HeaderMenu.tsx";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import HellopyImg from "@/assets/img/logo/img_hellopy_new_logo.svg";
import HellopyImgPurple from "@/assets/img/logo/img_hellopy_new_logo_black.svg";
import { Container } from "@/components/Container";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "공지사항",
    hasDropdown: false,
    path: "/board/notice",
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
  {
    label: "COC",
    hasDropdown: false,
    path: "/coc",
  },
  {
    label: "HISTORY",
    hasDropdown: false,
    path: "/history",
  },
  { label: "SUPPORT", path: "/support", hasDropdown: false },
  /*  { label: "NEWS", hasDropdown: false },
  { label: "SUPPORT", hasDropdown: false },
  { label: "COC", hasDropdown: false },*/
];

interface HeaderProps {
  textColor?: string;
}

const Header = ({ textColor }: HeaderProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const nav = useNavigate();
  const goToMenu = (path: string) => {
    if (path) {
      nav(path);
      setIsMenuOpen(false);
      setOpenDropdown(null); // 드롭다운도 닫기
    }
  };

  // 외부 클릭 감지하여 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center bg-main-purple`}>
      <Container className="flex h-[78px] w-full items-center justify-between px-4 md:px-10">
        {/* 로고 */}
        <img
          className="h-[78px] w-[145px] object-contain"
          src={textColor === "text-white" ? HellopyImg : HellopyImgPurple}
          onClick={() => goToMenu("/")}
          alt="Logo"
        />

        {/* 데스크탑 네비게이션 */}
        <nav
          ref={dropdownRef}
          className="relative z-[999] hidden gap-2 md:flex md:gap-10"
        >
          {menuItems.map(({ label, hasDropdown, subItems, path }) => (
            <div
              key={label}
              className="relative flex cursor-pointer items-center gap-2"
              onClick={() => {
                if (hasDropdown) {
                  setOpenDropdown(openDropdown === label ? null : label);
                } else {
                  goToMenu(path);
                }
              }}
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
                      className={`flex h-[53px] w-[143px] cursor-pointer items-center justify-center border-b border-[#ECECEC] hover:bg-[#908F8F1A] ${
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
            {menuItems.map(({ label, hasDropdown, subItems, path }) => (
              <div key={label} className="relative">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => {
                    if (hasDropdown) {
                      setOpenDropdown(openDropdown === label ? null : label);
                    } else {
                      goToMenu(path);
                    }
                  }}
                >
                  <span className="text-lg font-medium">{label}</span>
                  {hasDropdown && <FaChevronDown className="text-gray-600" />}
                </div>

                {hasDropdown && openDropdown === label && (
                  <div className="mt-2 flex flex-col rounded-[8px] border-[#ECECEC] bg-white">
                    {subItems?.map(({ label: subLabel, path }, index) => (
                      <div
                        key={subLabel}
                        className={`flex h-[53px] cursor-pointer items-center justify-center border-b border-[#ECECEC] hover:bg-[#908F8F1A] ${
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
