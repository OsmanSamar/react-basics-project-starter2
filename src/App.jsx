import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Heading } from "@chakra-ui/react";
import { SearchRecipe } from "./components/SearchRecipe";

export const App = () => {
  // Your state code here
  const [recipes, setRecipes] = useState([]);
  //const [selectedRecipe, setSelectedRecipe] = useState(null);

  // const handleRecipeSelect = (recipe) => {
  //  setSelectedRecipe(recipe);
  // };
  const handleSearch = (filteredRecipes) => {
    console.log(filteredRecipes);
  };

  return (
    <>
      <Heading textAlign="center" mb="5" fontSize="4xl" color="white">
        Winc Recipe Checker
      </Heading>
      <SearchRecipe clickFn={handleSearch} />
      <RecipeListPage />
    </>
  );
};
