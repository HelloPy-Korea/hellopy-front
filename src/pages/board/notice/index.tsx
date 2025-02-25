import faqBannerImg from "@/assets/img/faq/img_banner.png";
import { AboutTable } from "@/components/AboutTable";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HeaderBanner } from "@/components/HeaderBanner";
import { Pagination } from "@/components/Pagination";
import { Tab } from "@/components/Tab";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const aboutTableMockData = {
    columns: [
        { label: "번호", value: "no" },
        { label: "태그", value: "tag" },
        { label: "제목", value: "title" },
        { label: "작성일", value: "date" },
    ],
    data: [
        {
            no: 10,
            tag: "활동",
            title: "제10회 HelloPY 컨퍼런스 공지",
            date: "2024. 10. 19.",
        },
        {
            no: 9,
            tag: "활동",
            title: "제9회 HelloPY 컨퍼런스 공지",
            date: "2024. 09. 19.",
        },
        {
            no: 8,
            tag: "활동",
            title: "제8회 HelloPY 컨퍼런스 공지",
            date: "2024. 08. 19.",
        },
    ],
};

const paginationMockData = {
    totalPages: 10,
    currentPage: 1,
    onPageChange: (value: number) => console.log("선택된 페이지:", value),
};

export const Notice: React.FC = () => {
    const nav = useNavigate();

    const tabMockData = {
        tabs: [
            { label: "공지사항", value: "notice" },
            { label: "FAQ", value: "faq" },
        ],
        activeTab: "notice",
        onTabChange: (value: string) => {
            nav(`/board/${value}`)
        },
    };
    return (
        <>
            <div className="dark flex flex-col align-center">
                {/* BUG: HeaderBanner 내 Breadcrumb과 title 및 description 간격 이상 */}
                {/* XXX: 폰트 사이즈도 안 맞는 걸로 추측 */}
                <HeaderBanner
                    backgroundImage={faqBannerImg}
                    title={"자주 묻는 질문"}
                    description={`
            <div class="flex flex-col">
              <p>HelloPY의 최신 소식과 중요한 안내 사항을 확인할 수 있는 공간입니다.</p>
              <p>원활한 서비스 이용을 위해 공지사항을 주기적으로 확인해 주세요!</p>
              <p>궁금한 점이 있다면 먼저 FAQ를 참고하시고, 추가 문의 사항이 있을 경우</p>
              <p>print.hello.py@gmail.com로 연락해주세요!</p>
            </div>`}
                >
                    <Breadcrumb
                        children={[<a href="#">Home</a>, <a href="#">ABOUT</a>, "Identity"]}/>
                </HeaderBanner>
            </div>
            <div className="flex w-[1600px] flex-col items-center justify-center py-32">
                <Tab
                    tabs={tabMockData.tabs}
                    activeTab={tabMockData.activeTab}
                    onTabChange={tabMockData.onTabChange}/>
                {/* REVIEW: "총 N개의 공지가 있습니다" 레이블 어떻게 표시할 건지? */}
                <AboutTable
                    columns={aboutTableMockData.columns}
                    data={aboutTableMockData.data}/>
                {/* XXX: AboutTable 테이블 높이가 고정되어 있어서 Pagination 위치가 부자연스러움 */}
                <Pagination
                    totalPages={paginationMockData.totalPages}
                    currentPage={paginationMockData.currentPage}
                    onPageChange={paginationMockData.onPageChange}/>
            </div>
        </>
    );
};

export default Notice;
