import { Route, Routes } from "react-router-dom";
import Blog from "./application/blog1";
import Home from "./application/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;