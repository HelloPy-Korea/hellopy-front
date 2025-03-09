import * as React from "react";

interface LogoBannerTitleProps extends React.PropsWithChildren {
  as?: React.ElementType;
}

export const LogoBannerTitle: React.FC<LogoBannerTitleProps> = ({
  children,
  as: Tag = "p",
}) => {
  return (
    <Tag className="border-b border-black pb-2 text-xl font-semibold text-[#343434]">
      {children}
    </Tag>
  );
};

export default LogoBannerTitle;
