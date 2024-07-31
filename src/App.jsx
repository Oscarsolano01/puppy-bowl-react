import Home from "./pages/Home";
import Details from "./pages/Details";
import AddPuppy from "./pages/AddPuppy";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/addPlayer" element ={<AddPuppy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
