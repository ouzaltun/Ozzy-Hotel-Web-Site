import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Recommendation from "@/components/Recommendation";
import Find from "@/components/Find";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Featured></Featured>
      <About></About>
      <Recommendation></Recommendation>
      <Find></Find>
      <Testimonials></Testimonials>
      <Footer></Footer>
      <div className="h-[4000px]"></div>
    </main>
  );
}
