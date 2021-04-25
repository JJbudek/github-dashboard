import './Pagination.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

    const currentPageNumber = currentPage
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='pagination-page-item'>
                        <a onClick={() => paginate(number)} href='!#' className={`pagination-page-link ${number === currentPageNumber ? "active" : ""}`}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;