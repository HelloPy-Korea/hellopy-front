import * as React from "react";

export const AboutSection: React.FC<React.PropsWithChildren> = ({ children,  ...props }) => {
    return (
        <div {...props}>
            <div className="w-[1600px] px-[156px] flex flex-col items-center py-16">
                <div className="w-full flex flex-col gap-10 px-[160px]">
                    {children}
                </div>
            </div>
        </div>
    )
};
