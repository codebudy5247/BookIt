import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import HotelDetails from "./Pages/HotelDetails";

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
        {/* <Route path="hotel/:id" element={<HotelDetails />} /> */}
      </Routes>
    </>
  );
}

export default App;
