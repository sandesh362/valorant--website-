import React from "react";
import { useState } from "react";
import { close, valorantlogo, menu, riotlogo } from "../../assets";
import { navLinks } from "../../constants";
import styles from "../../style";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import { ShoppingCart } from "phosphor-react";
import { Logo } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  // 1. Get user data to check roles
  const user = JSON.parse(localStorage.getItem("user"));

  // 2. Define links ONCE and handle dynamic logic
  const allNavLinks = [
    ...navLinks,
    { id: "/marketplace", title: "Marketplace" },
    { id: "/store", title: "VP Store" },
    { 
      id: user ? (user.role === 'admin' ? "/admin" : "/seller-dashboard") : "/login", 
      title: user ? "Dashboard" : "Sell Accounts" 
    }
  ];

  // 3. Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setToggle(false);
    navigate("/");
    window.location.reload(); // Refresh to update navbar state
  };

  return (
    <nav className="navbar h-[80px]">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`w-full flex justify-between items-center ${styles.boxWidth}`}>
          
          {/* Logo Section */}
          <div className={`${styles.flexCenter} h-[80px]`}>
            <Link to="/">
              <div className={`${styles.flexCenter} h-[80px] sm:ml-5 ml-10`}>
                <img src={Logo} alt="valorant" className="relative w-20" />
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="flex h-[80px]">
            <ul className="list-none md:flex hidden justify-end items-center ml-10">
              {allNavLinks.map((navLink, index) => (
                <li
                  key={navLink.id}
                  className={`font-poppins font-normal relative cursor-pointer text-center text-[13px] hover:bg-[gray]/40 px-4 py-2 rounded-[8px] uppercase ${
                    index === allNavLinks.length - 1 ? "mr-0" : "mr-6"
                  } text-white ${
                    navLink.id === "/store" 
                      ? "bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500/30 hover:border-red-500/60" 
                      : ""
                  }`}
                >
                  <Link to={`${navLink.id}`} className="h-[80px]">
                    {navLink.title}
                    {navLink.id === "/store" && <span className="ml-1 text-red-400">⚡</span>}
                  </Link>
                </li>
              ))}
              
              {/* Logout Button for Desktop */}
              {user && (
                <li className="ml-6">
                  <button 
                    onClick={handleLogout}
                    className="text-[12px] font-bold text-red-500 hover:text-white uppercase transition-all"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="mr-4">
            <div className="flex justify-end items-center gap-4">
              <Link to="/cart">
                <div id="navbutton" className="md:flex hidden">
                  <button><ShoppingCart size={20} /></button>
                </div>
              </Link>
              <div className="md:hidden block bg-[gray]/40 rounded-full w-[48px] h-[48px] p-2">
                <img
                  src={menu}
                  alt="menu"
                  className="w-[100%] h-[100%] object-contain cursor-pointer"
                  onClick={() => setToggle((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {toggle && (
        <div className="h-[100vh] w-[100%] bg-[#000]/50 fixed top-0 left-0 block md:hidden z-[50]">
          <div className={`flex-col bg-black absolute top-0 right-0 w-[100%] sm:w-[500px] sidebar block h-full`}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`w-full flex justify-between items-center ${styles.boxWidth}`}>
                <div className={`${styles.flexCenter} h-[80px]`}>
                  <img src={valorantlogo} alt="valorant" className="relative w-[38px] h-[26px]" />
                </div>
                <div className="md:hidden block bg-[gray]/40 rounded-full w-[48px] h-[48px] p-2 mr-4 cursor-pointer">
                  <img src={close} alt="close" className="w-[100%] h-[100%] object-contain" onClick={() => setToggle(false)} />
                </div>
              </div>
            </div>

            <div className="flex-col p-10 bg-[#292929] h-full">
              <ul className="list-none flex flex-col justify-end items-start flex-1">
                {allNavLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white my-2 w-full ${
                      navLink.id === "/store" 
                        ? "bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-lg border border-red-500/30" 
                        : ""
                    }`}
                  >
                    <Link
                      to={`${navLink.id}`}
                      className="uppercase font-semibold p-4 block w-full"
                      onClick={() => setToggle(false)}
                    >
                      {navLink.title}
                      {navLink.id === "/store" && <span className="ml-2 text-red-400">⚡</span>}
                    </Link>
                  </li>
                ))}
                
                {/* Logout for Mobile */}
                {user && (
                  <li className="w-full mt-4">
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left p-4 uppercase font-bold text-red-500 bg-red-500/10 rounded-lg"
                    >
                      Logout Session
                    </button>
                  </li>
                )}
              </ul>
              
              <Link 
                to="/cart" 
                className="text-center font-semibold mt-8 p-4 flex justify-center bg-primary rounded-[12px] cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <div className="text-[16px]">View Cart</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;