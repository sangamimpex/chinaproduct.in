"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔐 LOGIN
  const handleLogin = () => {
    if (username === "admin" && password === "9419166095") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  // 📦 FETCH DATA
  useEffect(() => {
    if (loggedIn) {
      setLoading(true);

      fetch("/api/test", {
        headers: {
          Authorization: "Bearer 9419166095",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("API DATA:", data);

          setInquiries(data.data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [loggedIn]);

  // 🔐 LOGIN SCREEN
  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-black">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Admin Login
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 p-3 mb-4 rounded-lg"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 mb-4 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Login
          </button>

        </div>
      </div>
    );
  }

  // 📊 DASHBOARD
  return (
    <main className="min-h-screen bg-gray-100 text-black p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            Inquiry Dashboard
          </h1>

          <div className="bg-black text-white px-4 py-2 rounded-xl">
            Total Leads: {inquiries.length}
          </div>

        </div>

        {/* LOADING */}
        {loading && (
          <p className="mb-4 text-gray-700">
            Loading data...
          </p>
        )}

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow overflow-x-auto">

          <table className="min-w-[1800px] border-collapse">

            {/* TABLE HEADER */}
            <thead className="bg-black text-white whitespace-nowrap">
              <tr>
                <th className="p-4 text-left">Customer Name</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Company Name</th>
                <th className="p-4 text-left">GST Number</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Requirement</th>
                <th className="p-4 text-left">Quantity</th>
                <th className="p-4 text-left">Target Price</th>
                <th className="p-4 text-left">Import Experience</th>
                <th className="p-4 text-left">City</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {inquiries.length === 0 ? (

                <tr>
                  <td
                    colSpan={13}
                    className="p-6 text-center text-gray-500"
                  >
                    No inquiries found
                  </td>
                </tr>

              ) : (

                inquiries.map((item: any) => (

                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 whitespace-nowrap"
                  >

                    <td className="p-4">
                      {item.customer_name || "-"}
                    </td>

                    <td className="p-4">
                      {item.phone || "-"}
                    </td>

                    <td className="p-4">
                      {item.company_name || "-"}
                    </td>

                    <td className="p-4">
                      {item.gst_number || "-"}
                    </td>

                    <td className="p-4">
                      {item.email || "-"}
                    </td>

                    <td className="p-4">
                      {item.product_category || "-"}
                    </td>

                    <td className="p-4 max-w-xs whitespace-normal">
                      {item.business_description || "-"}
                    </td>

                    <td className="p-4">
                      {item.quantity_required || "-"}
                    </td>

                    <td className="p-4">
                      ₹ {item.target_price || "-"}
                    </td>

                    <td className="p-4">
                      {item.city || "-"}
                    </td>

                    <td className="p-4">
                      {item.created_at
                        ? new Date(item.created_at).toLocaleDateString()
                        : "-"}
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