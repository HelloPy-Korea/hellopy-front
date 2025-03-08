import {useQuery} from "react-query";
import {AboutService} from "@/service/aboutService.ts";

export const useGetMds = () => {
  return useQuery({
    queryKey: [AboutService.QueryKey.getMerchandises],
    queryFn: () => AboutService.getMerchandises(),
  });
};