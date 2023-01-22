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
  const [text, setText] = useState("");

  const { data, isLoading, loadingText, errorText, isError, isSuccess } =
    useSelector((store) => store.FetchUserReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUsers(text));
  }, [text]);

  function handleSearch(e) {
    setText(e.target.value);
  }

  return (
    <div className="container">
      <h1>Admin UI</h1>
      <Search handleSearch={handleSearch} />
      {isLoading && <h1>{loadingText}</h1>}
      {isError && <h1>{errorText}</h1>}
      {isSuccess && <UserTable user={data} />}

      <Pagination />
    </div>
  );
}
