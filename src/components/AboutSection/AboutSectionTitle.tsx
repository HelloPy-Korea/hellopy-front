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
                <div className=" text-hellopy-purple-200 text-xl font-semibold leading-[30px]">{subtitle}</div>
                <div className="text-black text-[32px] font-semibold">{title}</div>
            </div>

            {/* 설명 */}
            <div className="flex flex-col gap-1 text-black text-lg font-light leading-[27px]">
                {description.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
    </div>
  );
};
