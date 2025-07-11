import * as React from "react";
import { MD } from "@/types/common.ts";

export const HistoryItem: React.FC<MD> = ({ id, name, image, description }) => {
  return (
    <div className="flex flex-col">
      <img
        className="h-[350px] rounded-xl object-cover"
        src={image}
        alt={`hellopy-md-${id}`}
      />
      <div className="mt-2 flex flex-col">
        <h3 className="truncate text-[20px] font-semibold">{name}</h3>
        <p className="truncate text-[16px] font-light">{description}</p>
      </div>
    </div>
  );
};
