import React from "react";
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface PaginationProps {
    totalPages: number; // 전체 페이지 수
    currentPage: number; // 현재 페이지
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    // ✅ 페이지 범위 계산 (최대 5개만 표시)
    const getPageNumbers = () => {
        let start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, start + 4);

        if (end - start < 4) {
            start = Math.max(1, end - 4);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return (
        <div className="flex justify-center items-center gap-4">
            <button
                className="p-2 text-gray-500 hover:text-black disabled:text-gray-300"
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
            >
                <FaAngleDoubleLeft size={20} />
            </button>

            <button
                className="p-2 text-gray-500 hover:text-black disabled:text-gray-300"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <FaAngleLeft size={20} />
            </button>

            <div className="flex gap-2">
                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        className={`w-8 h-8 flex items-center justify-center text-xl font-medium rounded-full transition-all
              ${page === currentPage ? "text-purple-500 font-bold" : "text-gray-500 hover:text-black"}
            `}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                className="p-2 text-gray-500 hover:text-black disabled:text-gray-300"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <FaAngleRight size={20} />
            </button>

            <button
                className="p-2 text-gray-500 hover:text-black disabled:text-gray-300"
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                <FaAngleDoubleRight size={20} />
            </button>
        </div>
    );
};
