
export default function Pagination({ postsPerPage, totalPosts, paginate }) {
    let pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return <>
        <ul className="pagination">
            {pageNumbers.map(num => (
                <li key={num} className="page-item">
                    <a href="#" onClick={() => paginate(num)} className="page-link">
                        {num}
                    </a>
                </li>
            ))}

        </ul>
    </>
}