
interface AboutSectionTitleProps {
    title: string;
    subtitle: string;
    description: string[];
}

export const AboutSectionTitle = ({ title, subtitle, description }: AboutSectionTitleProps) => {
    return (
        <div className="w-full flex flex-col gap-5">
            {/* 타이틀 */}
            <div className="flex flex-col gap-0.5">
                <div className="text-[#bc1df2] text-xl font-semibold leading-[30px]">{subtitle}</div>
                <div className="text-[#2c003c] text-[32px] font-semibold">{title}</div>
            </div>

            {/* 설명 */}
            <div className="flex flex-col gap-4 text-[#2c003c] text-lg font-light leading-[27px]">
                {description.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </div>
    );
};
