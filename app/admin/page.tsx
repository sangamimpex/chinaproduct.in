async function getInquiries() {
  const res = await fetch("/api/customers", {
    cache: "no-store",
  });

  return res.json();
}

export default async function AdminPage() {
  const result = await getInquiries();
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

        {/* TABLE WRAPPER */}
        <div className="overflow-auto bg-white text-black rounded-2xl shadow-lg">

          <table className="w-full border-collapse text-black">

            {/* TABLE HEAD */}
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

            {/* TABLE BODY */}
            <tbody>
              {inquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-500">
                    No inquiries found
                  </td>
                </tr>
              ) : (
                inquiries.map((item: any) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 text-black"
                  >
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
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg inline-block"
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