import React, { ReactNode } from "react";

interface HeaderBannerProps {
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
                                                          }) => {
    return (
        <div className="relative w-full h-[484px] flex flex-col justify-center px-8 py-16">
            {/* 배경 이미지 */}
            <img
                src={backgroundImage}
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                alt="Banner Background"
            />

            <div className="flex flex-col gap-40 max-w-[1000px] p-20 text-black">

                {children && <div>{children}</div>}

                {/* 제목 및 설명 */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-[38px] font-semibold">{title}</h1>
                    {subTitle && <h1 className="text-[38px] font-semibold text-[#BC1DF2]">{subTitle}</h1>}
                    <p
                        className="text-lg leading-[27px]"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
            </div>
        </div>
    );
};
