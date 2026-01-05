import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.jpg";
import CartDrawer from "./CartDrawer.jsx";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { setOpen: openCart } = useCart(); // ✅ cart context

  return (
    <>
      <header className="w-full border-b border-[#e6e3dc] bg-[#fbfaf5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

          {/* Logo */}
          <Link to='/'>
            <div className="flex items-center gap-1 cursor-pointer">
              <img src={logo} alt="Seeds & Co Logo" className="h-10 w-10 rounded-full" />
              <span className="text-2xl font-semibold text-[#163d2d]">
                Palamonte
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-xl font-medium text-[#163d2d] hover:underline cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-xl font-medium text-[#163d2d] hover:underline cursor-pointer"
            >
              Products
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => openCart(true)}
              className="relative rounded-full p-2 transition
                         hover:bg-[#163d2d]/10 hover:shadow-md cursor-pointer"
              aria-label="Open cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-[#163d2d]"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-full p-2 transition hover:bg-[#163d2d]/10 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-[#163d2d]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-[#e6e3dc] bg-[#fbfaf5] md:hidden">
            <nav className="flex flex-col gap-4 px-4 py-4">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#163d2d] cursor-pointer"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#163d2d] cursor-pointer"
              >
                Products
              </Link>

              <button
                onClick={() => {
                  setOpen(false);
                  openCart(true);
                }}
                className="text-sm font-medium text-[#163d2d] text-left cursor-pointer"
              >
                Cart
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Drawer (global) */}
      <CartDrawer />
    </>
  );
}

export default Navbar;
