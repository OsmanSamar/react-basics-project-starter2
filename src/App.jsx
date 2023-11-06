import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Header } from "./components/Header";

export const App = () => {
  // Your state code here
  // console.log(data.hits);
  const [selectedRecipe, setSelectedRecipe] = useState();
  const [search, setSerach] = useState("");

  const onRecipeClick = (recipe) => {
    console.log("Ik heb op een recipe geklikt! :)", recipe);
    setSelectedRecipe(recipe);
  };

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  //render the Header component if selectedRecipe is falsy. If selectedRecipe is truthy, the Header component will not be rendered.
  return (
    <>
      {!selectedRecipe ? (
        <Header search={search} onInputChange={onInputChange} />
      ) : null}

      {!selectedRecipe ? (
        <RecipeListPage search={search} onRecipeClick={onRecipeClick} />
      ) : (
        <RecipePage recipe={selectedRecipe} />
      )}
    </>
  );
};
