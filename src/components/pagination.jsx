import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const maxPageButtons = 5;

    const renderPageNumbers = () => {
        const pageNumbers = [];

        if (currentPage <= 3) {
            for (let i = 1; i <= Math.min(maxPageButtons, totalPages); i++) {
                pageNumbers.push(i);
            }
        } else if (currentPage > 3 && currentPage < totalPages - 2) {
            pageNumbers.push(1, '...');
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1, '...');
            for (let i = totalPages - 2; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    return (
        <nav className="flex justify-center my-4">
            <ul className="flex items-center space-x-1">
                {renderPageNumbers().map((number, index) => (
                    <li key={index}>
                        {number === '...' ? (
                            <span className="px-4 py-2 text-gray-500">...</span>
                        ) : (
                            <button
                                onClick={() => paginate(number)}
                                className={`px-4 py-2 rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white'} transition duration-200`}
                            >
                                {number}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
