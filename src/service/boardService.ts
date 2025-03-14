import instance from "@/hooks/useAxios.ts";

const NOTICE_API_URL = "/notice";
const FAQ_API_URL = "/faqs";
export const BoardService = {
  QueryKey: {
    getNotices: "getNotices",
    getFaqs: "getFaqs",
    getNotice: "getNotice",
  },

  getNotices: async (page: number) => {
    const { data } = await instance.get(`${NOTICE_API_URL}/?page=${page}`);

    return data;
  },

  getFaqs: async (page: number) => {
    const { data } = await instance.get(`${FAQ_API_URL}/?page=${page}`);

    return data;
  },

  getNotice: async (id: string) => {
    const { data } = await instance.get(`${NOTICE_API_URL}/${id}/`);

    return data;
  },
};
