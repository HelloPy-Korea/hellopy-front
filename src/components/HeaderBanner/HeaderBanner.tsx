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
      <div className="relative flex flex-col justify-center overflow-hidden">
        {/* Breadcrumbs를 부모의 최상단에 고정 */}
        {children && (
          <div className="absolute left-4 top-10 z-10 hidden md:left-[16.56%] md:block">
            {children}
          </div>
        )}

        <img
          src={backgroundImage}
          className="h-auto w-full object-contain"
          alt="Banner Background"
        />

        {/* 모바일에서만 보이는 타이틀 */}
        <div className="absolute left-4 top-4 z-10 md:hidden">
          <h1 className="text-2xl font-semibold leading-tight tracking-[-0.5px] dark:text-white">
            {title}
          </h1>
        </div>

        {/* Title, Description Block */}
        <div className="absolute left-4 top-24 flex max-w-[90%] flex-col gap-3 overflow-hidden md:left-[16.56%] md:top-3/4 md:max-w-[60%] md:-translate-y-3/4 md:gap-[18px]">
          <div className="hidden md:block">
            <div>
              <h1 className="truncate text-[64px] font-semibold leading-normal tracking-[-1.28px] dark:text-white">
                {title}
              </h1>
              {subTitle && (
                <h1 className="truncate text-[64px] font-semibold text-hellopy-purple-200">
                  {subTitle}
                </h1>
              )}
            </div>

            <p
              className="line-clamp-4 overflow-hidden text-sm leading-relaxed dark:text-white md:line-clamp-none md:text-lg md:leading-[27px]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
