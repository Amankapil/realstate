import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./components/pages/Homepage";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes,
} from "react-router-dom";
import ProjectPage from "./components/pages/ProjectPage";
import Projectinner from "./components/pages/Projectinner";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Career from "./components/pages/Career";
import BlogInner from "./components/pages/BlogInner";
import Location from "./components/pages/Location";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/inner" element={<BlogInner />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/project" element={<ProjectPage />} />
          <Route exact path="/projectinner" element={<Projectinner />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
