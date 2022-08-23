import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./Pages/Sign/Sign";
import Admin from "./Pages/Admin/Admin";
const Private = ({ Item }) => {
  const { signed } = true;

  return signed > 0 ? <Item /> : <Sign />;
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/home" element={<Private Item={Admin} />} />
          <Route exact element={<Sign />} path="/" />
          <Route element={<Sign />} path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
