import React from "react";
import { useDispatch } from "react-redux";
import { DeleteUserById, FetchUsers } from "../Redux/actions";
import "./SingleUser.css";
export default function SingleUser(props) {
  const dispatch=useDispatch()
  const { id, name, email, role } = props;

  return (
    <tr >
      <td>
        {" "}
        <input type="checkbox" />{" "}
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td className="action">
        <button>Edit</button>
        <button onClick={()=>dispatch(FetchUsers(id))}>Delete</button>
      </td>
    </tr>
  );
}
