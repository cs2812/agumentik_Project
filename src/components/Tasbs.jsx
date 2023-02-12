import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import {MdOutlineWatchLater} from "react-icons/md"
import {HiOutlineGlobeEuropeAfrica} from "react-icons/hi2"
import {IoCalendarOutline} from "react-icons/io5"
import {CgProfile} from "react-icons/cg"
import { useNavigate } from "react-router-dom";

function DataTabs() {
    const navigate = useNavigate()
    const handleChange=()=>{
        navigate('/search')
    }
  return (
    <Tabs>
      <TabList
        display={"flex"}
        justifyContent="center"
        width={"25%"}
        margin="auto"
      >
        <Tab fontSize={"small"} fontWeight={"600"}>
          Round Flight
        </Tab>
        <Tab fontSize={"small"} fontWeight={"600"}>
          Round Cruise
        </Tab>
      </TabList>
      <TabPanels mt="15px">
        <TabPanel>
          <Box border={""} display={"flex"} justifyContent={"space-between"}>
            {/* Departure and Arival*/}
            <Box display={"flex"}>
              <Box
                display={"flex"}
                borderRadius="10px 0px 0px 10px"
                gap="10px"
                border="1px solid #d0d6db"
                p={"10px 60px 10px 20px"}
              >
                <Box bg="orange" borderRadius="50%" p="0px 7px">
                  <Box mt="6px">
                    <FaPlaneDeparture />
                  </Box>
                </Box>
                <Box textAlign={"left"}>
                  <Text
                    fontSize={"x-small"}
                    fontWeight={"600"}
                    color="gray.400"
                  >
                    Departure city
                  </Text>
                  <Text fontSize={"x-small"} fontWeight={"600"}>
                    CITY NAME
                  </Text>
                </Box>
              </Box>
              {/* Middle Crouse Button of Departure and Arival */}
              <Text
                cursor={"pointer"}
                border={"1px solid #d0d6db"}
                bg="white"
                borderRadius={"50px"}
                position={"absolute"}
                top="47.3%"
                left="20.1%"
              >
                <RiArrowLeftRightFill color="gray" />
              </Text>
              <Box
                display={"flex"}
                borderRadius="0px 10px 10px 0px"
                gap="10px"
                border="1px solid #d0d6db"
                p={"10px 60px 10px 30px"}
              >
                <Box
                  border={"1px solid orange"}
                  bg="orange"
                  borderRadius="50%"
                  p="0px 7px"
                >
                  <Box mt="6px">
                    <FaPlaneArrival />
                  </Box>
                </Box>
                <Box textAlign={"left"}>
                  <Text
                    fontSize={"x-small"}
                    fontWeight={"600"}
                    color="gray.400"
                  >
                    Arival city
                  </Text>
                  <Text fontSize={"x-small"} fontWeight={"600"}>
                    CITY NAME
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              borderRadius="10px"
              gap="10px"
              border="1px solid #d0d6db"
              p={"10px 60px 10px 20px"}
            >
              <Box border={"1px solid #d0d6db"} borderRadius="50%" p="0px 7px">
                <Box mt="6px">
                  <IoCalendarOutline color="blue" />
                </Box>
              </Box>
              <Box textAlign={"left"}>
                <Text fontSize={"x-small"} fontWeight={"600"} color="gray.400">
                  Departure-Arrival
                </Text>
                <Text fontSize={"x-small"} fontWeight={"600"}>
                  29 FEB-one way
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              borderRadius="10px"
              gap="10px"
              border="1px solid #d0d6db"
              p={"10px 60px 10px 20px"}
            >
              <Box border={"1px solid #d0d6db"} borderRadius="50%" p="0px 7px">
                <Box mt="6px">
                  <CgProfile color="blue" />
                </Box>
              </Box>
              <Box textAlign={"left"}>
                <Text fontSize={"x-small"} fontWeight={"600"} color="gray.400">
                  Arival city
                </Text>
                <Text fontSize={"x-small"} fontWeight={"600"}>
                  CITY NAME
                </Text>
              </Box>
            </Box>
            <Button
            onClick={handleChange}
              bg="#c9a26b"
              colorScheme="#c9a26b"
              padding={"1.6rem"}
              boxSizing="border-box"
              fontSize={"sm"}
              display="flex"
              flexDirection={"column"}
              color="gray"
            >
              <Text>
                <BsSearch fontSize={"25px"} />
              </Text>
              <Text>Search</Text>
            </Button>
          </Box>
          {/* Under Word*/}
          <Box display={"flex"} mt="20px">
            {/*Duration Box*/}
            <Box display={"flex"} gap="7px"><MdOutlineWatchLater color="gray"/><Text fontSize={"small"} color="gray">Flight duration</Text> <Text fontSize={"small"}>time in H&M</Text></Box>
            <Box display={"flex"} ml="90px"><Text fontSize={"small"}>Looking for travel ideas?</Text><Text ml="10px" fontSize={"small"} display="flex" gap="5px" color="blue"><HiOutlineGlobeEuropeAfrica size={"20px"}/><a href="https://www.google.com/maps">Explore Map</a></Text></Box>
          </Box>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default DataTabs;
