import Header from "@/components/Header";
import LandingScreen from "./home/LandingScreen";
import TourEvents from "./home/TourEvents";
import HelpToFindCommunity from "./home/HelpToFindCommunity";
import TourDestionations from "./home/TourDestinations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center dark:bg-dark-mode-dark">
      <Header />
      <section className="text-black dark:text-white gap-y-36 flex flex-col">
        <LandingScreen />
        <TourEvents />
        <HelpToFindCommunity />
        <TourDestionations />
      </section>
      <Footer />
    </main>
  );
}
