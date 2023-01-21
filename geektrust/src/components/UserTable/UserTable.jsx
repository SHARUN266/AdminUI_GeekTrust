import React from "react";
import SingleUser from "../SingleUser/SingleUser";
import "./UserTable.css"
export default function UserTable() {
  return (
    <table className="userCon">
      <tr>
        <th>Checkbox</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
      {
         Array(25).fill(25).map((e)=>(

          <SingleUser/>
        ))
      }
    </table>
  );
}
