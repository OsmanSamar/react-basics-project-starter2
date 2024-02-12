//import React, { useState } from "react";
import {
  Image,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  Flex,
  Badge,
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
        w="100%"
        justifyContent="center"
        align="center"
        gap="5px"
        mt="10px"
        mb="20px"
        pt="40px"
        pb="20px"
        px={{ base: 0, md: 10 }}
      >
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.recipe.url} onClick={() => onRecipeClick(recipe)}>
              <Card
                // w=" 200px"
                w={{ base: "300px", md: "250px" }}
                shadow="md"
                rounded="lg"
                h="400px"
                //h={{ base: "500px", md: "400px" }}
                //  mt="10px"
                //  mb="20px"
                // pb="10px"
                // p="4px"
                bg="white"
                //  mr="10px"

                m="2"
                p="2"
                borderRadius="20px"
                boxSizing="border-box"
              >
                <CardBody>
                  <Image
                    w="100%"
                    h="100px"
                    objectFit="cover"
                    src={recipe.recipe.image}
                    alt={recipe.recipe.label}
                    borderRadius="1rem 1rem 1rem 1rem"
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
                        {/* <span style={{ backgroundColor: "#ffe6ff" }}>
                        Vegetarian
                      </span> */}

                        <Badge colorScheme="pink" mr="2">
                          Vegetarian
                        </Badge>
                      </Text>
                    )}
                    <Text fontSize="sm" textAlign="center">
                      {/* <span style={{ backgroundColor: "#ccffe6" }}>
                      {recipe.recipe.dietLabels}
                    </span> */}

                      {recipe.recipe.dietLabels.map((label) => (
                        <Badge key={label} colorScheme="green" mr="2">
                          {label}
                        </Badge>
                      ))}
                    </Text>

                    <Text fontSize="sm" textAlign="center">
                      Dish :{recipe.recipe.dishType}
                    </Text>
                    <Text fontSize="sm" textAlign="center">
                      Cautions:
                      <br />
                      {/* <span style={{ backgroundColor: "#ffcccc" }}>
                      {recipe.recipe.cautions}
                    </span> */}
                      {recipe.recipe.cautions.map((label) => (
                        <Badge key={label} colorScheme="red" mr="2">
                          {label}
                        </Badge>
                      ))}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </div>
            // ))}
          ))
        ) : (
          <p>No recipes found for "{search}". Try a different search term.</p>
        )}
      </Flex>
    </>
  );
};
