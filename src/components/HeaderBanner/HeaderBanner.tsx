import React, { ReactNode } from "react";

interface HeaderBannerProps {
    backgroundImage: string;
    title: string;
    description: string;
    children?: ReactNode;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({ backgroundImage, title, description, children}) => {
    return (
        <div
            className="w-full h-[794px] bg-cover bg-center bg-no-repeat relative"
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="absolute inset-0 bg-black/30"></div>

            {children && <div className="absolute top-[64px] left-[318px] z-10">{children}</div>}

            <div className="absolute left-[318px] top-[277px] flex flex-col gap-4 text-white z-10">
                <h1 className="text-[38px] font-semibold">{title}</h1>
                <p className="text-lg leading-[27px]" dangerouslySetInnerHTML={{__html: description}}/>
            </div>
        </div>
    );
};