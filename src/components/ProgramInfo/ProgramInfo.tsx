
interface ProgramInfoProps {
    backgroundImage: string;
    programDetails: {
        title: string;
        description: string;
        buttonText?: string;
        redirectUrl?: string;
    }[];
    textPosition?: 'left' | 'right'; // 텍스트 위치 조정 (기본: 'left')
}

export const ProgramInfo = ({
                                backgroundImage,
                                programDetails,
                                textPosition = 'right',
                            }: ProgramInfoProps) => {
    return (
        <div className="relative w-full h-[796px] bg-[#FDFAFE] flex items-center justify-center px-[10%] py-[80px]">
            <div className={`relative w-full max-w-[1440px] flex items-center justify-between gap-10 ${textPosition === 'left' ? '' : 'flex-row-reverse'}`}>

                {/* 이미지 영역 */}
                <div className="w-[50%] flex items-center justify-center">
                    <img src={backgroundImage} alt="Program" className="w-full h-auto object-cover rounded-lg" />
                </div>

                {/* 텍스트 영역 */}
                <div className="w-[50%] flex flex-col gap-6">
                    {programDetails?.map((program, index) => (
                        <div className="flex flex-col gap-3" key={`program_${index}`}>
                            <div className="text-black text-[22px] font-semibold">{program.title}</div>
                            <div className="text-black text-lg font-light leading-[27px]" dangerouslySetInnerHTML={{ __html: program.description }} />
                            {/* 버튼 */}
                            {program.buttonText && (
                                <a href={program.redirectUrl}
                                   className="inline-block w-fit border-b border-black text-base font-medium leading-tight">
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
