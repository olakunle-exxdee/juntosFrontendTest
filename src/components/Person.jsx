import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const PER_PAGE = 18;
const Person = ({ people }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * PER_PAGE;
  const currentPageData = people.slice(offset, offset + PER_PAGE).map((val) => {
    const { location, name, phone, picture } = val;

    return (
      <div key={phone} className="people_data">
        <div className="people_img">
          <img src={picture.large} alt="" className="people-img" />
        </div>
        <h1 className="people_title">
          {name.first} {name.last}
        </h1>
        <p className="people_text">
          {location.city} {location.postcode}
        </p>
        <p className="people_text">{location.state}</p>
      </div>
    );
  });
  const pageCount = Math.ceil(people.length / PER_PAGE);

  return (
    <div className="person">
      <div className="person_wrapper">
        <h1 className="person-title">Member List</h1>
        <p className="person-text">
          Showing {currentPage + 1} of {pageCount} Pages
        </p>
        <div className="people">{currentPageData}</div>
      </div>
      <ReactPaginate
        breakLabel="..."
        previousLabel=""
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        className="paginate"
        activeClassName="active-paginate"
        previousClassName="prev_link"
        nextClassName="next_link"
        disabledClassName="disabled_link"
      />
    </div>
  );
};

export default Person;
