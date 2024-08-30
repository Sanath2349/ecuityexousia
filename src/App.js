import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Layout from "./components/common/Layout";
import About from "./components/About/About";
import Contactus from "./components/common/Contactus/Contactus";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<About />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
