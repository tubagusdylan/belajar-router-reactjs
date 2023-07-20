import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Blog } from "./Pages/Blog";
import "./app.css";

function App() {
  return (
    <>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/blog">
          Blog
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
