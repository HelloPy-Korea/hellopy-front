import { useQuery } from "react-query";
import { HistoryService } from "@/service/historyService";

export const useGetHistory = (page: number) => {
  return useQuery({
    queryKey: [HistoryService.QueryKey.getHistory, page],
    queryFn: () => HistoryService.getHistory(page),
  });
};
