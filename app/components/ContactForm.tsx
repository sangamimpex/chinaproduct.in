"use client";

import { useState } from "react";

export default function ContactForm() {

  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    company_name: "",
    gst_number: "",
    email: "",
    product_category: "",
    quantity_required: "",
    target_price: "",
    city: "",
    business_description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await fetch("/api/test", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await res.json();

      console.log(data);

      alert(
        "Thank you for submitting your inquiry. Our team will contact you soon."
      );

      setForm({
        customer_name: "",
        phone: "",
        company_name: "",
        gst_number: "",
        email: "",
        product_category: "",
        quantity_required: "",
        target_price: "",
        city: "",
        business_description: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }
  };

  return (

    <section
      id="contact"
      className="bg-[#f8f8f8] py-28 px-6"
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <div className="inline-block bg-yellow-100 text-yellow-700 font-bold px-5 py-2 rounded-full uppercase tracking-[3px] text-sm">

            Trusted China Sourcing Partner

          </div>

          <h2 className="text-5xl md:text-6xl font-black text-black mt-8 leading-tight">

            Start Importing
            <br />

            <span className="text-yellow-600">
              Profitable Products
            </span>

          </h2>

          <p className="text-gray-600 text-xl leading-relaxed mt-8 max-w-xl">

            Sangam Impex helps Indian businesses source
            premium and trending products directly from
            verified Chinese manufacturers with reliable
            wholesale pricing and shipping support.

          </p>

          {/* TRUST BOXES */}

          <div className="grid gap-5 mt-12">

            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition">

              <div className="flex items-start gap-4">

                <div className="w-4 h-4 bg-yellow-500 rounded-full mt-2"></div>

                <div>

                  <h3 className="font-bold text-black text-lg">
                    Verified Suppliers
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Trusted supplier network from China.
                  </p>

                </div>

              </div>

            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition">

              <div className="flex items-start gap-4">

                <div className="w-4 h-4 bg-yellow-500 rounded-full mt-2"></div>

                <div>

                  <h3 className="font-bold text-black text-lg">
                    Factory Direct Pricing
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Competitive wholesale rates for importers.
                  </p>

                </div>

              </div>

            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition">

              <div className="flex items-start gap-4">

                <div className="w-4 h-4 bg-yellow-500 rounded-full mt-2"></div>

                <div>

                  <h3 className="font-bold text-black text-lg">
                    PAN India Delivery
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Smooth logistics and shipping support.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[35px] shadow-2xl p-8 md:p-10 space-y-5 border border-gray-200"
        >

          <div>

            <p className="text-yellow-600 font-bold uppercase tracking-[3px]">
              Inquiry Form
            </p>

            <h3 className="text-4xl font-black text-black mt-3">
              Send Inquiry
            </h3>

          </div>

          {/* GRID */}

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="customer_name"
              placeholder="Your Name"
              value={form.customer_name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl text-black outline-none focus:border-yellow-500"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl text-black outline-none focus:border-yellow-500"
              required
            />

            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={form.company_name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl text-black outline-none focus:border-yellow-500"
            />

            <input
              type="text"
              name="gst_number"
              placeholder="GST Number"
              value={form.gst_number}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl text-black outline-none focus:border-yellow-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl text-black outline-none focus:border-yellow-500"
              required
            />

            {/* STATE DROPDOWN */}

            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl text-black outline-none focus:border-yellow-500 bg-white"
            >

              <option value="">
                Select State
              </option>

              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Uttar Pradesh</option>
              <option>West Bengal</option>
              <option>Delhi</option>
              <option>Jammu & Kashmir</option>

            </select>

            {/* PRODUCT CATEGORY */}

            <select
              name="product_category"
              value={form.product_category}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl text-black outline-none focus:border-yellow-500 bg-white"
            >

              <option value="">
                Select Product Category
              </option>

              <option>Electronics</option>
              <option>Mobile Accessories</option>
              <option>Industrial Machinery</option>
              <option>Packaging Products</option>
              <option>Solar Products</option>
              <option>Electrical Equipment</option>
              <option>LED Lighting</option>
              <option>Auto Accessories</option>
              <option>Home Decor</option>
              <option>Kitchen Products</option>
              <option>Furniture</option>
              <option>Fashion Accessories</option>
              <option>Watches</option>
              <option>Gym Accessories</option>
              <option>Baby Products</option>
              <option>Pet Products</option>
              <option>Beauty Products</option>
              <option>Toys</option>
              <option>Medical Products</option>
              <option>Construction Material</option>
              <option>Other</option>

            </select>

            <input
              type="text"
              name="quantity_required"
              placeholder="Quantity Required"
              value={form.quantity_required}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl text-black outline-none focus:border-yellow-500"
            />

          </div>

          <input
            type="text"
            name="target_price"
            placeholder="Target Price"
            value={form.target_price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-2xl text-black outline-none focus:border-yellow-500"
          />

          <textarea
            name="business_description"
            placeholder="Tell us your product requirement..."
            value={form.business_description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-2xl h-36 text-black outline-none focus:border-yellow-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black hover:bg-yellow-500 hover:text-black text-white py-5 rounded-2xl text-lg font-bold transition-all duration-300"
          >

            {loading
              ? "Submitting..."
              : "Submit Inquiry"}

          </button>

        </form>

      </div>

    </section>
  );
}