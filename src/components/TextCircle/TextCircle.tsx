import * as React from "react";

interface TextCircleProps extends React.PropsWithChildren {
  size: number;
}

const TextCircle: React.FC<TextCircleProps> = ({ children, size }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center border border-black rounded-full`}
      style={{
        width: size,
        height: size,
      }}
    >
      {children}
    </div>
  );
};

export default TextCircle;
