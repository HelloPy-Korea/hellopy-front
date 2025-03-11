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
        <div className="w-[1251px] h-[610px] overflow-x-auto">
            <table className="w-full border-collapse border border-black/50">
                <tbody className="bg-white">
                {data.map((faq, index) => (
                    <React.Fragment key={index}>
                        <tr
                            className="border-b border-black/20"
                            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        >
                            <td className="p-[9px] text-left text-[#343434] text-lg font-normal">
                                Q
                            </td>
                            {columns.map((column) => (
                                <td key={String(column)}
                                    className="p-[9px] text-left text-[#343434] text-lg font-normal">
                                    {column === "created_at" ? new Date(faq[column as keyof T]).toLocaleString() : String(faq[column as keyof T])}
                                </td>
                            ))}
                            <td className="p-3">{openFAQ === index ? "▲" : "▼"}</td>
                        </tr>

                        {"answer" in faq && openFAQ === index && (
                            <tr className="bg-gray-50">
                                <td className="p-[9px] text-left text-[#343434] text-lg font-normal">
                                    <strong>A:</strong>
                                </td>
                                <td className="p-[9px] text-left text-[#343434] text-lg font-normal">

                                </td>
                                <td colSpan={columns.length + 1} className="p-3  border-gray-300">
                                    {String(faq["answer"])}
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
                <td className="p-3">{openFAQ === index ? "▲" : "▼"}</td>
              </tr>

              {"contents" in faq && openFAQ === index && (
                <tr className="bg-gray-50">
                  <td className="p-[9px] text-left text-lg font-normal text-[#343434]">
                    <strong>A:</strong>
                  </td>
                  <td className="p-[9px] text-left text-lg font-normal text-[#343434]"></td>
                  <td
                    colSpan={columns.length + 1}
                    className="border-gray-300 p-3"
                  >
                    {String(faq["contents"])}
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
