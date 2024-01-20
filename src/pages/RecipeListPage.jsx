import React, { useState } from "react";
import {
  Image,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { data } from "../utils/data";
export const RecipeListPage = (props) => {
  // console.log(recipes);
  // console.log("recipes");
  const { search, onRecipeClick } = props;

  const recipes = data.hits.slice(0, 20).filter((recipeContainer) => {
    const { recipe } = recipeContainer;
    return search?.length > 0 ? (recipe.label ?? "").includes(search) : true;
  });

  return (
    <>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        gap="5px"
        mt="10px"
        mb="20px"
        p="10px"
        mr="20px"
      >
        {recipes.map((recipe) => (
          <div key={recipe.recipe.url} onClick={() => onRecipeClick(recipe)}>
            <Card
              w="200px"
              h="400px"
              mt="10px"
              mb="15px"
              pb="10px"
              p="4px"
              bg="white"
              mr="10px"
              borderRadius="10px"
              boxSizing="border-box"
            >
              <CardBody>
                <Image
                  w="100%"
                  h="100px"
                  objectFit="cover"
                  src={recipe.recipe.image}
                  alt={recipe.recipe.label}
                  borderRadius="1rem 1rem 1rem 1rem "
                />
                <Stack mt="2" pt="5px" textAlign="center">
                  <Text fontSize="sm">{recipe.recipe.mealType}</Text>
                  <Heading as="h3" size="sm" textAlign="center">
                    {recipe.recipe.label}
                  </Heading>
                  {recipe.recipe.healthLabels.includes("Vegan") && (
                    <Text fontSize="sm" textAlign="center">
                      Vegan
                    </Text>
                  )}
                  {recipe.recipe.healthLabels.includes("Vegetarian") && (
                    <Text fontSize="sm" textAlign="center">
                      <span style={{ backgroundColor: "#ffe6ff" }}>
                        Vegetarian
                      </span>
                    </Text>
                  )}
                  <Text fontSize="sm" textAlign="center">
                    <span style={{ backgroundColor: "#ccffe6" }}>
                      {recipe.recipe.dietLabels}
                    </span>
                  </Text>
                  s
                  <Text fontSize="sm" textAlign="center">
                    Dish :{recipe.recipe.dishType}
                  </Text>
                  <Text fontSize="sm" textAlign="center">
                    Cautions:
                    <br />
                    <span style={{ backgroundColor: "#ffcccc" }}>
                      {recipe.recipe.cautions}
                    </span>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </div>
        ))}
      </Flex>
    </>
  );
};
