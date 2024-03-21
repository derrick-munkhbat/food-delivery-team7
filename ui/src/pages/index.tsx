import { AdminCard } from "@/components/Component/Cards/Admin";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { HomeSlider } from "@/components/HomeSlider";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSlider />
      hello team, this is the homepage.
      <AdminCard />
      <Footer />
    </div>
  );
}
