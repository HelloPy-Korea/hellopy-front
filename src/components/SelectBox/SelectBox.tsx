import {useState} from "react";
import {SelectValue} from "@/types/common.ts";

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
                className="w-full flex justify-between items-center pl-[18px] pr-3 py-3 bg-white rounded-t-[10px] border border-[#ebc6ff] text-hellopy-purple-200 text-base font-medium"
            >
                {options.find(opt => opt.checked)?.label || "선택"}
                <span className="w-6 h-6 flex items-center justify-center">▼</span>
            </button>

            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-white border border-[#ebc6ff] rounded-b-[10px] shadow-md z-10">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className="px-[18px] py-3 text-hellopy-purple-200 text-base font-medium cursor-pointer hover:bg-[#f3e8ff]"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};