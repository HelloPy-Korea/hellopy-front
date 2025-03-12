interface AboutSectionTitleProps {
  title: string;
  subtitle: string;
  description: string[];
}

export const AboutSectionTitle = ({
  title,
  subtitle,
  description,
}: AboutSectionTitleProps) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* 타이틀 */}
      <div className="flex flex-col gap-0.5">
        <div className="text-xl font-semibold leading-[30px] text-hellopy-purple-200">
          {subtitle}
        </div>
        <div className="text-[32px] font-semibold text-black">{title}</div>
      </div>

      {/* 설명 */}
      <div className="flex flex-col gap-1 text-lg font-light leading-[27px] text-black">
        {description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};
