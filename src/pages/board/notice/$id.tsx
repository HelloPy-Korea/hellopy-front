import * as React from "react";

export const NoticeDetail: React.FC = () => {
    return (
        <div className="mx-auto my-24 w-[1600px] py-[108px] px-[336px]">
            <p className="px-4 py-2 text-lg font-medium text-[#2d003d]">공지사항</p>
            <section className="mb-8 border-y border-black px-4 py-8">
                <article>
                    <header className="pb-12">
                        <h1 className="text-4xl font-semibold text-[#2d003d]">
                            제10회 HelloPY 컨퍼런스 공지
                        </h1>
                        <p className="text-base font-light text-[#2d003d]">
                            2024. 10. 19.
                        </p>
                        {/* REVIEW: 해시태그 컴포넌트는 없나? */}
                        <div>#컨퍼런스</div>
                    </header>
                    <section>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </article>
            </section>
            <div className="flex justify-end">
                <button className="ml-auto inline-flex rounded-xl bg-[#302633] px-8 py-3 text-white">
                    목록
                </button>
            </div>
        </div>
    );
};

export default NoticeDetail;
