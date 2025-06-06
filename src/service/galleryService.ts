import instance from "@/hooks/useAxios.ts";

export const GalleryService = {
  QueryKey: {
    getGallery: "getGallery",
    getGalleryItem: "getGalleryItem",
  },


  getGallery: async (page: number) => {
    const { data } = await instance.get(`/activity-gallery/?page_size=10&page=${page}`);

    return data;
  },
  getGalleryItem: async (id: number) => {
    const { data } = await instance.get(`/activity-gallery${id}`);

    return data;
  },
};
