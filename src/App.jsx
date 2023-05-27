import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
// import { Navbar } from "./Components/Navbar";
import { SignInPage } from "./Pages/SignIn/SignInPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { Products } from "./Components/Products";
import { ContactPage } from "./Pages/Contact/ContactPage";
import { AboutPage } from "./Pages/About/AboutPage";
import { Footer } from "./Components/Footer";
import { ProductPage } from "./Pages/Product/ProductPage";
import { CartPage } from "./Pages/Cart/CartPage";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:productid" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
