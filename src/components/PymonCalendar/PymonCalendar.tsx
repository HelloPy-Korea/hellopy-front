import * as React from "react";

interface PymonCalendarProps {
  calendar: {
    year: number;
    month: number;
    link: string;
    description: string;
  }[];
  selectedYear: number;
}

export const PymonCalendar: React.FC<PymonCalendarProps> = ({
  calendar,
  selectedYear,
}) => {
  return (
    <div className="bg-purple-7 relative flex w-full flex-col items-start justify-start gap-[70px]">
      <div className="relative flex w-full flex-wrap items-start justify-start gap-[50px]">
        {calendar
          .filter((item) => item.year === selectedYear)
          .map((item, index) => (
            <div key={index} className="relative flex w-52 flex-col gap-5">
              <div className="relative h-[453px] w-52">
                <img
                  className="h-[453px] w-52 object-cover"
                  src={item.link}
                  alt={`${item.year}-${item.month}`}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-0">
                <div className="text-black-1 w-full text-left text-xl font-semibold leading-normal">
                  {`${item.year}년 ${item.month}월`}
                </div>
                <div
                  className="text-black-1 w-full text-left text-base font-light leading-normal"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
