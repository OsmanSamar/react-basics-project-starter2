import { Center, Input, Heading } from "@chakra-ui/react";
//import { useState } from "react";

export const Header = (props) => {
  const { search, onInputChange } = props;
  return (
    <Center mb="10">
      <form className="Search-form">
        <Heading textAlign="center" mb="5" fontSize="4xl" color="white">
          Winc Recipe Checker
        </Heading>
        <Input
          placeholder="Search recipe"
          htmlSize={50}
          width="auto"
          bg="white"
          value={search}
          onChange={onInputChange}
        />
      </form>
    </Center>
  );
};
