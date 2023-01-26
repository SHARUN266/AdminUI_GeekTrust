import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { EditUserById } from "../../components/Redux/actions";
import "./EditUser.css";
export default function EditUser({id}) {


  const { data } = useSelector((store) => store.FetchUserReducer);
 
  const dispatch = useDispatch();
  const [text, setText] = useState({
    name: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(EditUserById(data, id, text));
  }

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={text.name}
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
