import { AnimatePresence } from "framer-motion";
import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Projects from "./components/projects";
import Header from "./components/shared/header";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <h1 style={{ fontSize: "5rem" }}>
        DE HOVRE
        <br />
        DESIGNS
      </h1>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
