import {
  Boxes,
  BadgeCheck,
  Settings,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Direct From China",
    desc: "No middlemen, better pricing.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Products",
    desc: "Verified and quality checked suppliers.",
  },
  {
    icon: Settings,
    title: "Custom Requirements",
    desc: "Products sourced as per your need.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    desc: "From sourcing to shipping assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Delivery",
    desc: "Secure packaging & timely dispatch.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="bg-black py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-yellow-500 uppercase font-bold tracking-wide">
            Why Choose Us?
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-4">

            Your Trusted Import Partner

          </h2>

        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="border border-gray-800 rounded-3xl p-8 bg-gradient-to-b from-[#111] to-black hover:border-yellow-500 transition"
              >

                <div className="bg-yellow-500/10 w-16 h-16 rounded-2xl flex items-center justify-center">

                  <Icon className="text-yellow-500" size={30} />

                </div>

                <h3 className="text-white text-2xl font-bold mt-8">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">

                  {item.desc}

                </p>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}