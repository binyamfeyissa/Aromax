import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SignupForm from "./components/signup";
import Home from "./pages/Home";
import OurCoffee from "./pages/OurCoffee";
import OurStory from "./pages/OurStory";
import CoffeeBlog from "./pages/Blog";
import ContactUs from "./pages/Contact";
import SampleRequest from "./pages/SampleRequest";
import Login from "./pages/Login";
import Contracts from "./pages/Contracts";
import ContractProgress from "./pages/Processhailing";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-coffee" element={<OurCoffee />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/coffee-blog" element={<CoffeeBlog />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sample-request" element={<SampleRequest />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/process-hailing" element={<ContractProgress />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
