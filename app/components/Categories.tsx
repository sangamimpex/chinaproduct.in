import {
  Monitor,
  Smartphone,
  Factory,
  Package,
  Sun,
  Zap,
  Lightbulb,
  Car,
  Home,
  CookingPot,
  Sofa,
  Shirt,
  Watch,
  Dumbbell,
  Baby,
  PawPrint,
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Monitor },
  { name: "Mobile Accessories", icon: Smartphone },
  { name: "Industrial Machinery", icon: Factory },
  { name: "Packaging Products", icon: Package },
  { name: "Solar Products", icon: Sun },
  { name: "Electrical Equipment", icon: Zap },
  { name: "LED Lighting", icon: Lightbulb },
  { name: "Auto Accessories", icon: Car },
  { name: "Home Decor", icon: Home },
  { name: "Kitchen Products", icon: CookingPot },
  { name: "Furniture", icon: Sofa },
  { name: "Fashion Accessories", icon: Shirt },
  { name: "Watches", icon: Watch },
  { name: "Gym Accessories", icon: Dumbbell },
  { name: "Baby Products", icon: Baby },
  { name: "Pet Products", icon: PawPrint },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="py-24 px-6 bg-[#f8f8f8]"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-20">

  <p className="text-yellow-600 font-bold uppercase tracking-[3px] animate-pulse">
    Our Categories
  </p>

  <h2 className="text-5xl md:text-6xl font-black text-black mt-4 leading-tight overflow-hidden">

    <span className="block translate-y-0 hover:-translate-y-1 transition-all duration-500">
    
    </span>

    <span className="block text-yellow-600 drop-shadow-sm hover:-translate-y-1 transition-all duration-700">
     wide range of Products We Source
    </span>

  </h2>

</div>

        {/* GRID */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border border-gray-200 rounded-[25px] overflow-hidden bg-white shadow-xl">

          {categories.map((category, index) => {

            const Icon = category.icon;

            return (

              <a
                key={index}
                href={`/categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
                className="group border border-gray-100 p-8 flex flex-col items-center justify-center text-center hover:bg-black transition"
              >

                <Icon
                  size={36}
                  className="text-yellow-600 group-hover:text-yellow-500 transition"
                />

                <h3 className="mt-5 font-semibold text-black group-hover:text-white transition text-sm leading-snug">

                  {category.name}

                </h3>

              </a>

            );
          })}

        </div>

      </div>

    </section>
  );
}