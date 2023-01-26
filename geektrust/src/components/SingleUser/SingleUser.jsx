import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteUserById } from "../Redux/actions";
import "./SingleUser.css";
export default function SingleUser(props) {
  const { data } = useSelector((store) => store.FetchUserReducer);
  const dispatch = useDispatch();
  const { id, name, email, role } = props;

  return (
    <tr>
      <td>
        {" "}
        <input type="checkbox" />{" "}
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td className="action">
        <button>Edit</button>

        <button onClick={() => dispatch(DeleteUserById(data, id))}>
          Delete
        </button>
      </td>
    </tr>
  );
}
