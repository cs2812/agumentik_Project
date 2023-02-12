import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "../App.css";
import DataTabs from "../components/Tasbs";

function Home() {
  return (
    <Box className="homepage" position="absolute" top={"-0.7"}>
      <Text
        fontFamily={""}
        mt="40px"
        color={"white"}
        fontSize={"6xl"}
        fontWeight="600"
      >
        Ready to take off?
      </Text>
      <Box
        width={"70%"}
        height={"31%"}
        bg="white"
        margin={"auto"}
        marginTop="20%"
        borderRadius={"10px"}
        p={"20px 10px"}
      >
        <Box position={"absolute"} left="17.2%" textAlign={"left"} fontFamily={"Poppins"}>
          <Text fontSize={"2xl"} fontWeight={"500"} >Search Flight</Text>
          <Text fontSize={"small"} fontWeight={"500"} color={"gray"}>Get the latest on our covide 19 responses</Text>
        </Box>
        <DataTabs/>
      </Box>
    </Box>
  );
}

export default Home;
