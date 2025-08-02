// src/App.jsx (Fixed version)
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./components/context/shop-context";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Reviews from "./pages/reviews/Reviews";
import TermsAndServices from "./pages/about/TermsAndServices";
import PrivacyNotes from "./pages/about/privacy";
import CookiePreference from "./pages/about/cokkie";
import Blog from "./components/pages/home/Blog";
import Admin from './pages/Admin.jsx';
import ProtectedRoute from "./components/utils/ProtectedRoute.jsx";
import AdminLogin from "./pages/AdminLogin.jsx"; // Fixed import path
import Store from "./pages/Vp-store/Store.jsx";  // Fixed import path

const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <div className="w-full overflow-hidden">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/TermsAndServices" element={<TermsAndServices />} />
            <Route path="/privacy" element={<PrivacyNotes />} />
            <Route path="/CookiePreference" element={<CookiePreference />} />
            <Route path="/blogs" element={<Blog />} />
          
            <Route path="/store" element={<Store />} /> {/* Changed to capital 'Store' */}
            
            {/* Protected admin route */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin login route */}
            <Route path="/admin-login" element={<AdminLogin />} />
            
            <Route path="*" element={<h1>You Lost In the World of Valorant 😀</h1>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;