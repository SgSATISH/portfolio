import { Routes,Route } from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";


function App() {
  return (
 <>
<Routes>
   <Route path="/" element={ <Home/>} />
   <Route path="/contact" element={ <Contact/>} />
   <Route path="/about" element={  <About/>} />
   <Route path="/project" element={  <Project/>} />
</Routes>
 </>
  );
}

export default App;

