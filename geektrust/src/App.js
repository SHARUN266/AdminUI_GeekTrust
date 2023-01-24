import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import EditUser from "./pages/Edit/EditUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Admin />}/>
      <Route path="/:id" element={<EditUser/>}/>
      
    </Routes>
  );
}

export default App;
