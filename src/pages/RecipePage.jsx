//import React from "react";

//export const RecipePage = () => {
// return <h1>RecipePage</h1>;
//};

import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  console.log('REcipepage', recipe)
  return (
    <Center
      bgColor="blue.100"
      h="100vh"
      flexDirection="column"
      onClick={() => clickFn(recipe)}
    >
      <Card borderRadius="xl" w="3xl" h="3xl">
        <CardBody>
          <Image h={64} w="sm" src={recipe.recipe.image} borderRadius="xl" />
          <Stack mt="6" spacing="3">
            <Heading>{recipe.recipe.label}</Heading>
            <Text>Meal type: {recipe.recipe.mealType}</Text>
            <Text>Dish type: {recipe.recipe.dishType}</Text>
            <Text>Total cooking time: {recipe.recipe.totalTime}</Text>
            <Text>Diet label: {recipe.recipe.dietLabels.join(", ")}</Text>s
            <Text>Health labels: {recipe.recipe.healthLabels.join(", ")}</Text>
            <Text>Cautions: {recipe.recipe.cautions.join(", ")}</Text>
            <ul>
              {recipe.recipe.ingredients.map((ingredient) => (
                <li key={ingredient.foodId}>{ingredient.text}</li>
              ))}
            </ul>
            <Text>Servings: {recipe.recipe.yield}</Text>
            <Text>Total nutrients:</Text>
            <ul>
              <li>
                Energy (kcal):{" "}
                {recipe.recipe.totalNutrients.ENERC_KCAL.quantity}
              </li>
              <li>
                Protein (g): {recipe.recipe.totalNutrients.PROCNT.quantity}
              </li>
              <li>Fat (g): {recipe.recipe.totalNutrients.FAT.quantity}</li>
              <li>Carbs (g): {recipe.recipe.totalNutrients.CHOCDF.quantity}</li>
              <li>
                Cholesterol (mg): {recipe.recipe.totalNutrients.CHOLE.quantity}
              </li>
              <li>Sodium (mg): {recipe.recipe.totalNutrients.NA.quantity}</li>
            </ul>
            <Button w="fit-content" onClick={() => clickFn()}>
              Back to overview
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
