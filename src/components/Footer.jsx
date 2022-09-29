import { Box, Center, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const footerImage = [
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ya.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/qiwi.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/webmoney.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/Visa-Logo.png"
  },
  {
    img:"https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png"
  }
  
]

const Footer = () => {
  return (
    <Box>
      <Box mb="3rem" mt="2.5rem">
        <Flex justifyContent="space-around" gap="30px" w="78%" m="auto">
          <Box _hover={{ color: "#ffda00" }} textAlign="center">
            <Image src="https://css.gbtcdn.com/imagecache/gbw/img/site/new-logo.png" />
            <Text fontWeight="700" as="h3">
              AFFORDABLE QUALITY
            </Text>
            <Text mt="-10px" fontWeight="700" as="h3">
              FUN SHOPPING
            </Text>
          </Box>
          <Box _hover={{ color: "#ffda00" }} textAlign="center">
            <Center>
              {" "}
              <Image
                h="50px"
                w="50px"
                src="https://cdn-icons-png.flaticon.com/512/1212/1212289.png"
              />
            </Center>
            <Text fontWeight="700" as="h3">
              High Quality Selection
            </Text>
            <Text fontSize="12px">Total product quality</Text>
            <Text fontSize="12px">control for peace of mind</Text>
          </Box>
          <Box _hover={{ color: "#ffda00" }} textAlign="center">
            <Center>
              {" "}
              <Image
                h="50px"
                w="50px"
                src="https://cdn.w600.comps.canstockphoto.com/affordable-prices-rubber-stamp-clipart-vector_csp42889752.jpg"
              />
            </Center>
            <Text fontWeight="700" as="h3">
              Affordable Prices
            </Text>
            <Text fontSize="12px">Factory direct prices for</Text>
            <Text fontSize="12px">maximum savings</Text>
          </Box>
          <Box _hover={{ color: "#ffda00" }} textAlign="center">
            <Center>
              {" "}
              <Image
                h="50px"
                w="50px"
                src="https://www.kindpng.com/picc/m/650-6505776_express-shipping-icon-express-shipping-express-png-transparent.png"
              />
            </Center>
            <Text fontWeight="700" as="h3">
              Express Shipping
            </Text>
            <Text fontSize="12px">Fast, reliable delivery from</Text>
            <Text fontSize="12px"> global warehouses</Text>
          </Box>
          <Box _hover={{ color: "#ffda00" }} textAlign="center">
            <Center>
              {" "}
              <Image
                h="50px"
                w="50px"
                src="https://icons-for-free.com/download-icon-favourite+like+rating+special+star+icon-1320086047224423788_512.png"
              />
            </Center>
            <Text fontWeight="700" as="h3">
              Worry-free After-sales
            </Text>
            <Text fontSize="12px">Instant access to</Text>
            <Text fontSize="12px">professional support</Text>
          </Box>
        </Flex>
      </Box>
      <Box mb="4rem">
        <Flex
          h="100px"
          w="78%"
          m="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex alignItems="center" w="40%" h="100%">
            <label>NewsLetter</label>
            <input
              style={{
                width: "286px",
                height: "40px",
                border: "0.5px solid black",
                padding: "10px",
                marginLeft: "20px",
              }}
              type="text"
              placeholder="Enter Email to get 50 points"
            />
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                height: "40px",
                width: "121px",
                border: "none",
              }}
            >
              Subscribe
            </button>
          </Flex>
          <Flex
            gap="30px"
            justifyContent="center"
            alignItems="center"
            w="40%"
            h="100%"
          >
            <Box w="40px" h="40px">
              <a href="https://www.facebook.com/Gearbestshopping">
                <img
                  width="100%"
                  height="100%"
                  src="https://louisville.edu/english/images/facebookicon.png/image"
                />
              </a>
            </Box>
            <Box w="40px" h="40px">
              <a href="https://www.youtube.com/user/TheGearBest">
                <img
                  width="100%"
                  height="100%"
                  src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                />
              </a>
            </Box>
            <Box w="40px" h="40px">
              <a href="https://www.instagram.com/gearbest/">
                <img
                  width="100%"
                  height="100%"
                  src="https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-icon-PNG.png"
                />
              </a>
            </Box>
            <Box w="40px" h="40px">
              <a href="https://twitter.com/TheGearbest/">
                <img
                  width="100%"
                  height="100%"
                  src="https://t4.ftcdn.net/jpg/04/83/36/97/360_F_483369745_d9uQmdRaUGrZjuZC95rh10o64eYunK6c.jpg"
                />
              </a>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box mb="50px" w="78%" m="auto"  >
        <Flex justifyContent="space-between" gap="20px" w="100%"  h="300px" >
          <Box p="10px" fontSize="13px" w="18%">
              <Text   fontSize="15px" fontWeight="700" >Company Information</Text>
              <br />
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >About Us</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Top Searches</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Privacy Policy</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Terms And Conditions</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Intellectual Property Policy</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Testimonials</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Contact Us</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Report Security Issue</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Sell On Gearbest</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Cookies Policy</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Top Brands</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Gearbest Official Blogs</Text>

          </Box>
          <Box p="10px" fontSize="13px" w="18%"  >
              <Text   fontSize="15px" fontWeight="700" >Customer Service</Text>
              <br />
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Shipping Information</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >My Favourites</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >FAQ For Newsletter Subscription</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >My Points</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Warranty And Return</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Payment Methods</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Deposit Expansion</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >FAQ And Support</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Sitemap</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Gearbest Wallet Instruction</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >FAQs about COVID-19</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} ></Text>

          </Box>
          <Box p="10px" fontSize="13px" w="18%">
              <Text  fontSize="15px" fontWeight="700" >Other Business</Text>
              <br />
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Partnership Programs</Text>
              <Text _hover={{cursor:"pointer",textDecoration:"underline"}} >Associate Program</Text>
              </Box>
          <Box  w="38%"  >
         
          <Text textAlign="center" fontSize="15px" fontWeight="700" >Download Apps</Text>
              <br />
              <Text  textAlign="center" _hover={{cursor:"pointer",textDecoration:"underline"}} >Save $3 with App & New User Only</Text>
              <Center>
              <Flex h="105px" w="242px"  >
                <img width="48%" src="https://css.gbtcdn.com/imagecache/gbw/img/app-download-qrcode.247877b.png"/>
                <Flex direction="column" justifyContent="space-around"  w="48%" >
                <img  src="https://css.gbtcdn.com/imagecache/gbw/img/apple-store.f9fad9d.png" />
                
                <img src="https://css.gbtcdn.com/imagecache/gbw/img/google-play.c7f6860.png"/>
                </Flex>
              </Flex>
              </Center>
         
          </Box>
        </Flex>
      </Box>
      <Box mt="50px" w="78%" m="auto">
      <SimpleGrid  columns="14" spacing="20px" >
              {footerImage.map(el=>(
                <img src={el.img}/>
              ))}
      </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;
