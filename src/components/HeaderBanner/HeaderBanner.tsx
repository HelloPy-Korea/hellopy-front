import React, { ReactNode } from "react";

interface HeaderBannerProps extends React.ComponentProps<"div"> {
  backgroundImage: string;
  title: string;
  subTitle?: string;
  description: string;
  children?: ReactNode;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  backgroundImage,
  title,
  subTitle,
  description,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <div className="relative flex flex-col justify-center">
        {/* 배경 이미지 */}
        <img
          src={backgroundImage}
          className="h-auto w-full object-contain"
          alt="Banner Background"
        />

        {children && (
          <div className={"absolute left-[16.56%] top-[8%]"}>{children}</div>
        )}

        {/* 제목 및 설명 */}
        <div className="absolute left-[16.56%] top-3/4 flex -translate-y-3/4 transform flex-col gap-[18px]">
          <div>
            <h1 className="text-2xl font-semibold leading-normal tracking-[-1.28px] dark:text-white md:text-[64px]">
              {title}
            </h1>
            {subTitle && (
              <h1 className="text-2xl font-semibold text-hellopy-purple-200 md:text-[64px]">
                {subTitle}
              </h1>
            )}
          </div>
          <p
            className={`text-base leading-[27px] dark:text-white md:text-lg`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};
