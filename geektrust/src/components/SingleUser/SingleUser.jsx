import React from "react";
import "./SingleUser.css";
export default function SingleUser() {
  return (
    <tr>
      <td>
        {" "}
        <input type="checkbox" />{" "}
      </td>
      <td>Sharun</td>
      <td>Sharunattari266@gmail.com</td>
      <td>Member</td>
      <td className="action">
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}
