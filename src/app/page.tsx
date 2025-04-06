import { main } from "motion/react-client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardDemo";
import { GridSmallBackgroundDemo } from "./components/Grid";
import UpcomingWebinar from "./components/UpcomingWebinar";
import Instructors from "./components/Instructors";
import Footer from "./components/ui/Footer";
// import {HeroSection} from "@/app/components/ui/HeroSection"

export default function Home() {
  return (
    <main className="min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      {/* <h1 className="text-2xl text-center">Hi Abhishek</h1> */}
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <InfiniteMovingCardsDemo/>
     <UpcomingWebinar/>
     <Instructors/>
     <Footer/>
    </main>
  );
}
