import {
  ShieldCheck,
  BadgeCheck,
  Truck,
  Boxes,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">

      {/* BACKGROUND */}

      <img
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1800"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <p className="text-yellow-500 font-bold tracking-wide uppercase">

            

          </p>

          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mt-6 tracking-tight">

  <span className="block animate-pulse">
    IMPORT FROM
  </span>

  <span className="block text-yellow-500 drop-shadow-[0_0_25px_rgba(234,179,8,0.8)] transition-all duration-500">
    CHINA
  </span>

  <span className="block">
    SUPPLIER WITH
  </span>

  <span className="block text-white/90">
    CONFIDENCE
  </span>

</h1>

          <p className="mt-8 text-xl text-gray-300 max-w-2xl leading-relaxed">

            We help businesses in India import trending and premium
            products directly from trusted Chinese suppliers.

          </p>

          {/* FEATURES */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

            <div className="text-white">

              <ShieldCheck className="text-yellow-500 mb-3" />

              <h3 className="font-bold">
                Trusted Suppliers
              </h3>

              <p className="text-sm text-gray-400">
                Verified & Reliable
              </p>

            </div>

            <div className="text-white">

              <Boxes className="text-yellow-500 mb-3" />

              <h3 className="font-bold">
                Best Wholesale
              </h3>

              <p className="text-sm text-gray-400">
                Competitive Prices
              </p>

            </div>

            <div className="text-white">

              <BadgeCheck className="text-yellow-500 mb-3" />

              <h3 className="font-bold">
                Quality Assurance
              </h3>

              <p className="text-sm text-gray-400">
                Every Time
              </p>

            </div>

            <div className="text-white">

              <Truck className="text-yellow-500 mb-3" />

              <h3 className="font-bold">
                Shipping Support
              </h3>

              <p className="text-sm text-gray-400">
                PAN India Delivery
              </p>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 mt-12">

            <a
  href="#contact"
  className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-5 rounded-xl text-black font-bold flex items-center gap-4"
>
  Get Supplier Details
</a>

            <a
              href="https://wa.me/919622046046"
              target="_blank"
              className="border border-yellow-500 text-white px-8 py-5 rounded-xl font-semibold flex items-center gap-4 hover:bg-yellow-500 hover:text-black transition"
            >

              <FaWhatsapp />

              WhatsApp Us

            </a>

          </div>

        </div>

      </div>

      

    </section>
  );
}