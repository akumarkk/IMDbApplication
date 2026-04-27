import { Link } from "react-router-dom";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        const halfPagesToShow = Math.floor(maxPagesToShow / 2);

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= halfPagesToShow) {
                for (let i = 1; i <= maxPagesToShow; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - halfPagesToShow) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - halfPagesToShow; i <= currentPage + halfPagesToShow; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }
        return pageNumbers;
    }

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <Link to={`/movielist/page/${currentPage - 1}`}>
                    <button>Prev</button>
                </Link>
            )}
            {getPageNumbers().map((page, index) => {
                if (page === '...') {
                    return <span key={index} className="pagination-ellipsis">...</span>;
                }
                return (
                    <Link to={`/movielist/page/${page}`} key={index}>
                        <button className={currentPage === page ? 'active' : ''}>{page}</button>
                    </Link>
                )
            })}
            {currentPage < totalPages && (
                <Link to={`/movielist/page/${currentPage + 1}`}>
                    <button>Next</button>
                </Link>
            )}
        </div>
    )
}

export default Pagination;