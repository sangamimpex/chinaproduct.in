"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <img
            src="/images/logo.png"
            alt="Sangam Impex Logo"
            className="w-14 h-14 object-contain rounded-full bg-white p-1 shadow-lg"
          />

          <div>
            <h1 className="font-black text-2xl text-white tracking-wide">
              SANGAM IMPEX
            </h1>

            <p className="text-sm text-gray-300">
              Trusted China Sourcing Partner
            </p>
          </div>

        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">

          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#categories" className="hover:text-yellow-400">Categories</a>
          <a href="#whychoose" className="hover:text-yellow-400">Why Us</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">

          <a href="#home" onClick={() => setOpen(false)} className="block">
            Home
          </a>

          <a href="#categories" onClick={() => setOpen(false)} className="block">
            Categories
          </a>

          <a href="#whychoose" onClick={() => setOpen(false)} className="block">
            Why Us
          </a>

          <a href="#contact" onClick={() => setOpen(false)} className="block">
            Contact
          </a>

        </div>
      )}

    </nav>
  );
}