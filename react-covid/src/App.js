import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import About from "./pages/covid/About";

function App() {
  return (
    <Router>
      <div>
        {/*
         * Render Halaman Home
         * Jika ingin diubah, maka ubah di Halaman Home.
         */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid/indonesia" element={<Indonesia />} />
          <Route path="/covid/provinsi" element={<Provinsi />} />
          <Route path="/covid/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
