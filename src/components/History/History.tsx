import * as React from "react";
import { HistoryItem } from "./HistoryItem";
import { MD } from "@/types/common.ts";

interface HistoryProps {
  items: MD[];
}

export const History: React.FC<HistoryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-[31px]">
      {items.map((item) => (
        <HistoryItem key={item.id} {...item} />
      ))}
    </div>
  );
};
