import React from "react";
import SingleUser from "../SingleUser/SingleUser";
import "./UserTable.css";
export default function UserTable({ user }) {
  return (
    <table className="userCon">
      <tr>
        <th>Checkbox</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
      {user?.map((e) => (
        <SingleUser key={e.id} {...e} />
      ))}
    </table>
  );
}
