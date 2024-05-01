// "use client";

// import React, { useState, useEffect } from "react";

// const RecipeCards = () => {
//   const [recipe, setRecipe] = useState(null); // Tillstånd för att lagra receptet från servern
//   const [loading, setLoading] = useState(false); // Tillstånd för att indikera om sökningen pågår eller inte

//   // Funktion för att hämta och hantera recept från servern
//   const fetchRecipe = async () => {
//     setLoading(true); // Uppdatera tillståndet för att visa "Loading..."
//     try {
//       const response = await fetch("http://localhost:4000/recipes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt: "Give me a recipe!" }), // Skicka en prompt för att generera receptet
//       });
//       const data = await response.json(); // Konvertera svaret till JSON-format
//       setRecipe(data); // Spara receptet i tillståndet
//     } catch (error) {
//       console.error("Error fetching recipe:", error);
//     } finally {
//       setLoading(false); // Uppdatera tillståndet för att dölja "Loading..."
//     }
//   };

//   // Anropa fetchRecipe när komponenten först renderas
//   useEffect(() => {
//     fetchRecipe();
//   }, []);

//   // Om receptet inte har hämtats ännu, visa en laddningsindikator
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Rendera receptet
//   return (
//     <div className="recipe-card text-white">
//       {recipe && (
//         <>
//           <h2 className="text-black">title:{recipe.title}</h2>
//           <h3>Ingredients:</h3>
//           <ul>
//             {recipe.ingredients &&
//               recipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//           </ul>
//           <h3>Steps:</h3>
//           <ol>
//             {recipe.steps &&
//               recipe.steps.map((step, index) => <li key={index}>{step}</li>)}
//           </ol>
//           <p>Historical Description: {recipe.historical_description}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default RecipeCards;
