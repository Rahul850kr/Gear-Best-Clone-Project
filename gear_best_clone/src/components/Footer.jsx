import { Box, Center, Flex,Image,Text } from '@chakra-ui/react';
import React from 'react'

const Footer = () => {
  return (
    <Box>
      <Box mb="3rem" mt="2.5rem" >
      <Flex justifyContent="space-around" gap="30px"w="78%" m="auto" >
        <Box _hover={{color:"#ffda00"}} textAlign="center" >
          <Image src="https://css.gbtcdn.com/imagecache/gbw/img/site/new-logo.png" />
          <Text fontWeight="700" as="h3" >AFFORDABLE QUALITY</Text>
          <Text mt="-10px" fontWeight="700" as="h3" >FUN SHOPPING</Text>
        </Box>
        <Box _hover={{color:"#ffda00"}} textAlign="center" >
         <Center> <Image h="50px" w="50px" src="https://cdn-icons-png.flaticon.com/512/1212/1212289.png"/></Center>
         <Text fontWeight="700" as="h3" >High Quality Selection</Text>
         <Text fontSize="12px" >Total product quality</Text>
         <Text fontSize="12px" >control for peace of mind</Text>
        </Box>
        <Box  _hover={{color:"#ffda00"}} textAlign="center"  >
        <Center> <Image h="50px" w="50px" src="https://cdn.w600.comps.canstockphoto.com/affordable-prices-rubber-stamp-clipart-vector_csp42889752.jpg"/></Center>
         <Text fontWeight="700" as="h3" >Affordable Prices</Text>
         <Text fontSize="12px" >Factory direct prices for</Text>
         <Text fontSize="12px" >maximum savings</Text>
        </Box>
        <Box _hover={{color:"#ffda00"}} textAlign="center" >
        <Center> <Image h="50px" w="50px" src="https://www.kindpng.com/picc/m/650-6505776_express-shipping-icon-express-shipping-express-png-transparent.png"/></Center>
         <Text fontWeight="700" as="h3" >Express Shipping</Text>
         <Text fontSize="12px" >Fast, reliable delivery from</Text>
         <Text fontSize="12px" > global warehouses</Text>
        </Box>
        <Box _hover={{color:"#ffda00"}} textAlign="center" >
        <Center> <Image h="50px" w="50px" src="https://icons-for-free.com/download-icon-favourite+like+rating+special+star+icon-1320086047224423788_512.png"/></Center>
         <Text fontWeight="700" as="h3" >Worry-free After-sales</Text>
         <Text fontSize="12px" >Instant access to</Text>
         <Text fontSize="12px" >professional support</Text>
        </Box>
      </Flex>
      </Box>
    </Box>
  )
}

export default Footer;