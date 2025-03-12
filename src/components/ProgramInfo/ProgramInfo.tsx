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
    <div className="relative flex h-auto min-h-[796px] w-full items-center justify-center bg-[#FDFAFE] px-16 py-[60px] md:py-[80px]">
      <div
        className={`relative flex w-full max-w-[1440px] flex-col items-center justify-between gap-10 md:flex-row ${textPosition === "left" ? "" : "md:flex-row-reverse"}`}
      >
        {/* 이미지 영역 */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <img
            src={backgroundImage}
            alt="Program"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        {/* 텍스트 영역 */}
        <div className="mt-8 flex w-full flex-col gap-6 md:mt-0 md:w-1/2">
          {programDetails?.map((program, index) => (
            <div className="flex flex-col gap-3" key={`program_${index}`}>
              <div className="text-[22px] font-semibold text-black">
                {program.title}
              </div>
              <div
                className="text-lg font-light leading-[27px] text-black"
                dangerouslySetInnerHTML={{ __html: program.description }}
              />
              {/* 버튼 */}
              {program.buttonText && (
                <a
                  href={program.redirectUrl}
                  className="inline-block w-fit border-b border-black text-base font-medium leading-tight"
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
