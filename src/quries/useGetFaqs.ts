import {useQuery} from "react-query";
import {BoardService} from "@/service/boardService.ts";

export const useGetFaqs = () => {
  return useQuery({
    queryKey: [BoardService.QueryKey.getFaqs],
    queryFn: () => BoardService.getFaqs(),
  });
};