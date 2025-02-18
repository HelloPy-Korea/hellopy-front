import React, { ReactNode } from "react";

interface MainBannerProps {
    backgroundImage: string;
    title: string;
    description: string;
    children?: ReactNode;
}

export const MainBanner: React.FC<MainBannerProps> = ({ backgroundImage, title, description }) => {
    return (
        <div
            className="w-full h-[794px] flex align-center justify-center items-center text-center relative bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex flex-col justify-start items-center gap-[26px] inline-flex">
                <h1 className="text-center text-white text-[90px] font-semibold ">{title}</h1>
                <p className="text-center text-white text-xl" dangerouslySetInnerHTML={{ __html: description }}/>
            </div>
        </div>
    );
};

export default MainBanner;