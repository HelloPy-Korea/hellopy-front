import { useState } from "react";

interface Option {
    label: string;
    value: string;
}

interface SelectBoxProps {
    options: Option[];
    defaultValue?: string;
    onSelect?: (value: string) => void;
}

export const SelectBox = ({ options, defaultValue, onSelect }: SelectBoxProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue || options[0]?.value);

    // 옵션 클릭 핸들러
    const handleSelect = (value: string) => {
        setSelected(value);
        setIsOpen(false);
        onSelect?.(value);
    };

    return (
        <div className="relative w-[124px]">
            {/* 선택 버튼 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center pl-[18px] pr-3 py-3 bg-white rounded-t-[10px] border border-[#ebc6ff] text-[#bc1df2] text-base font-medium"
            >
                {options.find(opt => opt.value === selected)?.label || "선택"}
                <span className="w-6 h-6 flex items-center justify-center">▼</span>
            </button>

            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-white border border-[#ebc6ff] rounded-b-[10px] shadow-md z-10">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className="px-[18px] py-3 text-[#bc1df2] text-base font-medium cursor-pointer hover:bg-[#f3e8ff]"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};