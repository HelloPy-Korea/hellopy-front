import BgImg from "@/assets/img/history/banner_history.png";

import { HeaderBanner } from "@/components/HeaderBanner";
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
      <HeaderBanner
        backgroundImage={BgImg}
        title={"Community Log"}
        description={`HelloPY는 주니어 개발자들의 성장을 돕고 파이썬 교육 확산을 위한 커뮤니티입니다. <br/>온오프라인에서 학습하고 파이썬 기술과 트렌드를 공유하며, 다양한 외부 협업도 진행합니다. 헬로파이의 다양한 활동을 확인해보세요!`}
      >
        <Breadcrumb
          children={[<a href="/">Home</a>, <a href="/history">HISTORY</a>]}
        />
      </HeaderBanner>

      <AboutSection>
        <div className="mb-[106px] mt-[180px] flex flex-col items-center justify-start gap-2">
          <div className="self-stretch text-center text-[20px] font-bold text-hellopy-purple-200">
            HelloPY COC(Code of Conduct)
          </div>
          <div className="self-stretch text-center text-[28px] font-bold text-black">
            HelloPY 활동 가이드
          </div>
          <div className="self-stretch text-center text-[15px] text-black">
            신규 멤버는 자기소개, 기사 공유, 모각작 참여 등 기본 활동을 수행해야
            합니다. <br />각 게시판에 정보를 공유하고 질문하거나 성과를 기록할
            수 있으며, 활동량에 따라 등급이 상승합니다. <br />
            등급은 레몬파이부터 블루베리파이까지 나뉘며 오프라인 모임 또는
            컨퍼런스 발표를 통해 추가 승급이 가능합니다.
          </div>
        </div>
      </AboutSection>

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
