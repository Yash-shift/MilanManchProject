import "./App.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Wedding from "./pages/Wedding";
import Social from "./pages/Social";
import Corporate from "./pages/Corporate";
import PaymentGateway from "./payment/Payment"
import BookingPage from "./pages/BookingPage";
import Functions from "./pages/Functions";
import {
  BrowserRouter,
  Routes,
  Route,Router
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import BackButton from "./components/BackButton";
import sameday from "./pages/WeddingSubTypes/SameDay";
import Sameday from "./pages/WeddingSubTypes/SameDay";
import { AuthProvider } from "./context/AuthContext";
import Destination from "./pages/WeddingSubTypes/Destination";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App gap-5-">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/social" element={<Social />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/services" element={<Services />} />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/functions" element={<Functions/>} />
            <Route path="/sameday" element={<Sameday/>}/>
            <Route path="/destination" element={<Destination/>} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Footer></Footer>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
