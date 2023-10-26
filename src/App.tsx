import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import CenterDiv from "./pages/CenterDiv";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/center" element={<CenterDiv />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
