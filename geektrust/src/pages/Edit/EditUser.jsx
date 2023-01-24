import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./EditUser.css";
export default function EditUser() {
  const [obj, setObj] = useState({});
  const { data } = useSelector((store) => store.FetchUserReducer);
  const { id } = useParams();
  const [text, setText] = useState("");
  useEffect(() => {
    handleEdit(id);
  }, [id]);
  function handleEdit(id) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        setObj(data[i]);
      }
    }
  }

  function handleChange(e) {
    setObj({ ...obj, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    //setObj({...obj,text})
  }
  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}></form>
      <input
        value={obj.name}
        onChange={(e) => handleChange(e)}
        type="text"
        name="name"
      />
    </div>
  );
}
