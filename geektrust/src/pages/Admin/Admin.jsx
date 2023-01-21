import React from 'react'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search'
import UserTable from '../../components/UserTable/UserTable'
import "./Admin.css"
export default function Admin() {
  return (
    <div className='container'>
      <h1>Admin UI</h1>
      <Search/>
      <UserTable/>
      <Pagination/>
    </div>
  )
}
