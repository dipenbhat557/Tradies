<<<<<<< HEAD
=======
import { Provider } from "react-redux";
>>>>>>> 1c49f52feb5167c29741c82f5511e4f15e60ce0e
import Body from "./components/Body";
import appStore from "./utils/appStore"

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
