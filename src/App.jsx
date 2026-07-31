import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout & Context
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Analytics from "./components/analytics/Analytics";
import { ShopContextProvider } from "./components/context/shop-context";
import ProtectedRoute from "./components/utils/ProtectedRoute";

// Standard Pages
import Home from "./pages/home/Home";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Reviews from "./pages/reviews/Reviews";
import Blog from "./components/pages/home/Blog";
import Store from "./pages/Vp-store/Store";

// Legal Pages
import TermsAndServices from "./pages/about/TermsAndServices";
import PrivacyNotes from "./pages/about/privacy";
import CookiePreference from "./pages/about/cokkie";

// --- NEW IMPORTS BASED ON YOUR FOLDER STRUCTURE ---

// 1. Marketplace (Public View)
import Marketplace from "./components/sellermarket/Marketplace"; 

// 2. Seller Dashboard (Protected)
import SellerDashboard from "./components/pages/marketplace/SellerDashboard";

// 3. Admin Panel (Protected)
import AdminPanel from "./components/pages/marketplace/AdminPanel";

// 4. Admin Login (Keep your existing page if you have it, or use the general login)
import AdminLogin from "./pages/AdminLogin"; 


const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <div className="w-full overflow-hidden">
          <Analytics />
          <Navbar />
          
          <Routes>
            {/* --- Public Routes --- */}
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/store" element={<Store />} />
            
            {/* Legal */}
            <Route path="/TermsAndServices" element={<TermsAndServices />} />
            <Route path="/privacy" element={<PrivacyNotes />} />
            <Route path="/CookiePreference" element={<CookiePreference />} />

            {/* --- NEW MARKETPLACE ROUTES --- */}
            
            {/* 1. Public Marketplace Listing */}
            <Route path="/marketplace" element={<Marketplace />} />

            {/* 2. Protected Seller Dashboard */}
            <Route 
              path="/seller-dashboard" 
              element={
                <ProtectedRoute>
                  <SellerDashboard />
                </ProtectedRoute>
              } 
            />

            {/* 3. Protected Admin Panel */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />

            {/* 4. Admin/Seller Login */}
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* 404 Page */}
            <Route path="*" element={<div className="text-white text-center pt-20"><h1>404 - You Lost In the World of Valorant 😀</h1></div>} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;