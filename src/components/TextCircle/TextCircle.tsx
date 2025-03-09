import * as React from "react";

interface TextCircleProps extends React.PropsWithChildren {
  size: number;
}

export const TextCircle: React.FC<TextCircleProps> = ({ children, size }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-full border border-black`}
      style={{
        width: size,
        height: size,
      }}
    >
      {children}
    </div>
  );
};
