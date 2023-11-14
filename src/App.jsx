import Home from "./pages/Home";
import "./app.scss"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotelList" element={<HotelList />} />
            <Route path="/hotel/:id" element={<Hotel />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
