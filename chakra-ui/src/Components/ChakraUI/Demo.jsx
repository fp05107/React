import React from "react";
import { VStack, StackDivider, Box } from "@chakra-ui/react";

const Demo = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Box h="40px" bg="yellow.100" border="1px solid red">
        1
      </Box>
      <Box h="40px" bg="tomato" w="100%">
        2
      </Box>
      <Box h="40px" bg="pink">
        3
      </Box>
    </VStack>
  );
};

export default Demo;
