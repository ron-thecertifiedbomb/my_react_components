import React from 'react';
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import './Pagination.css';

function PaginationApp ({query}) {

  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  let limit = 5;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        //  http://localhost:3000/comments?_page=1&_limit=${limit}
        `https://jsonplaceholder.typicode.com/users?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
     console.log(Math.ceil(total/12));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      // http://localhost:3000/comments?_page=${currentPage}&_limit=${limit}
     `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchComments(currentPage);
    setItems(commentsFormServer);
   
  };

  return (
    <div className="table_container ">

<div className='table_header_container'>
    <div className='table_heading'>
        Name
    </div>
    <div className='table_heading'>
        Email
    </div>
    <div className='table_heading'>
       Company
    </div>
    <div className='table_heading'>
        Phone
    </div>
</div>

{items.filter(item => item.name.includes(query)).map((item) => (
<div className='table_body_container' key={item.id}>
    
    <div className='table_body_row'>
    {item.name}
    </div>
    <div className='table_body_row'>
    {item.email}
    </div>
    <div className='table_body_row'>
    {item.website}
    </div>
    <div className='table_body_row'>
    {item.phone}
    </div>
</div>
))}
<div id="react-paginate">
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
      
        activeClassName={"active"}
      />
    </div>
    </div>
  );
}

export default PaginationApp;