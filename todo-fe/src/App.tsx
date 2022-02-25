import { Flex, Text, Grid, GridItem, Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Grid templateColumns="repeat(5, 1fr)" paddingTop={"10rem"}>
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
              <Flex borderRadius={"25px"} bg="white" w="450px">
                <Center
                  fontWeight={800}
                  fontFamily={"Poppins"}
                  fontSize={"20px"}
                  paddingLeft={"30px"}
                >
                  Start Time Tracker
                  <Box bg="#FABB18" w="50px" h="50px"></Box>
                </Center>
              </Flex>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
