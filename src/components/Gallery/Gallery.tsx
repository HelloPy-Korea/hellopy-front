import * as React from "react";
import { GalleryItem } from "./GalleryItem";
import { MD } from "@/types/common.ts";

interface GalleryProps {
  items: MD[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-[31px]">
      {items.map((item) => (
        <GalleryItem key={item.id} {...item} />
      ))}
    </div>
  );
};
