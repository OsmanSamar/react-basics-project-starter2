import { useState } from "react";
import { data } from "../utils/data";
import { RecipeListPage } from "../pages/RecipeListPage";
import { Input, Center } from "@chakra-ui/react";

//created a SearchRecipe component that takes in a clickFn prop
//I used the useState hook to store the search query entered by the user
//using the filter method to filter the data based on the search query.
//The filtered recipes are stored in the filteredRecipes variable.
// rendering an input field that allows the user to enter a search query
// passing the handleChange function as a prop to the TextInput component so that it can be called whenever the user types something in the search field
//We are also passing the matchedRecipes array as an argument to the clickFn function whenever it is called.

export const SearchRecipe = ({ clickFn }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = data.hits.filter((recipe) => {
    const nameMatch = recipe.recipe.label
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const healthLabelMatch = recipe.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return nameMatch || healthLabelMatch;
  });
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div>
        <Center mb="10">
          <form className="Search-form">
            <Input
              placeholder="Search recipe"
              htmlSize={50}
              width="auto"
              bg="white"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </form>
        </Center>

        {filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} />
          </div>
        ))}
      </div>

      <RecipeListPage clickFn={clickFn} recipes={data.hits} />
    </>
  );
};
