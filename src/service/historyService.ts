import instance from "@/hooks/useAxios.ts";

export const HistoryService = {
  QueryKey: {
    getHistory: "getHistory",
    getHistoryItem: "getHistoryItem",
  },


  getHistory: async (page: number) => {
    const { data } = await instance.get(`/activity-history/?page_size=10&page=${page}`);

    return data;
  },
  getHistoryItem: async (id: number) => {
    const { data } = await instance.get(`/activity-history${id}`);

    return data;
  },
};
