import React from "react";
import "./SingleUser.css";
export default function SingleUser(props) {
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
        <button>Delete</button>
      </td>
    </tr>
  );
}
