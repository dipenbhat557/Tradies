import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
