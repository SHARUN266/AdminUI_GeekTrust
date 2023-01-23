import React from "react";
import { useState } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import { FetchUsers } from "../../components/Redux/actions";
import Search from "../../components/Search/Search";
import UserTable from "../../components/UserTable/UserTable";
import "./Admin.css";
export default function Admin() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const [text, setText] = useState("");

  const { data, isLoading, loadingText, errorText, isError, isSuccess } =
    useSelector((store) => store.FetchUserReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(FetchUsers(text));
  }, [text]);
  useEffect(() => {
    console.log(data)
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data, itemsPerPage]);

  function handleSearch(e) {
    // Here i add debounce method to avoid unwanted request
    let id;
    setTimeout(() => {
      if (id) clearTimeout(id);
      setText(e.target.value);
    }, 1000);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  function handlePagination(value) {
    setCurrentPage((prev) => prev + value);
  }
  
  return (
    <div className="container">
      <h1>Admin UI</h1>
      <Search handleSearch={handleSearch} />
      {isLoading && <h1>{loadingText}</h1>}
      {isError && <h1>{errorText}</h1>}
      {isSuccess && <UserTable user={currentItems} />}

      <Pagination  currentPage={currentPage} totalPages={totalPages} handlePagination={handlePagination} />
    </div>
  );
}
