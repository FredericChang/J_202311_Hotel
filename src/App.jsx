import Home from "./pages/Home";
import "./app.scss"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Hotel from "./pages/Hotel";
import HotelsList from "./pages/HotelsList";
function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotelsList" element={<HotelsList />} />
            <Route path="/hotels/:id" element={<Hotel />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
