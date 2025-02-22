import * as React from "react";

interface PymonCalendarProps {
    calendar: {
        year: number;
        month: number;
        link: string;
        description: string;
    }[];
    selectedYear: number
}

export const PymonCalendar: React.FC<PymonCalendarProps> = ({ calendar, selectedYear }) => {
    return (
        <div className="bg-purple-7 flex flex-col gap-[70px] items-start justify-start relative w-full">
            <div className="flex flex-wrap gap-[50px] items-start justify-start w-full relative">
                {calendar.filter(item => item.year===selectedYear).map((item, index) => (
                    <div key={index} className="flex flex-col gap-5 w-52 relative">
                        <div className="w-52 h-[453px] relative">
                            <img
                                className="w-52 h-[453px] object-cover"
                                src={item.link}
                                alt={`${item.year}-${item.month}`}
                            />
                        </div>
                        <div className="flex flex-col gap-0 items-start justify-start w-full">
                            <div className="text-black-1 text-left font-semibold text-xl leading-normal w-full">
                                {`${item.year}년 ${item.month}월`}
                            </div>
                            <div
                                className="text-black-1 text-left font-light text-base leading-normal w-full"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};