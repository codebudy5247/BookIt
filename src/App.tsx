import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireUser from "./guard/RequireUser";
import AdminPage from "./Pages/Admin/Dashboard";
import Layout from "./components/Layout";
import LandingPage from "./Pages/LandingPAge";
import Home from "./Pages/Home";
import HotelDetails from "./Pages/HotelDetails";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import UserProfile from "./Pages/USerProfile";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route>
            <Route path="hotels" element={<Home />} />
          </Route>
          <Route>
            <Route path="hotel/:id" element={<HotelDetails />} />
          </Route>

          {/* Private Route */}
          <Route element={<RequireUser allowedRoles={["user", "admin"]} />}>
            <Route path="profile" element={<UserProfile />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<RequireUser allowedRoles={["admin"]} />}>
            <Route path="admin" element={<AdminPage />} />
          </Route>
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
