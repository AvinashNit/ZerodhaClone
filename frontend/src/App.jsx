
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./landingPage/home/Homepage";
import SignUp from "./landingPage/signup/SignUp";
import Pricing from "./landingPage/pricing/Pricing";
import About from "./landingPage/about/About";
import Product from "./landingPage/products/Product"; 
import Support from "./landingPage/support/Support";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import NotFound from "./landingPage/NotFound";
import "./App.css";

function App() {
    return (
      <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<HomePage></HomePage>}/>
        <Route path={"/"}  element={<HomePage></HomePage>}/>
        <Route path="/signup" element={<SignUp></SignUp>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/products" element={<Product/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </>
   
    
      );
}

export default App;
