import Hero from "./components/Hero";
import RecipeOutput from "./components/recipes/RecipeOutput";
import AiInputSection from "./components/ai/AiInputSection";
import FaqSection from "./components/faq/FaqSection";
import ReviewSection from "./components/reviews/ReviewSection";

export default function Home() {
  return (
    <main>
       <Hero />      
       <AiInputSection />
       <RecipeOutput />
       <FaqSection />
       <ReviewSection />
    </main>
  );
}
