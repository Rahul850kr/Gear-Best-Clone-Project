import React from "react";
import { Box, Button, Center, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
const Payment = () => {
  const { shipping,total } = useContext(AppContext);
  const navigate = useNavigate()

  const toast = useToast()
  return (
    <>
    <Navbar/>
      <Box
        h="800px"
        width="50%"
        boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        ml="250px"
        mt="30px"
      >
        <Box
          h="70px"
          width="100%"
          boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px;"
          bg="#f9f9f9"
          color="#000"
          mb="20px"
        >
          <Box h="60px" w="200px" fontSize="20px" fontWeight="400" p="8px">
            Payment Methods(s)
          </Box>
        </Box>

        <Flex justifyContent="center" alignItems="center" gap="1rem">
         
          <Box h="45px" w="80px" border="1px solid #AAAAAA">
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://uidesign.zafcdn.com/ZF/image/5376/20210323_visa.png"
              alt=""
            />
          </Box>
          <Box h="45px" w="80px" border="1px solid #AAAAAA">
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://uidesign.zafcdn.com/ZF/image/checkout/20190816_12066/mastercard.png"
              alt=""
            />
          </Box>
          <Box h="45px" w="80px" border="1px solid #AAAAAA">
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://uidesign.zafcdn.com/ZF/image/checkout/20190816_12066/discover.png"
              alt=""
            />
          </Box>
          <Box h="45px" w="80px" border="1px solid #AAAAAA">
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://uidesign.zafcdn.com/ZF/image/checkout/20190816_12066/Diners-Club.png"
              alt=""
            />
          </Box>
          <Box h="45px" w="80px" border="1px solid #AAAAAA">
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://uidesign.zafcdn.com/ZF/image/checkout/20190816_12066/maestro.png"
              alt=""
            />
          </Box>
        </Flex>
      <Center>
        <Heading as="h2">Total Amount is : <span style={{color:"#f30240"}} >$ {total} </span></Heading>
        </Center>
        <Box
          h="430px"
          w="650px"
          // border="1px solid #AAAAAA"
          m="auto"
          mr="58px"
          mt="20px"
        >
          <Flex direction="column"  >
          <Box
            h="45px"
            width="500px"
            border="1px solid #AAAAAA"
            mt="30px"
            ml="80px"
          >
            <input
              style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
              type="text"
              placeholder="Card Number"
            />
          </Box>

          <Box
            h="45px"
            width="500px"
            border="1px solid #AAAAAA"
            mt="30px"
            ml="80px"
          >
            <input
              style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
              type="date"
              placeholder="select expiry date"
            />
          </Box>

          <Box
            h="45px"
            width="500px"
            border="1px solid #AAAAAA"
            mt="30px"
            ml="80px"
          >
            <input
              style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
              type="password"
              placeholder="Security Code"
            />
          </Box>

          <Box
            h="45px"
            width="500px"
            border="1px solid #AAAAAA"
            mt="30px"
            ml="80px"
          >
            <input
              style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
              type="text"
              placeholder="Name"
            />
          </Box>
          </Flex>

          <Box
            h="30px"
            width="23%"
            fontWeight="bold"
            color="#000"
            fontSize="17px"
            mt="20px"
            ml="80px"
          >
            Billing Address
          </Box>
          <Box
            width="400px"
            fontWeight="medium"
            color="#000"
            fontSize="18px"
            mt="5px"
            ml="80px"
          >
            <Text fontSize="20px">
              {shipping.fname} {shipping.lname}
            </Text>
            <Text>
              {shipping.address} {shipping.city} {shipping.state}{" "}
              {shipping.country} {shipping.pincode}{" "}
            </Text>
            <Text>Contact No. {shipping.mobile} </Text>
          </Box>
          <Box
            h="30px"
            width="400px"
            fontWeight="medium"
            color="#AAAAAA"
            fontSize="13px"
            mt="3px"
            ml="80px"
            mb="30px"
          >
            We recommend that the billing address you are submitting is the same
            as your card issuer has on file.
          </Box>

          <hr color="5px solid #AAAAAA" />

          <Center>
            <Button onClick={()=>{
              toast({
                title: `Hurray!!!!! Order Has Been Placed`,
                status: "success",
                isClosable: true,
              });
              navigate("/")
            }} mt="20px" mb="20px" w="200px" bg="#ffda00">
              Place Order
            </Button>
          </Center>

          <hr color="5px solid #AAAAAA" />
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default Payment;
