import { useQuery } from "react-query";
import { GalleryService } from "@/service/galleryService";

export const useGetGallery = (page: number) => {
  return useQuery({
    queryKey: [GalleryService.QueryKey.getGallery, page],
    queryFn: () => GalleryService.getGallery(page),
  });
};
