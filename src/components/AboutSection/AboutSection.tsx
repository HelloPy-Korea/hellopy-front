import * as React from "react";

export const AboutSection: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <div className="flex w-[1920px] flex-col items-center px-[156px] py-16">
        <div className="flex w-full flex-col gap-10 px-[160px]">{children}</div>
      </div>
    </div>
  );
};
