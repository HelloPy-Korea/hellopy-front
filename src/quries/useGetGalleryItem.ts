import { useQuery } from "react-query";
import { GalleryService } from "@/service/galleryService";

export const useGetGalleryItem = (id?: number) => {
  return useQuery({
    enabled: !!id,
    queryKey: [GalleryService.QueryKey.getGallery, id],
    queryFn: () => GalleryService.getGallery(id!),
  });
};
