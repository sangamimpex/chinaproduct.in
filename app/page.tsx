import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Categories from "./components/Categories";
import WhyChoose from "./components/WhyChoose";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="bg-white">

      <Navbar />

      {/* HOME SECTION */}
      <section id="home">
        <Hero />
      </section>

      <Stats />

      <Categories />

      {/* WHY CHOOSE SECTION */}
      <section id="whychoose">
        <WhyChoose />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />

    </main>
  );
}