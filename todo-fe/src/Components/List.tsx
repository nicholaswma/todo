import { Box, Center, Checkbox, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

function List({ data }: any) {
  return (
    <Box
      bg={"white"}
      borderRadius={"25px"}
      w={"full"}
      height={"10rem"}
      paddingTop={"1rem"}
      paddingLeft={"4rem"}
    >
      {data.map((ele: any, index: number) => (
        <Flex>
          <Checkbox
            size="lg"
            colorScheme="yellow"
            paddingRight={"10px"}
          ></Checkbox>
          <Text fontSize={"16px"} key={index}>
            {ele.task}
          </Text>
        </Flex>
      ))}
    </Box>
  );
}

export default List;
