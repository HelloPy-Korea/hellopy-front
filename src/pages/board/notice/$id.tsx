import * as React from "react";
import { Container } from "@/components/Container";
import { useGetNotice } from "@/quries/useGetNotice.ts";
import { useNavigate, useParams } from "react-router-dom";

export const NoticeDetail: React.FC = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data } = useGetNotice(id);

  const goToList = () => {
    nav("/board/notice");
  };

  const notice = data?.data ?? undefined;

  return (
    notice && (
      <Container className={"px-5 py-10 md:px-40"}>
        <p className="px-4 py-2 text-lg font-medium text-[#2d003d]">공지사항</p>
        <section className="mb-8 border-y border-black px-4 py-8">
          <article>
            <header className="pb-12">
              <h1 className="text-4xl font-semibold text-[#2d003d]">
                {notice.title}
              </h1>
              <p className="py-4 text-base font-light text-[#2d003d]">
                {new Date(notice.created_at).toLocaleDateString()}
              </p>
              {/* REVIEW: 해시태그 컴포넌트는 없나?  todo: hashtag*/}
              {/*<div>#컨퍼런스</div>*/}
            </header>
            <section>
              <p dangerouslySetInnerHTML={{ __html: notice.content }} />
            </section>
          </article>
        </section>
        <div className="flex justify-end">
          <button
            className="ml-auto inline-flex rounded-xl bg-[#302633] px-8 py-3 text-white"
            onClick={goToList}
          >
            목록
          </button>
        </div>
      </Container>
    )
  );
};

export default NoticeDetail;
