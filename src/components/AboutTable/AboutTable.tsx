import { useNavigate } from "react-router-dom";

interface Column {
  label: string;
  value: string;
}

interface AboutTableProps<T> {
  columns: Column[];
  data: T[];
}

export const AboutTable = <T extends { id: number }>({
  columns,
  data,
}: AboutTableProps<T>) => {
  const nav = useNavigate();
  const moveToDetail = (row: T) => {
    nav(`/board/notice/${row.id}`);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border-black/50">
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
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-black/20"
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
