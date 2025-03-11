import * as React from "react";
import { TextCircle } from "../TextCircle";

const overlapClasses = {
  /** 0px */
  0: "-space-x-0",
  /** 2px  */
  0.5: "-space-x-0.5",
  /** 4px */
  1: "-space-x-1",
  /** 6px */
  1.5: "-space-x-1.5",
  /** 8px */
  2: "-space-x-2",
  /** 10px */
  2.5: "-space-x-2.5",
  /** 12px */
  3: "-space-x-3",
  /** 14px */
  3.5: "-space-x-3.5",
  /** 16px */
  4: "-space-x-4",
  /** 20px */
  5: "-space-x-5",
  /** 24px */
  6: "-space-x-6",
  /** 28px */
  7: "-space-x-7",
  /** 32px */
  8: "-space-x-8",
  /** 36px */
  9: "-space-x-9",
  /** 40px */
  10: "-space-x-10",
  /** 44px */
  11: "-space-x-11",
  /** 48px */
  12: "-space-x-12",
  /** 56px */
  14: "-space-x-14",
  /** 64px */
  16: "-space-x-16",
} as const;

interface TextCircleGroupProps {
  textList: React.ReactNode[];
  size: number;
  overlap?: keyof typeof overlapClasses;
}

export const TextCircleGroup: React.FC<TextCircleGroupProps> = ({
  textList,
  size,
  overlap = 0,
}) => {
  return (
    <div
      className={`flex ${overlapClasses[overlap]} justify-center whitespace-pre text-center text-[20px] font-medium`}
    >
      {textList.map((text, index) => (
        <TextCircle key={index} size={size}>
          {text}
        </TextCircle>
      ))}
    </div>
  );
};
