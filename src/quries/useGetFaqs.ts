import { useQuery } from "react-query";
import { BoardService } from "@/service/boardService.ts";

export const useGetFaqs = (page: number) => {
  return useQuery({
    queryKey: [BoardService.QueryKey.getFaqs, page],
    queryFn: () => BoardService.getFaqs(page),
  });
};
