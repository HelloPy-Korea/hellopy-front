import { AboutTable } from "@/components/AboutTable";
import { Pagination } from "@/components/Pagination";
import { Tab } from "@/components/Tab";
import * as React from "react";

import { useNavigate } from "react-router-dom";
import { useGetNotices } from "@/quries/useGetNotices.ts";
import { Container } from "@/components/Container";
import { useState } from "react";

const tableColumns = [
  { label: "번호", value: "id", size:"10%"},
  /* { label: "태그", value: "tag" },*/
  { label: "제목", value: "title", size:"80%"},
  { label: "고정", value: "pin", size:"10%"},
  /*{ label: "작성일", value: "date" },*/
];

export const Notice: React.FC = () => {
  const nav = useNavigate();
  const tabMockData = {
    tabs: [
      { label: "공지사항", value: "notice" },
      { label: "FAQ", value: "faq" },
    ],
    activeTab: "notice",
    onTabChange: (value: string) => {
      nav(`/board/${value}`);
    },
  };

  const [page, setPage] = useState<number>(1);

  const { data: notices } = useGetNotices(page);

  const noticeList = notices?.data ?? [];
  const pagination = notices?.pagination;

  const onPageChange = (val: number) => {
    setPage(val);
  };

  const moveToDetail = (row: any) => {
    nav(`/board/notice/${row.id}`);
  };

  return (
    <>
      <Container className={"min-h-[600px]"}>
        <div className="flex w-full flex-col items-center justify-center px-5 py-10 md:px-40">
          {/* REVIEW: "총 N개의 공지가 있습니다" 레이블 어떻게 표시할 건지? */}
          <AboutTable columns={tableColumns} data={noticeList} moveToDetail={moveToDetail} />
          {/* XXX: AboutTable 테이블 높이가 고정되어 있어서 Pagination 위치가 부자연스러움 */}
          {noticeList && noticeList.length > 0 && (
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

export default Notice;
