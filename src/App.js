import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Layout from "./components/common/Layout";
import About from "./components/About/About";
import Contactus from "./components/common/Contactus/Contactus";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Webdevelopment from "./components/Domain_pages/Webdevelopment";
import Mobiledevelopment from "./components/Domain_pages/Mobiledevelopment";
import Devops from "./components/Domain_pages/Devops";
import Python from "./components/Domain_pages/Python";
import Java from "./components/Domain_pages/Java";
import Testing from './components/Domain_pages/Testing'
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<About />} /> */}
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/webdevelopment" element={<Webdevelopment />} />
            <Route path="/mobileappdevelopment" element={<Mobiledevelopment />} />
            <Route path="/devops" element={<Devops />} />
            <Route path="/python" element={<Python />} />
            <Route path="/java" element={<Java />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: 9999 }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
