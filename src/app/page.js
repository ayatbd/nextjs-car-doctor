import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <ServicesSection></ServicesSection>
      <AboutUs></AboutUs>
    </div>
  );
}
