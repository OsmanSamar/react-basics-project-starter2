import { Center, Input, Heading } from "@chakra-ui/react";
//import { useState } from "react";

export const Header = (props) => {
  const { search, onInputChange } = props;
  return (
    <Center mb="10" pt="5" textAlign="center">
      <form className="Search-form">
        <Heading
          textAlign="center"
          m="7"
          fontSize={["xl", "2xl", "3xl"]}
          color="white"
          //margin="0.5rem 5%"
        >
          Winc Recipe Checker
        </Heading>
        <Input
          placeholder="Search recipe"
          //htmlSize={50}
          width="40vw"
          minW={300}
          padding="2"
          // margin="0.5rem 5%"
          bg="white"
          value={search}
          onChange={onInputChange}
        />
      </form>
    </Center>
  );
};
