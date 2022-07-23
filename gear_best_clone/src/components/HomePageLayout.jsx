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
  Collapse,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import BoxItem from "./BoxItem";
import Homepagecss from "./styles/HomePageLayout.module.css";
import axios from "axios";
import ProductItem from "./ProductItem";
import { Spinner } from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
let obj = {
  0: "https://uidesign.gbtcdn.com/GB/image/9746/1190x420AUSEK.jpg?imbypass=true",
  1: "https://uidesign.gbtcdn.com/GB/image/2019/20190226_7940/1190-420.jpg?impolicy=high",
  2: "https://uidesign.gbtcdn.com/GB/image/8823/eight_hour_1190x420_en.jpg",
  3: "https://uidesign.gbtcdn.com/GB/image/8823/oneplus_1190x420_en.jpg",
  4: "https://uidesign.gbtcdn.com/GB/image/8823/ortur_1190x420_en.jpg",
  5: "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg",
};

const HomePageLayout = () => {
  // const [i, setI] = useState(0);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { handleAddDesc, descData } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    axios.get("https://json-gearbest.herokuapp.com/products").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

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
          <Image
            h="90%"
            src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg"
          />
        </Box>
      </Flex>
      <Box mt="20px" mb="50px">
        <Flex gap="10px" w="78%" m="auto">
          <Image src="https://uidesign.gbtcdn.com/GB/image/9746/1NIUBILITY230x120.jpg" />
          <Image src="https://uidesign.gbtcdn.com/GB/image/8823/dreame_230X120_en.jpg" />
          <Image
            w="230px"
            h="120px"
            src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v3/62226933ac9c.jpg"
          />
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
        mb="1rem"
      >
        <Image
          className={Homepagecss.bagicon}
          src="https://cdn4.iconfinder.com/data/icons/business-office-17/512/10-512.png"
        />
        <Text ml="1rem" fontWeight="700" fontSize="20px">
          COLLECTION
        </Text>
      </Box>
      <Box mb="50px">
        <Flex gap="1rem" w="78%" m="auto">
          <Box h="228px" w="186px">
            <Image src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16557/goods_img-v3/3322ab68dd87.jpg" />
            <Center mt="1.8rem">Best OnePlus Product</Center>
          </Box>
          <Box>
            <Image src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v3/62226933ac9c.jpg" />
            <Center>Nimble Tech Store</Center>
          </Box>
          <Box>
            <Image src="https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16456/goods_thumb_220-v3/67f17c7e8795.jpg" />
            <Center>Laser Master</Center>
          </Box>
          <Box>
            <Image src="https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_thumb_220-v3/e0b65bad2e24.jpg" />
            <Center>Hot Xiaomi Laptop </Center>
          </Box>
          <Box>
            <Image src="https://gloimg.gbtcdn.com/soa/gb/store/6907043732781199360/16492/goods_thumb_220-v2/eb108f2fda03.jpg" />
            <Center>TWOTREES Official Store</Center>
          </Box>
          <Box>
            <Image src="https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16503/goods_thumb_220-v3/4dfc32a3a9e8.jpg" />
            <Center>RUNFENGTE Official Store</Center>
          </Box>
        </Flex>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        marginTop="80px"
        w="78%"
        m="auto"
        mb="1rem"
      >
        <Image
          className={Homepagecss.bagicon}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjdfNMJurNPVJfsoLhFqJVtW0Lo5LmVyoeg&usqp=CAU"
        />
        <Text ml="0.7rem" fontWeight="700" fontSize="20px">
          SUPER DEALS
        </Text>
      </Box>
      <Box mb="50px">
        <Flex gap="1rem" w="78%" m="auto">
          <BoxItem
            image="https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16503/goods_thumb_220-v2/f292f0869135.jpg"
            name="Original barbershop cordless professional hair clipper for men rechargeable beard hair trimmer fade haircut machine lithium Ion"
            stPrice="$ 47.04"
            price="$ 42.34"
          />
          <BoxItem
            image="https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16569/goods_thumb_220-v1/7ad37c8d5c0c.jpg"
            name="Bezior Portable Air Compressor Electric Air Pump 0-120PSI 2000mAh Rechargeable Battery with LCD Screen for Bicycles Motorcycles Car Basketball"
            stPrice="$ 99.00"
            price="$ 34.99"
          />
          <BoxItem
            image="https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16533/goods_thumb_220-v1/ea10750ca76a.jpg"
            name="Electric Mosquito Killer Lamp Insect Killer LED Mosquito Repellent Lamp Mute Anti Fly Trap Light Bug Zapper USB LED Night Light"
            stPrice="$ 32.00"
            price="$ 15.97"
          />
          <BoxItem
            image="https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16569/goods_thumb_220-v1/f9b2e983da47.jpg"
            name="Original Xiaomi Mi Band 7 Pro With GPS Smart Bracelet AMOLED Screen Blood Oxygen Fitness Traker Waterproof Wristband"
            stPrice="$ 105.68"
            price="$ 77.99"
          />
          <BoxItem
            image="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16554/goods_thumb_220-v1/0c85760ac623.jpg"
            name="OnePlus 9RT 5G Global Rom  Snapdragon 888 6.62 inch 120Hz E4 AMOLED Display NFC Android 11 50MP Camera Warp Charge 65T Smartphone"
            stPrice="$ 759.00"
            price="$ 455.00"
          />
          <BoxItem
            image="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16539/goods_img-v1/7a6e1bdf0f46.jpg"
            name="Haylou RS4 smart watches Global version Blood oxygen monitor 12 Sport Models Heart Rate Monito Sleep monitor Custom watch face"
            stPrice="$ 99.00"
            price="$ 49.99"
          />
        </Flex>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        marginTop="80px"
        w="78%"
        m="auto"
        mb="1rem"
      >
        <Image
          className={Homepagecss.bagicon}
          src="https://st3.depositphotos.com/18270392/37556/v/950/depositphotos_375564372-stock-illustration-quality-check-ribbon-icon-vector.jpg?forcejpeg=true"
        />
        <Text ml="0.7rem" fontWeight="700" fontSize="20px">
          RECOMMENDED FOR YOU
        </Text>
      </Box>
      <SimpleGrid spacing="1rem" w="78%" m="auto" columns={[2, 3, 5]}>
        {loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          data.map((el) => (
            <Box
              onClick={() => {
                handleAddDesc(el);
                console.log(descData);
                navigate("/Description");
              }}
              _hover={{ boxShadow: "" }}
              h="340px"
              w="210px"
            >
              <ProductItem
                key={el.id}
                name={el.name}
                image={el.img}
                price={el.price}
              />
            </Box>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default HomePageLayout;
