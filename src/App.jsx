import "./App.css";
import Create from "./Create";
import Update from "./Update"
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/edit/:id" element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
