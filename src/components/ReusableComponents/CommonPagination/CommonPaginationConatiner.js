import React, {Component} from "react";
import {Icon} from "antd";
import Pagination from "react-js-pagination";


const CommonPagination = ({page_number, totalRecordsCount, handlePageChange,itemsCountPerPage}) => {
    return (
        <div className="cs-paginationStyle">
            <Pagination
                prevPageText=<Icon type="caret-left" />
                nextPageText=<Icon type="caret-right" />
                firstPageText="First"
                lastPageText="Last"
                activePage={page_number}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalRecordsCount}
                onChange={handlePageChange}
                pageRangeDisplayed={1}
            />
        </div>
    )
}

export default CommonPagination;