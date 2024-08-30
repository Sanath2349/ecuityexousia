import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Layout from "./components/common/Layout";
import About from "./components/About/About";
import Contactus from "./components/common/Contactus/Contactus";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
