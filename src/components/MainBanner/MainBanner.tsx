import React, { ReactNode } from "react";

interface MainBannerProps {
  backgroundImage: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export const MainBanner: React.FC<MainBannerProps> = ({
  backgroundImage,
  title,
  description,
}) => {
  return (
    <div className="relative flex flex-col justify-center">
      {/* 배경 이미지 */}
      <img
        src={backgroundImage}
        className="h-auto w-full object-contain"
        alt="Banner Background"
      />
      <div
        className={
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        }
      >
        <div className="flex flex-col items-center justify-start gap-[26px]">
          <h1 className="text-center text-[90px] font-semibold text-white">
            {title}
          </h1>
          <p
            className="text-center text-xl text-white"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
