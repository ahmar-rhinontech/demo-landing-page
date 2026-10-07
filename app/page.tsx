import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Numbers from "./components/Numbers";
import Platform from "./components/Platform";
import Services from "./components/Services";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Showcase />
        <About />
        <Numbers />
        <Platform />
        <Services />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
