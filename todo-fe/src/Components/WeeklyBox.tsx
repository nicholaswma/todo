import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

function WeeklyBox({ category }: any) {
  return (
    <Box
      bg={"white"}
      borderRadius={"25px"}
      w={"full"}
      height={"10rem"}
      paddingTop={"1rem"}
      paddingLeft={"2rem"}
    >
      <Flex justifyContent={"space-between"} paddingRight={"1rem"}>
        <Text fontFamily={"Poppins"} fontSize={"20px"}>
          {category}
        </Text>
        <Text
          fontFamily={"Poppins"}
          fontWeight={800}
          fontSize={"20px"}
          cursor={"pointer"}
        >
          :
        </Text>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        paddingRight={"1rem"}
        paddingTop={"15px"}
      >
        <Text
          fontFamily={"Poppins"}
          fontSize={"28px"}
          fontWeight={800}
          paddingTop={"1rem"}
        >
          0%
        </Text>
        <Box
          borderRadius={"15px"}
          bg="#FABB18"
          opacity={"0.1"}
          w="70px"
          h="70px"
        ></Box>
      </Flex>
    </Box>
  );
}

export default WeeklyBox;
