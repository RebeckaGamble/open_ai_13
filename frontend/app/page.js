import BannerContent from "./components/Banner";
import Hero from "./components/Hero";
import AiInputSection from "./components/ai/AiInputSection";
import FaqSection from "./components/faq/FaqSection";
import ReviewSection from "./components/reviews/ReviewSection";

export default function Home() {
  return (
    <main>
       <Hero /> 
       <BannerContent /> 
       <AiInputSection />
       <FaqSection />
       <ReviewSection />
    </main>
  );
}
