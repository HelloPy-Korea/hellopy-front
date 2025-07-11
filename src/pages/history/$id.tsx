import * as React from "react";
import { Container } from "@/components/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useGetHistoryItem } from "@/quries/useGetHistoryItem";

export const NoticeDetail: React.FC = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data } = useGetHistoryItem(id ? Number(id) : undefined);

  const goToList = () => {
    nav("/history");
  };

  const historyItem = data?.data ?? undefined;

  return (
    historyItem && (
      <Container className={"px-5 py-10 md:px-40"}>
        <p className="px-4 py-2 text-lg font-medium text-[#2d003d]">공지사항</p>
        <section className="mb-8 border-y border-black px-4 py-8">
          <article>
            <header className="pb-12">
              <h1 className="text-4xl font-semibold text-[#2d003d]">
                {historyItem.title}
              </h1>
              {/* REVIEW: 해시태그 컴포넌트는 없나?  todo: hashtag*/}
              {historyItem?.tags?.map((tag: { id: number; name: string }) => (
                <div>{tag.name}</div>
              ))}
            </header>
            <section>
              <p dangerouslySetInnerHTML={{ __html: historyItem.content }} />
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
