import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import searchPageImage from "../image/search.jpg";

import SearchNav from "../components/SearchNav";
import SearchResult from "../components/SearchResult";

const SearchPage = () => {
  const [data,setData]=useState([1,2,3,4,5,6,7,8,9])
  return (
    <Box>
      <SearchNav />
      <Box backgroundColor={"gray"} height="86vh">
        <Box
          textAlign={"center"}
          position="absolute"
          left={"34%"}
          top="6%"
          color={"white"}
        >
          <Text fontSize={"5xl"}>{"10"} search results </Text>
          <Text fontSize={"x-small"}>
            Amet minim mollit non sesiunt ulinmco est sit aliqua doamet
          </Text>
          <Text fontSize={"x-small"}>
            Sint. velit afrcia consequat duis onim
          </Text>
        </Box>
        <Image src={searchPageImage} />
      </Box>
      <Box display={"flex"} flexDirection="column" gap="10px" position={"relative"} top="-122px">
        {/*Search Result*/}
        {data.map((e,i)=>{
          return <SearchResult/>
        })}
      </Box>
    </Box>
  );
};

export default SearchPage;
