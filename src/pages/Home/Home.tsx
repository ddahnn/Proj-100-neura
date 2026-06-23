import { Hero } from "../../components/Hero/Hero";
import { WhoWeAre } from "../../components/WhoWeAre/WhoWeAre";
import BlogCarousel from "../../components/BlogCarousel/BlogCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <BlogCarousel />
    </>
  );
}