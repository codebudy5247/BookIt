import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import HotelDetails from "./Pages/HotelDetails";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route>
            <Route path="hotel/:id" element={<HotelDetails />} />
          </Route>
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
