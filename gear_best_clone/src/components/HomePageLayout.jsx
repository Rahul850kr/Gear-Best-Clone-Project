import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Image,
  useDisclosure,
  Button,
  SlideFade,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Homepagecss from "./styles/HomePageLayout.module.css";
let obj = {
  0: "https://uidesign.gbtcdn.com/GB/image/9746/1190x420AUSEK.jpg?imbypass=true",
  1: "https://uidesign.gbtcdn.com/GB/image/2019/20190226_7940/1190-420.jpg?impolicy=high",
  2: "https://uidesign.gbtcdn.com/GB/image/8823/eight_hour_1190x420_en.jpg",
  3: "https://uidesign.gbtcdn.com/GB/image/8823/oneplus_1190x420_en.jpg",
  4: "https://uidesign.gbtcdn.com/GB/image/8823/ortur_1190x420_en.jpg",
  5: "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg",
};

const HomePageLayout = () => {
  const [i, setI] = useState(0);

  setInterval(() => {
    if (i === 5) {
      setI(0);
    } else {
      setI(i + 1);
    }
  }, 3000);

  

  const [open,setOpen] = useState(false);

  

  return (
    <Box>
      <Flex w="78%" h="480px" m="auto">
        <Box w="20%" h="100%">
          <Center bg="black" h="10%" color="white">
            <Text fontSize="20px" fontWeight="700">
              Category
            </Text>
          </Center>
          <Flex bg="gray.200" direction="column" fontSize="14px">
            <Box _hover={{ bg: "white" }} p="5px 10px">
              {" "}
              Consumer Electronics{" "}
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Industrial & Scientific
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Cell Phones & Accessories
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              {" "}
              Appliances{" "}
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Outdoors, Fitness & Sports
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Computers, Tablets & Office
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Health & Personal Care
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Home Improvement & Tools
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Drones, Toys & Hobbies
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Home & Garden
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Motor & Car Electronics
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Men's Fashion
            </Box>
            <Box _hover={{ bg: "white" }} p="5px 10px">
              Watches & Jewelry
            </Box>
          </Flex>
        </Box>
        <Box w="80%" h="100%">
          <Flex
            justifyContent="space-around"
            alignItems="center"
            color="#000000"
            w="100%"
            h="10%"
            bg="#FFDA00"
          >
            <Text
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              fontSize="16px"
              fontWeight="750"
            >
              SUPER DEALS
            </Text>
            <Text
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              fontSize="16px"
              fontWeight="750"
            >
              {" "}
              APP ONLY{" "}
            </Text>
            <Text
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              fontSize="16px"
              fontWeight="750"
            >
              NEW ARRIVALS
            </Text>
          </Flex>
          <Image h="90%" src={obj[0]} />
        </Box>
      </Flex>
      <Box mt="20px" mb="50px">
        <Flex gap="10px" w="78%" m="auto">
          <Image
            w="230px"
            h="120px"
            src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v3/62226933ac9c.jpg"
          />
          <Image src="https://uidesign.gbtcdn.com/GB/image/9746/1NIUBILITY230x120.jpg" />
          <Image src="https://uidesign.gbtcdn.com/GB/image/8823/dreame_230X120_en.jpg" />
          <Image src="https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg" />
          <Image src="https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg" />
        </Flex>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        marginTop="80px"
        w="78%"
        m="auto"
        mb="50px"
      >
        <Image
          className={Homepagecss.bagicon}
          src="https://cdn4.iconfinder.com/data/icons/business-office-17/512/10-512.png"
        />
        <Text fontWeight="700" fontSize="20px">
          COLLECTION
        </Text>
      </Box>
      <Box
       onMouseEnter={()=>setOpen(true)}
       onMouseLeave={()=>setOpen(false)}
        h="200px"
        w="200px"
        border="1px solid red"
        m="auto"
      >
        <Button>Click Me</Button>
        <SlideFade in={open} offsetY="20px">
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <Text> Rahul </Text>
          </Box>
        </SlideFade>
      </Box>
    </Box>
  );
};

export default HomePageLayout;
