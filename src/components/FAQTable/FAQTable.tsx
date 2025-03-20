import React, { useState } from "react";

interface FAQTableProps<T> {
  columns: string[];
  data: T[];
}

export const FAQTable = <T extends object>({
  columns,
  data,
}: FAQTableProps<T>) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border-black/50">
        <tbody className="bg-white">
          {data.map((faq, index) => (
            <React.Fragment key={index}>
              <tr
                className="border-b border-black/20 hover:cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <td className="p-[9px] text-left text-lg font-normal text-[#343434]">
                  Q
                </td>
                {columns.map((column) => (
                  <td
                    key={String(column)}
                    className="p-[9px] text-left text-lg font-normal text-[#343434]"
                  >
                    {column === "created_at"
                      ? new Date(
                          faq[column as keyof T] as string,
                        ).toLocaleString()
                      : String(faq[column as keyof T])}
                  </td>
                ))}
                <td className="p-3">{openFAQ === index ? "▲" : "▼"}</td>
              </tr>
              {"answer" in faq && openFAQ === index && (
                <tr className="bg-gray-50">
                  <td className="p-[9px] text-left text-lg font-normal text-[#343434]">
                    <strong>A:</strong>
                  </td>
                  <td className="p-[9px] text-left text-lg font-normal text-[#343434]"></td>
                  <td
                    colSpan={columns.length + 1}
                    className="border-gray-300 p-3"
                  >
                    {String(faq["answer"])}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
