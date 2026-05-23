"use client";

import { useState } from "react";

async function getInquiries() {
  const res = await fetch("https://chinaproduct.in/api/enquiries", {
    cache: "no-store",
  });

  return res.json();
}

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // 🔐 SET YOUR CREDENTIALS HERE
    if (username === "sangamimpex" && password === "9419166095") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  // 🔐 LOGIN SCREEN
  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Admin Login
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2 mb-4 rounded"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-4 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Login
          </button>

        </div>
      </div>
    );
  }

  // 🔥 AFTER LOGIN → YOUR DASHBOARD
  return <Dashboard />;
}

// 👇 separate dashboard component
async function Dashboard() {
  const res = await fetch("https://chinaproduct.in/api/enquiries", {
    cache: "no-store",
  });

  const result = await res.json();
  const inquiries = result.data || [];

  return (
    <main className="min-h-screen bg-gray-100 text-black p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <h1 className="text-4xl font-bold text-black">
            Inquiry Dashboard
          </h1>

          <div className="bg-black text-white px-4 py-2 rounded-xl">
            Total Leads: {inquiries.length}
          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-auto bg-white text-black rounded-2xl shadow-lg">

          <table className="w-full border-collapse text-black">

            <thead className="bg-black text-white">
              <tr>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Company</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">City</th>
                <th className="p-4 text-left">Requirement</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-500">
                    No inquiries found
                  </td>
                </tr>
              ) : (
                inquiries.map((item: any, i: number) => (
                  <tr key={i} className="border-b hover:bg-gray-50">

                    <td className="p-4 font-medium">
                      {item.customer_name}
                    </td>

                    <td className="p-4">
                      {item.phone}
                    </td>

                    <td className="p-4">
                      {item.company_name}
                    </td>

                    <td className="p-4">
                      {item.product_category}
                    </td>

                    <td className="p-4">
                      {item.city}
                    </td>

                    <td className="p-4 max-w-xs">
                      {item.business_description}
                    </td>

                    <td className="p-4">
                      <a
                        href={`https://wa.me/${item.phone}`}
                        target="_blank"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                      >
                        WhatsApp
                      </a>
                    </td>

                  </tr>
                ))
              )}
            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}