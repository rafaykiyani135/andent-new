import React from 'react'

function Main() {
  return (
    <>
        <div className="pagination-wrap mb-50">
            <nav>
                <ul className="pagination">
                <li className="page-item">
                    <a href="/">
                    <i className="fas fa-angle-double-left" />
                    </a>
                </li>
                <li className="page-item active">
                    <a href="/">1</a>
                </li>
                <li className="page-item">
                    <a href="/">2</a>
                </li>
                <li className="page-item">
                    <a href="/">3</a>
                </li>
                <li className="page-item">
                    <a href="/">...</a>
                </li>
                <li className="page-item">
                    <a href="/">10</a>
                </li>
                <li className="page-item">
                    <a href="/">
                    <i className="fas fa-angle-double-right" />
                    </a>
                </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Main