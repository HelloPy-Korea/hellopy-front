import * as React from "react";

interface LogoBannerTitleProps extends React.PropsWithChildren {
  as?: React.ElementType;
}

export const LogoBannerTitle: React.FC<LogoBannerTitleProps> = ({
  children,
  as: Tag = "p",
}) => {
  return (
    <Tag className="text-xl text-[#343434] font-semibold pb-2 border-b border-black">
      {children}
    </Tag>
  );
};

export default LogoBannerTitle;
