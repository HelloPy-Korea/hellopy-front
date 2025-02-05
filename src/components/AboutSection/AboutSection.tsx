import * as React from "react";

export const AboutSection: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="w-full flex flex-col items-center px-8 py-16">
            <div className="w-[1284px] flex flex-col gap-10">
                {children}
            </div>
        </div>
    )
};
