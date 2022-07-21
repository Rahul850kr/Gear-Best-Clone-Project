import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import Navbarcss from "./styles/Navbar.module.css";

const Navbar = () => {
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
              <Link href="/login">
                <div className={Navbarcss.signin}>
                  <i className="fa-solid fa-user"></i>
                  <p>Sign In</p>
                </div>
              </Link>
              <div className={Navbarcss.signin}>
                <i className="fa-solid fa-heart"></i>
                <p>Favourites</p>
              </div>
              <Link href="/cart" >
              <div className={Navbarcss.signin}>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Cart</p>
              </div>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
