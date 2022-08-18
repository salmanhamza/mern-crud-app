import Codeforinterview from "./components/Codeforinterview";
import Allusers from "./components/Allusers";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import Edituser from "./components/Edituser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Codeforinterview />} />
        <Route path="all" element={<Allusers />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<Edituser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
