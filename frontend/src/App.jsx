// import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import Hero from "./components/Hero";
import Home from "./Pages/Home";
import ServicePage from "./Pages/ServicePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ServicePage />
      </BrowserRouter>
    </div>
  );
};

export default App;
