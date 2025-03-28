import { useNavigate } from "react-router-dom";
import { FaThumbtack } from "react-icons/fa";

interface Column {
  label: string;
  value: string;
  size:  string;
}

interface AboutTableProps<T extends object> {
  columns: Column[];
  data: T[];
  moveToDetail: (row: T) => void;
}

export const AboutTable = <T extends object>({
  columns,
  data,
  moveToDetail,
}: AboutTableProps<T>) => {

  // 고정된 항목과 일반 항목을 분리
  const pinnedItems = data.filter((item: any) => item.is_pinned);
  const normalItems = data.filter((item: any) => !item.is_pinned);


  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border-black/50">
          <colgroup>
          {columns.map((column, index) => (
              <col style={{width: column.size}} key={column.value + "_col_" + index}/>
            ))}
        </colgroup>
    
        <thead className="bg-white text-lg font-medium text-[#343434]">
          <tr className="border-b border-black/50">
            {columns.map((column, index) => (
              <th
                key={column.value + "_" + index}
                className={"p-[9px] text-left"}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {/* 고정된 항목 먼저 표시 */}
          {pinnedItems.map((row, rowIndex) => (
            <tr
              key={`pinned-${rowIndex}`}
              className="border-b border-black/20 hover:cursor-pointer bg-gray-50"
              onClick={() => moveToDetail(row)}
            >
              {columns.map((column, index) => (
                <td
                  key={index}
                  className="p-[9px] text-left text-lg font-normal text-[#343434]"
                >
                  {column.value === "pin" ? <FaThumbtack className="text-hellopy-purple-200" /> : String(row[column.value as keyof T] ?? "-")}
                </td>
              ))}
            </tr>
          ))}
          {/* 일반 항목 표시 */}
          {normalItems.map((row, rowIndex) => (
            <tr
              key={`normal-${rowIndex}`}
              className="border-b border-black/20 hover:cursor-pointer"
              onClick={() => moveToDetail(row)}
            >
              {columns.map((column, index) => (
                <td
                  key={index}
                  className="p-[9px] text-left text-lg font-normal text-[#343434]"
                >
                  {String(row[column.value as keyof T] ?? "-")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
