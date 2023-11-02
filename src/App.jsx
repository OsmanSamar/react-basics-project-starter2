import { useState } from "react";
import { data } from "./utils/data";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Header } from "./components/ui/Header";

export const App = () => {
  // Your state code here
  console.log(data.hits);
  const [selectedRecipe, setSelectedRecipe] = useState(data.hits);
  const [search, setSerach] = useState("");

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  // const handleRecipeSelect = (recipe) => {
  //  setSelectedRecipe(recipe);
  // };
  //const handleSearch = (filteredRecipes) => {
  // console.log(filteredRecipes);
  //};

  return (
    <>
      <Header search={search} onInputChange={onInputChange} />

      {selectedRecipe ? <RecipeListPage /> : <RecipePage />}
    </>
  );
};
