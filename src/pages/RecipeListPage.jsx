import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0].recipe.label);
  const recipes = data.hits.slice(0, 20);
  console.log(recipes);

  return (
    <Flex flexWrap="wrap" justifyContent="center" mt="20px">
      {recipes.map((recipe) => (
        <div key={recipe.recipe.uri}>
          <Card
            w="200px"
            h="50x"
            mt="10px"
            borderRadius="10px"
            pb="10px"
            bg="white"
            mr="10px"
          >
            <CardBody>
              <Image
                h="100%"
                w="100%"
                objectFit="cover"
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                borderRadius="sm"
              />
              <Stack mt="6" pt="10px" textAlign="center">
                <Text fontSize="md">{recipe.recipe.mealType}</Text>
                <Heading as="h3" size="md" textAlign="center">
                  {recipe.recipe.label}
                </Heading>
                {recipe.recipe.healthLabels.includes("Vegan") && (
                  <Text fontSize="md" textAlign="center">
                    Vegan
                  </Text>
                )}
                {recipe.recipe.healthLabels.includes("Vegetarian") && (
                  <Text fontSize="md" textAlign="center">
                    <span style={{ backgroundColor: "plum" }}>Vegetarian</span>
                  </Text>
                )}
                <Text fontSize="md" textAlign="center">
                  <span style={{ backgroundColor: "cyan " }}>
                    {recipe.recipe.dietLabels}
                  </span>
                </Text>
                <Text fontSize="md" textAlign="center">
                  Dish :{recipe.recipe.dishType}
                </Text>

                <Text fontSize="md" textAlign="center">
                  Cautions{" "}
                  <span style={{ backgroundColor: "lightsalmon" }}>
                    :{recipe.recipe.cautions}
                  </span>
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
      ))}
    </Flex>
  );
};
