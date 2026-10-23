import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reserve from "./pages/Reserve";

function App(){
return(
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/reserve" element={<Reserve />} />
    
  </Routes>
  </BrowserRouter>
 
  </>
)
}

export default App;