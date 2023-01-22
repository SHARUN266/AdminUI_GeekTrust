import React from "react";
import "./Search.css"
export default function Search({handleSearch}) {
  return (
    <div className="searchCon">
      <input onChange={(e)=>handleSearch(e)} type="text" placeholder="Search by name, email or role " />
    </div>
  );
}
