import { useState } from "react";
import { SelectValue } from "@/types/common.ts";

interface SelectBoxProps {
  options: SelectValue[];
  onSelect?: (value: string) => void;
}

export const SelectBox = ({ options, onSelect }: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // 옵션 클릭 핸들러
  const handleSelect = (value: string) => {
    setIsOpen(false);
    onSelect?.(value);
  };

  return (
    <div className="relative w-[124px]">
      {/* 선택 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-t-[10px] border border-[#ebc6ff] bg-white py-3 pl-[18px] pr-3 text-base font-medium text-[#bc1df2]"
      >
        {options.find((opt) => opt.checked)?.label || "선택"}
        <span className="flex h-6 w-6 items-center justify-center">▼</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full z-10 w-full rounded-b-[10px] border border-[#ebc6ff] bg-white shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="cursor-pointer px-[18px] py-3 text-base font-medium text-[#bc1df2] hover:bg-[#f3e8ff]"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
