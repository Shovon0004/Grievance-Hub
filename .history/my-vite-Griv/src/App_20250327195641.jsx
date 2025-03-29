import { BrowserRouter as Router } from "react-router-dom";  // Import Router
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import ReportSubmit from "./ReportSubmit";
import Report from "./Report";

function App() {
  return (
    <Router>  
      <Navbar /> 
      <Home/> 
      <Footer/> 
      <ReportSubmit/>
      <Report/>
    </Router>
  );
}

export default App;
