import { Center, Input, Heading } from "@chakra-ui/react";
//import { useState } from "react";

export const Header = (props) => {
  const { search, onInputChange } = props;
  return (
    <Center mb="10" textAlign="center">
      <form className="Search-form">
        <Heading textAlign="center" mb="5" fontSize="3xl" color="white">
          Winc Recipe Checker
        </Heading>
        <Input
          placeholder="Search recipe"
          //htmlSize={50}
          width="40vw"
          minW={200}
          padding="2"
          bg="white"
          value={search}
          onChange={onInputChange}
        />
      </form>
    </Center>
  );
};
