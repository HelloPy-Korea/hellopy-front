import { useQuery } from "react-query";
import { AboutService } from "@/service/aboutService.ts";

export const useGetManagers = () => {
  return useQuery({
    queryKey: [AboutService.QueryKey.getManagers],
    queryFn: () => AboutService.getManagers(),
  });
};
