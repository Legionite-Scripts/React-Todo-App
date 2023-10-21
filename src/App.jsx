import { Routes, Route } from "react-router-dom";
import { Default } from "./Components/Default.jsx";
import("./assets/default.css");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Default />}></Route>
      </Routes>
    </>
  );
}

export default App;
