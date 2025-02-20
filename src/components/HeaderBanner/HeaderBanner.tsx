import React, { ReactNode } from "react";

interface HeaderBannerProps {
    backgroundImage: string;
    title: string;
    subTitle?: string;
    description: string;
    children?: ReactNode;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({ backgroundImage, title, subTitle, description, children}) => {
    return (
        <div
            className="w-full h-[794px] bg-cover bg-center bg-no-repeat relative"
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="absolute inset-0"></div>

            {children && <div className="absolute top-[64px] left-[318px] z-10">{children}</div>}

            <div className="absolute left-[318px] top-[277px] flex flex-col #2D003D z-10">
                <h1 className="text-[38px] font-semibold">{title}</h1>
                <h1 className="text-[38px] font-semibold text-[#BC1DF2]">{subTitle}</h1>
                <p className="text-lg leading-[27px] mt-[30px]" dangerouslySetInnerHTML={{__html: description}}/>
            </div>
        </div>
    );
};