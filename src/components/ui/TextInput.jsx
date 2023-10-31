import { Center, Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return (
    <Center mb="10">
      <form className="Search-form">
        <Input placeholder="Search recipe" size="lg" onChange={changeFn} />
      </form>
    </Center>
  );
};
