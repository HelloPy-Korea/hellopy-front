import {useQuery} from "react-query";
import {BoardService} from "@/service/boardService.ts";

export const useGetNotices = () => {
  return useQuery({
    queryKey: [BoardService.QueryKey.getNotices],
    queryFn: () => BoardService.getNotices(),
  });
};