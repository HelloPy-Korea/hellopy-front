import * as React from "react";

export interface GalleryItemProps {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col">
      <img
        className="h-[350px] rounded-xl object-cover"
        src={image.url}
        alt={image.alt}
      />
      <div className="flex flex-col mt-2">
        <h3 className="text-[20px] font-semibold">{title}</h3>
        <p className="text-[16px] font-light">{description}</p>
      </div>
    </div>
  );
};
