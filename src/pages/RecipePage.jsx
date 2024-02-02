import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Center,
  Flex,
  VStack,
  CardHeader,
  Badge,
} from "@chakra-ui/react";

import { FaArrowLeft } from "react-icons/fa";

export const RecipePage = ({ recipe, clickFn, ReSetRecipes }) => {
  console.log("REcipepage", recipe);

  return (
    <Center onClick={() => clickFn(recipe)}>
      <Card
        // borderRadius="xl"
        // w={{ base: "90%", md: "70%" }}
        //h={{ base: "500px", md: "400px" }}
        //w={{ base: "90%", md: "60%" }}
        // h="auto"
        // mb="7px"
        // mt="7px"
        //  margin="10px"
        // p="10px"
        //  bgColor="white"
        //  flexDirection="column"
        //  cursor="pointer"
        // _hover={{ transform: "scale(1.01)" }}
        borderRadius="xl"
        // w={{ base: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" }}
        // h="auto"
        // mb="7px"
        // mt="7px"
        //margin="10px"
        // p="10px"
        //w="550px"
        // h="6xl"
        w={{ base: " 700px", md: " 620px" }}
        h={{ base: "10xl", md: "auto", lg: "auto" }}
        mb="8"
        mt="8"
        m="8"
        p="2"
        overflow="visible"
        position="relative"
        bgColor="white"
        flexDirection="column"
        cursor="pointer"
        _hover={{ transform: "scale(1.01)" }}
      >
        <CardHeader
          onClick={() => {
            ReSetRecipes();

            // window.location.href = "/overview";
            //is a JavaScript property that returns the URL of the current page.
          }}
        >
          <FaArrowLeft size={14} />
        </CardHeader>
        <Image
          w="100%"
          h="25rem"
          objectFit="cover"
          src={recipe.recipe.image}
          borderRadius="1rem 1rem 1rem 1rem"
        />
        {/* <Flex direction="row"> */}
        <Flex direction={{ base: "column", lg: "row" }} spacing="4">
          {/* <Stack direction="column" w="50%"> */}
          <Stack
            direction="column"
            w={{ base: "100%", md: " 60%", lg: "50%" }}
            spacing="4"
          >
            <VStack mt="3" spacing="3">
              <CardBody fontFamily="bold" borderRadius="md">
                <div>
                  <Text> {recipe.recipe.mealType}</Text>
                  <Heading size="md" fontFamily="bold">
                    {recipe.recipe.label}
                  </Heading>{" "}
                  <br />
                  <Text fontFamily="bold" fontSize="l">
                    Total cooking time: {recipe.recipe.totalTime} Minutes
                  </Text>
                  <Text fontFamily="bold" fontSize="l">
                    Servings: {recipe.recipe.yield}
                  </Text>
                  <br />
                  <Text fontSize="xl" fontFamily="bold">
                    Ingredient:
                  </Text>
                  <ul>
                    {recipe.recipe.ingredients.map((ingredient) => (
                      <Text fontFamily="bold" key={ingredient.foodId}>
                        {ingredient.text}
                      </Text>
                    ))}
                  </ul>
                </div>
              </CardBody>
            </VStack>
          </Stack>

          {/* <Stack direction="column" w="50%"> */}
          <Stack direction="column" w={{ base: "100%", lg: "50%" }} spacing="4">
            <VStack mt="3" spacing="3">
              <CardBody fontFamily="bold" borderRadius="md">
                <div>
                  <Text fontSize="xl">
                    Health labels: <br />{" "}
                  </Text>
                  {/* <span style={{ backgroundColor: "#ffe6ff" }}>
                    {recipe.recipe.healthLabels.join(", ")}
                  </span> */}
                  {recipe.recipe.healthLabels.map((label) => (
                    <Badge key={label} colorScheme="purple" mr="2">
                      {label}
                    </Badge>
                  ))}

                  <Text fontSize="xl">
                    Diet: <br />{" "}
                  </Text>

                  <span style={{ backgroundColor: "#ccffe6" }}>
                    {recipe.recipe.dietLabels.join(", ")}
                  </span>

                  <Text fontSize="xl">Cautions: </Text>
                  <span style={{ backgroundColor: "#ffcccc" }}>
                    {recipe.recipe.cautions.join(", ")}
                  </span>

                  <Text fontSize="xl">Total nutrients:</Text>
                  <ul>
                    <li>
                      Energy (kcal):{" "}
                      {recipe.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(
                        0
                      )}
                    </li>
                    <li>
                      Protein (g):{" "}
                      {recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(0)}
                    </li>
                    <li>
                      Fat (g):{" "}
                      {recipe.recipe.totalNutrients.FAT.quantity.toFixed(0)}
                    </li>
                    <li>
                      Carbs (g):{" "}
                      {recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(0)}
                    </li>
                    <li>
                      Cholesterol (mg):{" "}
                      {recipe.recipe.totalNutrients.CHOLE.quantity.toFixed(0)}
                    </li>
                    <li>
                      Sodium (mg):{" "}
                      {recipe.recipe.totalNutrients.NA.quantity.toFixed(0)}
                    </li>
                  </ul>
                </div>
              </CardBody>
            </VStack>
          </Stack>
        </Flex>
      </Card>
    </Center>
  );
};
