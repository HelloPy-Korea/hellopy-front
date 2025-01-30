import * as React from "react";
import type { GalleryItemProps } from "./GalleryItem";
import { GalleryItem } from "./GalleryItem";

interface GalleryProps {
  items: GalleryItemProps[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-[31px]">
      {items.map((item) => (
        // REVIEW: 서버에서 반환되는 데이터면 title 대신 사용할 수 있는 pk가 있을 수도?
        <GalleryItem key={item.title} {...item} />
      ))}
    </div>
  );
};
