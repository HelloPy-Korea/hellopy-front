import React, { ReactNode } from "react";

interface MainBannerProps {
    backgroundImage: string;
    title: string;
    description: string;
    children?: ReactNode;
}

export const MainBanner: React.FC<MainBannerProps> = ({ backgroundImage, title, description }) => {
    return (
        <div className="relative w-[1920px] flex flex-col justify-center">
            {/* 배경 이미지 */}
            <img
                src={backgroundImage}
                className="w-full h-auto object-contain"
                alt="Banner Background"
            />
            <div className={"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                <div className="flex flex-col justify-start items-center gap-[26px]">
                    <h1 className="text-center text-white text-[90px] font-semibold ">{title}</h1>
                    <p className="text-center text-white text-xl" dangerouslySetInnerHTML={{__html: description}}/>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;