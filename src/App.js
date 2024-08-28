import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Layout from "./components/common/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout >
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
