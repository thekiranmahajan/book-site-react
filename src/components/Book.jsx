import React from "react";

const Book = (props) => {
  const { title, author, categories, year, cover } = props;
  return (
    <div className=" bg-sky-200 rounded-md flex justify-between h-60 mt-5 border-2 border-indigo-200 w-[50%] ">
      <div className=" h-full rounded-md mr-5 flex items-center justify-center">
        <img className="h-full" src={cover} alt="Book Cover Image" />
      </div>
      <div className="info bg">
        <h3>{title}</h3>
        <p>publishing year {year}</p>
        <p>by{author}</p>
        <p>best seller in {categories}</p>
      </div>
    </div>
  );
};

export default Book;
