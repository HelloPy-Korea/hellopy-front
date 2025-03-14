import React from "react";

interface ContainerProps {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`mx-auto w-full min-w-[300px] max-w-[1280px] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
