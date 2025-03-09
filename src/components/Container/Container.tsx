import React from "react";

interface ContainerProps {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`mx-auto w-full max-w-[1280px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
