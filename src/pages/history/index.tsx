import BgImg from "@/assets/img/history/banner_history.png";

import { Breadcrumb } from "@/components/Breadcrumb";
import { AboutSection, AboutSectionTitle } from "@/components/AboutSection";

import { SelectBox } from "@/components/SelectBox";
import { useEffect, useState } from "react";
import { History, SelectValue } from "@/types/common.ts";
import { useGetHistory } from "@/quries/useGetHistory";
import { Pagination } from "@/components/Pagination";
import Timeline from "@/components/Timeline/Timeline";

const selectedOptions = [
  { label: "2024년", value: "2024" },
  { label: "2025년", value: "2025" },
];

const ActivityHistory = () => {
  const [yearList, setYearList] = useState<SelectValue[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [page, setPage] = useState<number>(1);

  const { data } = useGetHistory(page);

  const historyData: History[] = data?.data ?? [];
  const pagination = data?.pagination;

  useEffect(() => {
    setYearList(
      selectedOptions.map(
        (option) =>
          ({
            ...option,
            checked: option.value === String(selectedYear),
          }) as SelectValue,
      ),
    );
  }, []);

  const onPageChange = (val: number) => {
    setPage(val);
  };

  const onSelectYear = (value: string) => {
    setSelectedYear(Number(value));
    setYearList(
      selectedOptions.map(
        (option) =>
          ({ ...option, checked: option.value === value }) as SelectValue,
      ),
    );
  };

  return (
    <div className="align-center flex flex-col">

      <div className={"bg-[#FCF7FF]"}>
        <AboutSection>
          <Timeline />
        </AboutSection>
      </div>

      <AboutSection>
        <AboutSectionTitle
          title={"HelloPY History"}
          subtitle={"HelloPY 활동 갤러리"}
          description={[]}
        />
        <SelectBox options={yearList} onSelect={onSelectYear} />
        <div className="bg-purple-7 relative flex w-full flex-col items-start justify-start gap-[50px]">
          <div className="relative flex w-full flex-wrap items-start justify-start gap-[30px]">
            {historyData
              .filter((item) => item.title?.includes(String(selectedYear)))
              .map((item, index) => (
                <div key={index} className="relative flex flex-col gap-5">
                  <img
                    className="w-52 object-cover"
                    src={item.thumbnail}
                    alt={`history-${item.id}`}
                  />
                  <div className="flex w-full flex-col items-start justify-start gap-0">
                    <div className="text-black-1 w-full text-left text-xl font-semibold leading-normal">
                      {item.title}
                    </div>
                    <div
                      className="text-black-1 line-clamp-2 w-full overflow-hidden text-ellipsis text-left text-base font-light leading-normal"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              ))}

            {historyData && historyData.length > 0 && pagination !== null && (
              <Pagination
                totalCount={pagination?.count ?? 0}
                currentPage={page}
                onPageChange={onPageChange}
              />
            )}
          </div>
        </div>
      </AboutSection>
    </div>
  );
};

export default ActivityHistory;
