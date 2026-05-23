import ContactForm from "@/app/components/ContactForm";

const categoryNames: any = {
  "electronics": "Electronics",
  "mobile-accessories": "Mobile Accessories",
  "industrial-machinery": "Industrial Machinery",
  "packaging-products": "Packaging Products",
  "solar-products": "Solar Products",
  "electrical-equipment": "Electrical Equipment",
  "led-lighting": "LED Lighting",
  "auto-accessories": "Auto Accessories",
  "home-decor": "Home Decor",
  "kitchen-products": "Kitchen Products",
  "furniture": "Furniture",
  "fashion-accessories": "Fashion Accessories",
  "watches": "Watches",
  "gym-accessories": "Gym Accessories",
  "baby-products": "Baby Products",
  "pet-products": "Pet Products",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const category =
    categoryNames[slug] || "Products";

  return (

    <main className="bg-white min-h-screen">

      {/* HERO */}

      <section className="relative py-32 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-black"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-yellow-600/20"></div>

        <div className="relative max-w-7xl mx-auto text-center">

          <p className="text-yellow-500 uppercase tracking-[4px] font-bold">

            China Product Sourcing

          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-tight">

            {category}

          </h1>

          <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">

            Import premium quality {category.toLowerCase()}{" "}
            directly from trusted China suppliers with
            Sangam Impex.

          </p>

        </div>

      </section>

      {/* INFO SECTION */}

      <section className="py-24 px-6 bg-[#f8f8f8]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h3 className="text-2xl font-black text-black mb-4">
              Verified Suppliers
            </h3>

            <p className="text-gray-600 leading-relaxed">
              We source products only from trusted and
              verified Chinese manufacturers.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h3 className="text-2xl font-black text-black mb-4">
              Wholesale Pricing
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Get factory-direct rates and competitive
              pricing for bulk imports.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <h3 className="text-2xl font-black text-black mb-4">
              Shipping Support
            </h3>

            <p className="text-gray-600 leading-relaxed">
              End-to-end logistics and PAN India delivery
              support available.
            </p>

          </div>

        </div>

      </section>

      {/* SUPABASE FORM */}

      <ContactForm />

    </main>
  );
}