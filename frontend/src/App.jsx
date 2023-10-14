import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";

import Signup from "./Pages/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </div>
  );
};

export default App;
