import React, { useState } from "react";
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Box,
  Center,
  Input,
  Button,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import abi from "../utils/Todo.json";
declare var window: any;

function AddTodo() {
  const address: string = "0xA12C4673b4E5B0269F81C32ae3573C72eEfa1656";

  const [todo, setTodo] = useState<string>("");
  const addToEth = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const todoCon = new ethers.Contract(address, abi.abi, signer);
        const addToList = await todoCon.createTask(todo);
        console.log("adding!");
        addToList.wait();
        console.log(
          `Mined! Check transaction at https://rinkeby.etherscan.io/tx/${addToList.hash}`
        );
      }
    } catch (error) {}
  };
  return (
    <Box
      bg={"white"}
      borderRadius={"25px"}
      w={"full"}
      height={"10rem"}
      paddingTop={"1rem"}
      paddingX={"2rem"}
    >
      <Flex flexDir={"column"} paddingTop={"14px"}>
        <Flex paddingBottom={"14px"}>
          <Input
            colorScheme={"green"}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          ></Input>
        </Flex>
        <Button onClick={addToEth}>Add to List</Button>
      </Flex>
    </Box>
  );
}

export default AddTodo;
