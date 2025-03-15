import { useQuery } from "react-query";
import { BoardService } from "@/service/boardService.ts";

export const useGetNotice = (id?: string) => {
  return useQuery({
    queryKey: [BoardService.QueryKey.getNotice],
    queryFn: () => BoardService.getNotice(id!),
    enabled: !!id,
  });
};
