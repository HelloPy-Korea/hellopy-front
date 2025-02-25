import React, { ReactNode } from "react";

interface HeaderBannerProps extends React.ComponentProps<"div">{
    backgroundImage: string;
    title: string
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
            {/*px-[156px]*/}
            <div className="relative w-[1920px] flex flex-col justify-center">
                {/* 배경 이미지 */}
                <img
                    src={backgroundImage}
                    className="w-full h-auto object-contain"
                    alt="Banner Background"
                />

                {children && <div className={"absolute left-[16.56%] top-[8%]"}>{children}</div>}

                {/* 제목 및 설명 */}
                <div className="absolute flex flex-col gap-[18px] left-[16.56%] top-3/4 transform -translate-y-3/4">
                    <div>
                        <h1
                            className="text-[64px] font-semibold leading-normal tracking-[-1.28px] dark:text-white font-pretendard">
                            {title}
                        </h1>
                        {subTitle && <h1 className="text-[64px] font-semibold text-[#BC1DF2]">{subTitle}</h1>}
                    </div>
                    <p
                        className={`text-lg leading-[27px] dark:text-white`}
                        dangerouslySetInnerHTML={{__html: description}}
                    />
                </div>
            </div>
        </div>
    );
};
