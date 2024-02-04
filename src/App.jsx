import "./App.css";
import DishDetails from "./components/DishDetails";
import Header from "./components/Header";
import {_stateContext} from "./context/stateContext";

function App() {
  return (
    <>
      <_stateContext>
        <Header />
        <DishDetails/>
      </_stateContext>
    </>
  );
}

export default App;
