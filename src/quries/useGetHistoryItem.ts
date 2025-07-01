import { useQuery } from "react-query";
import { HistoryService } from "@/service/historyService";

export const useGetHistoryItem = (id?: number) => {
  return useQuery({
    enabled: !!id,
    queryKey: [HistoryService.QueryKey.getHistory, id],
    queryFn: () => HistoryService.getHistory(id!),
  });
};
