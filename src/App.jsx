import { useState } from "react";
import { data } from "./utils/data";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Heading } from "@chakra-ui/react";
import { RecipePage } from "./pages/RecipePage";
import { SearchRecipe } from "./components/SearchRecipe";
import { TextInput } from "./components/ui/TextInput";

export const App = () => {
  // Your state code here
  //const [recipes, setRecipes] = useState(data.hits[0]);
  const [selectedRecipe, setSelectedRecipe] = useState(data.hits[0]);

  // const handleRecipeSelect = (recipe) => {
  //  setSelectedRecipe(recipe);
  // };
  //const handleSearch = (filteredRecipes) => {
  // console.log(filteredRecipes);
  //};

  return (
    <>
      <Heading textAlign="center" mb="5" fontSize="4xl" color="white">
        Winc Recipe Checker
      </Heading>
      <TextInput />
      {selectedRecipe ? (
        <RecipeListPage item={selectedRecipe} />
      ) : (
        <RecipePage />
      )}
    </>
  );
};
