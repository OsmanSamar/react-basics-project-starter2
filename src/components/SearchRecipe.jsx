import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";

//created a SearchRecipe component that takes in a clickFn prop
//using the useState hook to keep track of the search query entered by the user.
//using the filter method to filter the data based on the search query.
// rendering an input field that allows the user to enter a search query
// passing the handleChange function as a prop to the TextInput component so that it can be called whenever the user types something in the search field
//We are also passing the filteredRecipes array as an argument to the clickFn function whenever it is called.

export const SearchRecipe = ({ clickFn }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    const filteredRecipes = data.hits.filter((recipe) => {
      const nameMatch = recipe.recipe.label
        .toLowerCase()
        .includes(query.toLowerCase());
      const healthLabelMatch = recipe.recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(query.toLowerCase())
      );
      return nameMatch || healthLabelMatch;
    });
    clickFn(filteredRecipes);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <>
      <TextInput changeFn={handleChange} />
    </>
  );
};
