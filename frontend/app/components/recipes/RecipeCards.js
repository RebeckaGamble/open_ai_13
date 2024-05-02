"use client";

import React, { useState, useEffect } from "react";

export default function RecipeCards({ recipe }) {
  //   const [recipe, setRecipe] = useState(null); // Tillstånd för att lagra receptet från servern
  const [loading, setLoading] = useState(false); // Tillstånd för att indikera om sökningen pågår eller inte

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-card text-white">
      {recipe && (
        <>
          <h2 className="text-black">title:{recipe.title}</h2>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
          <h3>Steps:</h3>
          <ol>
            {recipe.steps &&
              recipe.steps.map((step, index) => <li key={index}>{step}</li>)}
          </ol>
          <p>Historical Description: {recipe.historical_description}</p>
        </>
      )}
    </div>
  );
}
