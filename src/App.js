import React from "react";
import "./App.css";
import Home from "./container/Home";
import { Route , Routes} from 'react-router-dom';
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Error from "./pages/Error";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route exect path="/" element={<Home />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route path="/contact" element={<Contact />}></Route>
       <Route path="/service" element={<Service />}></Route>
       <Route path="/error" element={<Error />}></Route>
     </Routes>
      
   
      
        
      
    </div>
  );
}

export default App;
