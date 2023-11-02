import { useState } from "react";
import { data } from "./utils/data";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Header } from "./components/ui/Header";

export const App = () => {
  // Your state code here
  // console.log(data.hits);
  const [selectedRecipe, setSelectedRecipe] = useState();
  const [search, setSerach] = useState("");

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onRecipeClick = (recipe) => {
    console.log("Ik heb op een recipe geklikt! :)", recipe);
    setSelectedRecipe(recipe);
  };

  return (
    <>
      <Header search={search} onInputChange={onInputChange} />

      {!selectedRecipe ? (
        <RecipeListPage search={search} onRecipeClick={onRecipeClick} />
      ) : (
        <RecipePage recipe={selectedRecipe} />
      )}
    </>
  );
};
