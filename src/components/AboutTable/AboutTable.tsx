interface Column {
  label: string;
  value: string;
}

interface AboutTableProps<T> {
  columns: Column[];
  data: T[];
}

export const AboutTable = <T,>({ columns, data }: AboutTableProps<T>) => {
    return (
        <div className="w-[1251px] h-[610px] overflow-x-auto">
            <table className="w-full border-collapse border border-black/50">
                <thead className="bg-white text-[#343434] text-lg font-medium">
                <tr className="border-b border-black/50">
                    {columns.map((column, index) => (
                        <th
                            key={column.value+"_"+index}
                            className={"p-[9px] text-left"}
                        >
                            {column.label}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-white">
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-black/20">
                        {columns.map((column, index) => (
                            <td key={index} className="p-[9px] text-left text-[#343434] text-lg font-normal">
                                {String(row[column.value as keyof T] ?? "-")}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};
