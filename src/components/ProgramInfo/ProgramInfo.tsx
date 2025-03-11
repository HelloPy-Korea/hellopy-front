interface ProgramInfoProps {
  backgroundImage: string;
  programDetails: {
    title: string;
    description: string;
    buttonText?: string;
    redirectUrl?: string;
  }[];
  textPosition?: "left" | "right"; // 텍스트 위치 조정 (기본: 'left')
}

export const ProgramInfo = ({
  backgroundImage,
  programDetails,
  textPosition = "right",
}: ProgramInfoProps) => {
  return (
    <div className="relative flex h-[796px] w-full items-center justify-center bg-[#FDFAFE] px-[10%] py-[80px]">
      <div
        className={`relative flex w-full max-w-[1440px] items-center justify-between gap-10 ${textPosition === "left" ? "" : "flex-row-reverse"}`}
      >
        {/* 이미지 영역 */}
        <div className="flex w-[50%] items-center justify-center">
          <img
            src={backgroundImage}
            alt="Program"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        {/* 텍스트 영역 */}
        <div className="flex w-[50%] flex-col gap-6">
          {programDetails?.map((program, index) => (
            <div className="flex flex-col gap-3" key={`program_${index}`}>
              <div className="text-[22px] font-semibold text-[#2c003c]">
                {program.title}
              </div>
              <div
                className="text-lg font-light leading-[27px] text-[#2c003c]"
                dangerouslySetInnerHTML={{ __html: program.description }}
              />
              {/* 버튼 */}
              {program.buttonText && (
                <a
                  href={program.redirectUrl}
                  className="inline-block w-fit border-b border-[#2c003c] text-base font-medium leading-tight"
                >
                  {program.buttonText ?? ""}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
