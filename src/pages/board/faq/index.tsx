import faqBannerImg from "@/assets/img/faq/img_banner.png";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQTable } from "@/components/FAQTable";
import { HeaderBanner } from "@/components/HeaderBanner";
import { Pagination } from "@/components/Pagination";
import { Tab } from "@/components/Tab";
import * as React from "react";

import { useNavigate } from "react-router-dom";
import { useGetFaqs } from "@/quries/useGetFaqs.ts";
import { Container } from "@/components/Container";
import { useState } from "react";

const tableColumns = ["id", "question", "created_at"];

export const Faq: React.FC = () => {
  const nav = useNavigate();
  const [page, setPage] = useState<number>(1);

  const tabMockData = {
    tabs: [
      { label: "공지사항", value: "notice" },
      { label: "FAQ", value: "faq" },
    ],
    activeTab: "faq",
    onTabChange: (value: string) => {
      nav(`/board/${value}`);
    },
  };

  const { data: faqs } = useGetFaqs(page);
  const faqList = faqs?.data ?? [];
  const pagination = faqs?.pagination;

  const onPageChange = (val: number) => {
    setPage(val);
  };

  return (
    <>
      <div className="align-center dark flex flex-col">
        {/* BUG: HeaderBanner 내 Breadcrumb과 title 및 description 간격 이상 */}
        {/* XXX: 폰트 사이즈도 안 맞는 걸로 추측 */}
        <HeaderBanner
          backgroundImage={faqBannerImg}
          title="자주 묻는 질문"
          description={`
            <div class="flex flex-col">
              <p>HelloPY의 최신 소식과 중요한 안내 사항을 확인할 수 있는 공간입니다.</p>
              <p>원활한 서비스 이용을 위해 공지사항을 주기적으로 확인해 주세요!</p>
              <p>궁금한 점이 있다면 먼저 FAQ를 참고하시고, 추가 문의 사항이 있을 경우</p>
              <p>print.hello.py@gmail.com로 연락해주세요!</p>
            </div>`}
        >
          <Breadcrumb
            children={[<a href="#">Home</a>, <a href="#">ABOUT</a>, "Identity"]}
          />
        </HeaderBanner>
      </div>
      <Container className={"min-h-[600px]"}>
        <div className="flex w-full flex-col items-center justify-center px-40 py-10">
          {/* BUG: 탭 정렬 스타일 문제 */}
          <Tab
            tabs={tabMockData.tabs}
            activeTab={tabMockData.activeTab}
            onTabChange={tabMockData.onTabChange}
          />
          {/* REVIEW: "총 N개의 공지가 있습니다" 레이블 어떻게 표시할 건지? */}
          <FAQTable columns={tableColumns} data={faqList} />
          {/* XXX: AboutTable 테이블 높이가 고정되어 있어서 Pagination 위치가 부자연스러움 */}
          {faqList && faqList.length > 0 && (
            <Pagination
              totalCount={pagination?.count ?? 0}
              currentPage={page}
              onPageChange={onPageChange}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default Faq;
