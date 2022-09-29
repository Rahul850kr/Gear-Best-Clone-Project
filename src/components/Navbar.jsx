import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  Button,
  Text,
  Center,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Navbarcss from "./styles/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartData, handleDeleteCartData, handleTotal } =
    useContext(AppContext);
  return (
    <div>
      <Box mt="0.5rem">
        <Flex
          gap="2%"
          h="100px"
          // border="1px solid purple"
          w="78%"
          margin="auto"
          justifyContent="space-between"
        >
          <Box
            w="19%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="/">
              <Image
                h="50px"
                w="250px"
                src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
              />
            </Link>
          </Box>
          <Box w="70%">
            <Box
              justifyContent="flex-end"
              alignItems="center"
              display="flex"
              w="100%"
              h="50%"
              //   border="1px solid red"
            >
              <Flex
                // border="1px solid green"
                fontSize="14px"
                color="#666666"
                justifyContent="flex-end"
                alignItems="center"
                gap="1.5rem"
              >
                <Box
                  gap="4px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <p>Save $3 with App ^</p>
                </Box>
                <Box>
                  <p>Support Center</p>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <p>Ship to</p>
                  <img
                    className={Navbarcss.usaimage}
                    src="https://uidesign.gbtcdn.com/GB/app/2018/flag_png/us.png"
                  />
                  <p>/USD</p>
                </Box>
                <Box>
                  <p>Country Website</p>
                </Box>
              </Flex>
            </Box>
            <Flex
              //   border="1px solid red"
              alignItems="center"
              gap="3rem"
              w="100%"
              h="50%"
            >
              <div className={Navbarcss.inputbox}>
                <input
                  type="text"
                  placeholder="Search "
                  style={{ padding: "0px 20px" }}
                />
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/search-1768073-1502246.png"
                  alt=""
                />
              </div>

              <Popover>
                <PopoverTrigger>
                  <div className={Navbarcss.signin}>
                    <i className="fa-solid fa-user"></i>
                    <p>Sign In</p>
                  </div>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Welcome to Gearbest</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button onClick={() => navigate("/Login")} bg="#FFDA00">
                        Sign In
                      </Button>
                      <Text textAlign="center">Or</Text>
                      <Button onClick={() => navigate("/SignUp")} bg="#007aff">
                        Register
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>

              <div className={Navbarcss.signin}>
                <i className="fa-solid fa-heart"></i>
                <p>Favourites</p>
              </div>
              <Popover>
                <PopoverTrigger>
                  <div className={Navbarcss.signin}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Cart</p>
                  </div>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader fontSize="30px" fontWeight="700">
                      Your Cart
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      {cartData.length > 0 ? (
                        cartData.map((el) => {
                          return (
                            <Box h="120px" w="100%" mb="10px">
                              <Flex h="100%" w="100%">
                                <Box w="30%">
                                  <img
                                    height="10px"
                                    w="20px"
                                    src={el.img}
                                    alt=""
                                  />
                                </Box>
                                <Box w="70%">
                                  <Text fontSize="10px">{el.name}</Text>
                                  <Flex>
                                    <Text color="#f30240">$ {el.price}</Text>
                                    <Spacer />
                                    <Image
                                      onClick={() =>
                                        handleDeleteCartData(el.id)
                                      }
                                      _hover={{ cursor: "pointer" }}
                                      height="20px"
                                      width="20px"
                                      src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg"
                                      alt=""
                                    />
                                  </Flex>
                                </Box>
                              </Flex>
                             
                            </Box>
                          )
                          
                        })
                       
                      ) : (
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          fontSize="40px"
                          fontWeight="700"
                        >
                          {" "}
                          Your Cart Is Empty{" "}
                        </Box>
                      )}
                    </PopoverBody>
                   <PopoverFooter>
                   <Center>
                        <Button
                        disabled={cartData.length===0}
                          onClick={() => {
                            handleTotal(cartData);
                            navigate("/Shipping");
                          }}
                          bg="#ffda00"
                        >
                          Checkout
                        </Button>
                      </Center>
                   </PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
