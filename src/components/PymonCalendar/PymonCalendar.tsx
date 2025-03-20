import { useGetCalendars } from "@/quries/useGetCalendars";
import { Calendar } from "@/types/common";
import * as React from "react";

interface PymonCalendarProps {
  selectedYear: number;
}

const formatDate = (dateString: string) => {
  const [year, month] = dateString.split('-');
  return `${year}년 ${parseInt(month)}월`;
};

export const PymonCalendar: React.FC<PymonCalendarProps> = ({
  selectedYear,
}) => {
  const { data } = useGetCalendars();
  const calendar: Calendar[] = data?.data ?? [];

  return (
    <div className="bg-purple-7 relative flex w-full flex-col items-start justify-start gap-[50px]">
      <div className="relative flex w-full flex-wrap items-start justify-start gap-[30px]">
        {calendar
          .filter((item) => item.year_month?.includes(String(selectedYear)))
          .map((item, index) => (
            <div key={index} className="relative flex flex-col gap-5">
              <img
                className="w-52 object-cover"
                src={item.calendar_photo}
                alt={`${item.id}-${item.year_month}`}
              />
              <div className="flex w-full flex-col items-start justify-start gap-0">
                <div className="text-black-1 w-full text-left text-xl font-semibold leading-normal">
                  {formatDate(item.year_month)}
                </div>
                <div
                  className="text-black-1 w-full text-left text-base font-light leading-normal line-clamp-2 overflow-hidden text-ellipsis"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
