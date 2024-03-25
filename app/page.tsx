import Image from "next/image";
import HeroSection from "./component/HeroSection";
import AchievementsSection from "./component/Achivements";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectSection from "./component/ProjectSection";
import EmailSection from "./component/EmailSection";
// import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen" style={{ backgroundColor: "#000000" }}>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}

        <AboutSection />

        <ProjectSection />
        <EmailSection />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
