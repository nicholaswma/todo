import { Flex, Text, Grid, GridItem, Box, Center } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import WeeklyBox from "./Components/WeeklyBox";
import "./App.css";

function App() {
  const weekly: string[] = [
    "Weekly Activity",
    "Worked This Week",
    "Project Worked",
  ];
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
              padding={"4rem"}
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
            <Grid
              templateColumns="repeat(3, 1fr)"
              justifyContent={"space-between"}
              paddingX={"4rem"}
            >
              {weekly.map((type: string) => (
                <GridItem colSpan={1} padding={"1rem"}>
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
