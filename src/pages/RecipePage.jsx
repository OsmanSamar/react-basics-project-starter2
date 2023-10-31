import React from "react";

export const RecipePage = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <p>Meal type: {recipe.mealType}</p>
      <p>Dish type: {recipe.dishType}</p>
      <p>Total cooking time: {recipe.totalTime}</p>
      <p>Diet label: {recipe.dietLabels.join(", ")}</p>
      <p>Health labels: {recipe.healthLabels.join(", ")}</p>
      <p>Cautions: {recipe.cautions.join(", ")}</p>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.foodId}>{ingredient.text}</li>
        ))}
      </ul>
      <p>Servings: {recipe.yield}</p>
      <p>Total nutrients:</p>
      <ul>
        <li>Energy (kcal): {recipe.totalNutrients.ENERC_KCAL.quantity}</li>
        <li>Protein (g): {recipe.totalNutrients.PROCNT.quantity}</li>
        <li>Fat (g): {recipe.totalNutrients.FAT.quantity}</li>
        <li>Carbs (g): {recipe.totalNutrients.CHOCDF.quantity}</li>
        <li>Cholesterol (mg): {recipe.totalNutrients.CHOLE.quantity}</li>
        <li>Sodium (mg): {recipe.totalNutrients.NA.quantity}</li>
      </ul>
    </div>
  );
};
