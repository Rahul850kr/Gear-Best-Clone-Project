import React, { useState } from "react";
import { Box, Button, Flex, Spacer, useToast } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";
const Description = () => {
  const { descData } = useContext(AppContext);
  const [count, setCount] = useState(1);
  const [final, setFinal] = useState({ ...descData.el,qty:1} );
  const { handleAddToCart, cartData,handleTotal } = useContext(AppContext);
  console.log(cartData);
  const toast = useToast();
  const navigate = useNavigate()

  // const increment = () => {
  //   setCount(prev=>prev + 1);
  //   console.log(count) 
  // };

  // const decrement = () => {
  //   if (count > 1) {
  //     setCount(count - 1);
  //     setFinal({
  //       ...final,
  //       qty: count,
  //     });
  //   }
  // };
  return (
    <>
      <Navbar />
      <Box h="650px" width="100%" borderTop="0.4px solid black">
        <Flex>
          <Box height="425px" width="28%" margin="20px 150px">
            <img src={descData.el.img} />
          </Box>
          <Box height="650px" width="50%" ml="-120px">
            <Box
              h="60px"
              width="93%"
              color="#000000"
              fontWeight="bold"
              fontSize="18px"
              mt="20px"
            >
              {descData.el.name}
            </Box>

            <Box h="50px" width="100%" mt="10px" bg="#f30240">
              <Flex>
                <Box color="white" fontSize="28px" fontWeight="bold">
                  FLASH SALE
                </Box>
              </Flex>
            </Box>

            <Box h="170px" width="100%">
              <Flex>
                <Box h="30px" width="10%" mt="20px" color="#AAAAAA">
                  Price:
                </Box>

                <Box
                  h="50px"
                  width="20%"
                  fontSize="30px"
                  fontWeight="bold"
                  color="#f30240"
                  p="5px"
                >
                  $ {descData.el.price}
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  h="23px"
                  width="9%"
                  p="2px"
                  fontSize="13px"
                  fontWeight="medium"
                  color="white"
                  bg="#f30240"
                  mt="15px"
                >
                  20% OFF
                </Box>
              </Flex>

              <Flex gap="1rem">
                <Box h="30px" width="10%" color="#AAAAAA">
                  Promo:
                </Box>
                <Box>
                  <Box h="30px" width="100%">
                    Over $1000.00, get $30.00 OFF.
                  </Box>
                  <Box h="30px" width="100%">
                    Over $800.00, get $20.00 OFF.
                  </Box>
                  <Box h="30px" width="100%">
                    Over $500.00, get $10.00 OFF.
                  </Box>
                </Box>
              </Flex>
            </Box>

            <Flex gap="1rem">
              <Box h="30px" width="10%" color="#AAAAAA">
                Shipping:
              </Box>
              <Box>
                <Box h="25px">
                  FREE SHIPPING to United States Via Registered Air Mail{" "}
                </Box>
              </Box>
            </Flex>
            <Flex mt="10px">
              <Box h="30px" width="11.5%" fontSize="15px" color="#AAAAAA">
                Color Name:
              </Box>
              <Box
                h="30px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="10%"
                border="1px solid #f30240"
                color="#f30240"
                ml="10px"
              >
                BLACK
              </Box>
            </Flex>

            {/* <Flex>
              <Box
                h="30px"
                width="5%"
                color="#AAAAAA"
                fontSize="15px"
                mt="20px"
              >
                QTY:
              </Box> */}
              {/* <Box h="40px" width="15%" ml="58px">
                <Flex mt="20px">
                  <Box
                    onClick={decrement}
                    _hover={{ cursor: "pointer" }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    h="30px"
                    width="31px"
                    border="1px solid #AAAAAA"
                  >
                    -
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    h="30px"
                    width="43px"
                    border="1px solid  #AAAAAA"
                  >
                    {count}
                  </Box>
                  <Box
                    onClick={()=>{
                      increment();
                      setFinal({
                        ...final,
                        qty: count,
                      });
                    }}
                    _hover={{ cursor: "pointer" }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    h="30px"
                    width="31px"
                    border="1px solid  #AAAAAA"
                  >
                    +
                  </Box>
                </Flex>
              </Box> */}
              {/* <Box
                h="30px"
                width="15%"
                color="green.500"
                fontWeight="700"
                mt="20px"
              >
                in stock
              </Box>
              <Box h="30px" width="18%" ml="-15px" color="#f30240" mt="20px">
                Max per order : 88
              </Box>
            </Flex> */}

            <Flex gap="1rem">
              <Box
                onClick={() => {
                  handleAddToCart(final);
                  toast({
                    title: "Item added to cart",
                    status: "success",
                    isClosable: true,
                  })
                }}
                _hover={{ cursor: "pointer" }}
                h="50px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="180px"
                border="1px solid #f30240"
                color="white"
                bg="#f30240"
                fontWeight="medium"
                fontSize="23px"
                mt="20px"
                p="5px"
              >
                Add to Cart
              </Box>
              <Box
              onClick={()=>{
                handleTotal([final]);
                navigate("/Shipping")
              }}
              _hover={{cursor:"pointer"}}
                h="50px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="160px"
                border="1px solid #f30240"
                color="#f30240"
                fontWeight="medium"
                fontSize="20px"
                mt="20px"
                bg="#ffeff2"
                p="10px"
              >
                {" "}
                Buy Now{" "}
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="50px"
                width="160px"
                border="1px solid #ffc439"
                mt="20px"
                bg="#ffc439"
                p="10px"
              >
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </Box>
            </Flex>

            <Flex mt="20px">
              <img src="" alt="" />
              <Box>Add To Favorites</Box>
            </Flex>

            <Flex gap="1rem" mt="30px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="30px"
                w="90px"
                border="1px solid #AAAAAA"
                p="8px"
              >
                <img
                  src="https://css.gbtcdn.com/imagecache/gbw/img/site/paypal@.png"
                  alt=""
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="30px"
                w="90px"
                border="1px solid #AAAAAA"
                p="5px"
              >
                <img
                  src="https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/VISA.png?imbypass=true"
                  alt=""
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="30px"
                w="50px"
                border="1px solid #AAAAAA"
                p="5px"
              >
                <img
                  src="https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/mc_vrt_opt_pos_73_2x.png?imbypass=true"
                  alt=""
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Description;
