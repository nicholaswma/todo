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
import { TriangleUpIcon } from "@chakra-ui/icons";
import WeeklyBox from "./Components/WeeklyBox";
import List from "./Components/List";
import AddTodo from "./Components/AddTodo";
import { useState, useEffect } from "react";
import "./App.css";
import { ethers } from "ethers";
import abi from "./utils/Todo.json";
declare var window: any;

function App() {
  const address: string = "0xA12C4673b4E5B0269F81C32ae3573C72eEfa1656";
  const [todo, setTodo] = useState<any[]>([]);
  const checkBrowser = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Install MM");
      } else {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const todoCon = new ethers.Contract(address, abi.abi, signer);
        const getData = await todoCon.getTasks();
        setTodo(getData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const weekly: string[] = [
    "Weekly Activity",
    "Worked This Week",
    "Project Worked",
  ];

  useEffect(() => {
    checkBrowser();
    getData();
  }, []);
  return (
    <div className="App">
      <Grid
        templateColumns="repeat(5, 1fr)"
        paddingTop={"10rem"}
        maxW={"1920px"}
      >
        <GridItem colSpan={1} background={"white"}></GridItem>
        <GridItem colSpan={4}>
          <Box h="85vh" bg="#F1F1F1" borderRadius={"25px"}>
            <Flex
              flexDir={"row"}
              justifyContent={"space-between"}
              paddingTop={"4rem"}
              paddingBottom={"2rem"}
              paddingX={"4rem"}
            >
              <Box>
                <Text fontWeight={800} fontFamily={"Poppins"} fontSize={"36px"}>
                  Today
                </Text>
                <Text fontFamily={"Poppins"} fontSize={"20px"}>
                  Wed Feb 24 2022
                </Text>
              </Box>

              {/* TIMER BUTTON */}
              <Flex borderRadius={"25px"} bg="white" w="320px">
                <Center
                  fontWeight={800}
                  fontFamily={"Poppins"}
                  fontSize={"20px"}
                  paddingLeft={"30px"}
                >
                  <Text paddingRight={"30px"}>Start Time Tracker</Text>
                  <Box borderRadius={"15px"} bg="#FABB18" w="50px" h="50px">
                    <Center paddingTop={"15px"} paddingLeft={"5px"}>
                      <TriangleUpIcon className={"play-button"} />
                    </Center>
                  </Box>
                </Center>
              </Flex>
            </Flex>
            <Flex paddingX={"4rem"} paddingBottom={"14px"}>
              <AddTodo />
            </Flex>
            <Flex paddingX={"4rem"} flexDir={"column"}>
              <List data={todo} />
            </Flex>
            <Grid
              templateColumns="repeat(3, 1fr)"
              justifyContent={"space-between"}
              paddingX={"3rem"}
            >
              {weekly.map((type: string, index: number) => (
                <GridItem key={index} colSpan={1} padding={"1rem"}>
                  <WeeklyBox category={type} />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
