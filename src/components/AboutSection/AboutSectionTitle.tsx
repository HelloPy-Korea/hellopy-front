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
    <div className="inline-flex flex-col gap-5">
      {/* 타이틀 */}
      <div className="flex flex-col gap-0.5">
        <div className="text-xl font-semibold text-hellopy-purple-200">
          {subtitle}
        </div>
        <div className="text-[32px] font-semibold text-black">{title}</div>
      </div>

      {/* 설명 */}
      <div className="flex min-w-14 flex-col gap-1 overflow-auto text-lg font-light text-black">
        {description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};
