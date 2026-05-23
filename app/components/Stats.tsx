import {
  Users,
  Boxes,
  BadgeCheck,
  ShieldCheck,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "1000+",
    title: "Happy Clients",
  },
  {
    icon: Boxes,
    number: "5000+",
    title: "Products",
  },
  {
    icon: BadgeCheck,
    number: "100+",
    title: "Verified Suppliers",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Customer Satisfaction",
  },
];

const testimonials = [
  {
    name: "Rahul Traders",
    review:
      "Excellent sourcing support and genuine suppliers from China.",
  },
  {
    name: "M.K Electronics",
    review:
      "Very professional handling and timely shipment delivery.",
  },
  {
    name: "Apex Enterprises",
    review:
      "Helped us scale our importing business smoothly.",
  },
];

export default function Stats() {

  return (

    <section className="relative -mt-20 z-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* STATS */}

        <div className="bg-white rounded-[35px] shadow-2xl border border-gray-200 overflow-hidden grid md:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="flex items-center gap-5 p-8 border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0 hover:bg-gray-50 transition"
              >

                <div className="bg-yellow-100 p-4 rounded-2xl shadow-sm">

                  <Icon
                    className="text-yellow-600"
                    size={32}
                  />

                </div>

                <div>

                  <h3 className="text-4xl font-black text-black">
                    {item.number}
                  </h3>

                  <p className="text-gray-500 font-medium mt-1">
                    {item.title}
                  </p>

                </div>

              </div>

            );
          })}

        </div>

        {/* TESTIMONIALS */}

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 hover:-translate-y-2 transition duration-300"
            >

              {/* STARS */}

              <div className="flex items-center gap-1 mb-5">

                <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                <Star className="fill-yellow-400 text-yellow-400 w-5 h-5" />

              </div>

              {/* REVIEW */}

              <p className="text-gray-600 leading-relaxed text-lg">

                "{item.review}"

              </p>

              {/* CLIENT */}

              <div className="mt-6">

                <h3 className="font-bold text-black text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  Import Business Client
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}