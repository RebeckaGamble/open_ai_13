import Hero from "./components/Hero";
import RecipeOutput from "./components/recipes/RecipeOutput";
import AiInputSection from "./components/ai/AiInputSection";

export default function Home() {
  return (
    <main>
       <Hero />
       <h1>hello world</h1>
      
       <AiInputSection />
       <RecipeOutput />
    </main>
  );
}
