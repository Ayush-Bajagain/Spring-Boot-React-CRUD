import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Add from "./users/Add";
import Edit from "./users/Edit";
import View from "./users/View";
import NotFound from "./NotFound";


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/addUser" element={<Add />} />
          <Route  path="/editUser/:id" element={<Edit />} />
          <Route  path="/viewUser/:id" element={<View />} />
          <Route  path="*" element={<NotFound />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
