import { useQuery } from "react-query";
import { BoardService } from "@/service/boardService.ts";

export const useGetNotices = (page: number) => {
  return useQuery({
    queryKey: [BoardService.QueryKey.getNotices, page],
    queryFn: () => BoardService.getNotices(page),
  });
};
