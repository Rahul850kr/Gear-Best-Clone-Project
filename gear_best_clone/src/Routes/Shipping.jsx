import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";

const init = {
  fname: "",
  lname: "",
  address: "",
  country: "",
  state: "",
  city: "",
  pincode: "",
  mobile: "",
  email: "",
};

const Address = () => {
  const [formData, setFormData] = useState(init);
  const { handleAddShipping } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <Box
        h="40px"
        width="300px"
        color="#000"
        fontWeight="700"
        fontSize="24px"
        ml="200px"
        font-family=" OpenSans,Arial,Helvetica,sans-serif"
        mt="30px"
      >
        Add New Address
      </Box>
      <Box h="900px" width="45%" ml="350px" mt="30px">
        <Box>
          <Flex gap="5px">
            <Box h="30px" width="85px" mt="20px" ml="13px">
              <Flex>
                <Box color="#ec0e0e">*</Box>
                <Box color="#000">First name:</Box>
              </Flex>
            </Box>

            <Box
              h="45px"
              width="500px"
              border="1px solid #AAAAAA"
              mt="20px"
              ml="10px"
            >
              <input
                name="fname"
                onChange={handleChange}
                required
                style={{ width: "100%", height: "100%" }}
                type="text"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex gap="5px">
            <Box h="30px" width="85px" mt="20px" ml="13px">
              <Flex>
                <Box color="#ec0e0e">*</Box>
                <Box color="#000">Last name:</Box>
              </Flex>
            </Box>

            <Box
              h="45px"
              width="500px"
              border="1px solid #AAAAAA"
              mt="20px"
              ml="10px"
            >
              <input
                name="lname"
                onChange={handleChange}
                required
                style={{ width: "100%", height: "100%" }}
                type="text"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex gap="5px">
            <Box h="30px" width="110px" mt="20px">
              <Flex>
                <Box color="#ec0e0e">*</Box>
                <Box color="#000">Address Line1:</Box>
              </Flex>
            </Box>

            <Box h="45px" width="500px" border="1px solid #AAAAAA" mt="20px">
              <input
                name="address"
                onChange={handleChange}
                required
                style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
                type="text"
                placeholder="Street address,flat,suite,unit,building,floor,etc."
              />
            </Box>
          </Flex>
          <Box h="20px" width="270px" ml="115px" fontSize="13px" color="#999">
            Note:please write your address in English
          </Box>
        </Box>

        <Box>
          <Flex gap="5px">
            <Box h="30px" width="110px" mt="20px">
              <Box color="#000">Address Line2:</Box>
            </Box>

            <Box h="45px" width="500px" border="1px solid #AAAAAA" mt="20px">
              <input
                required
                style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
                type="text"
              />
            </Box>
          </Flex>
          <Box h="20px" width="270px" ml="115px" fontSize="13px" color="#999">
            Note:please write your address in English
          </Box>
        </Box>

        <Box>
          <Flex gap="5px">
            <Box h="30px" width="110px" mt="20px">
              <Flex>
                <Box color="#ec0e0e">*</Box>
                <Box color="#000">Country/Region</Box>
              </Flex>
            </Box>

            <Box
              h="45px"
              width="500px"
              border="1px solid #AAAAAA"
              mt="20px"
              color="#000"
            >
              <input
                name="country"
                onChange={handleChange}
                required
                style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
                type="text"
                placeholder="United States"
              />
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex gap="5px">
            <Box h="30px" width="110px" mt="20px">
              <Flex>
                <Box color="#ec0e0e">*</Box>
                <Box color="#000">State/Province:</Box>
              </Flex>
            </Box>

            <Box
              h="45px"
              width="500px"
              border="1px solid #AAAAAA"
              mt="20px"
              color="#000"
            >
              <input
                name="state"
                onChange={handleChange}
                required
                style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
                type="text"
                placeholder="Please Select"
              />
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex gap="5px">
            <Box h="30px" width="80px" mt="20px" ml="30px">
              <Flex>
                <Box color="#ec0e0e">*</Box>
                <Box color="#000">City:</Box>
              </Flex>
            </Box>

            <Box h="45px" width="500px" border="1px solid #AAAAAA" mt="20px">
              <input
                name="city"
                onChange={handleChange}
                required
                style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
                type="text"
              />
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex gap="5px">
            <Box h="30px" width="130px" mt="20px">
              <Flex>
                <Box color="#ec0e0e">*</Box>
                <Box color="#000">PostalCode:</Box>
              </Flex>
            </Box>

            <Box
              h="45px"
              width="500px"
              border="1px solid #AAAAAA"
              mt="20px"
              ml="-20px"
            >
              <input
                name="pincode"
                onChange={handleChange}
                required
                style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
                type="text"
              />
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex gap="5px">
            <Box h="30px" width="130px" mt="20px">
              <Flex>
                <Box color="#ec0e0e">*</Box>
                <Box color="#000">PhoneNumber:</Box>
              </Flex>
            </Box>
            <Flex>
              <Box
                h="45px"
                width="500px"
                border="1px solid #AAAAAA"
                mt="20px"
                ml="-20px"
              >
                {/* <Box h="30px" width="30px" border="1px solid red"></Box> */}
                <input
                  name="mobile"
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "0 0 0 10px",
                  
                  }}
                  type="text"
                />
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box>
          <Flex gap="5px">
            <Box h="30px" width="130px" mt="20px">
              <Flex>
                <Box color="#ec0e0e">*</Box>
                <Box color="#000">E-mail Address:</Box>
              </Flex>
            </Box>
            <Flex>
              <Box
                h="45px"
                width="500px"
                border="1px solid #AAAAAA"
                mt="20px"
                ml="-20px"
              >
                <input
                  name="email"
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "0 0 0 10px",
                   
                  }}
                  type="text"
                />
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Flex
          h="45px"
          width="40%"
          mt="10px"
          alignItems="center"
          gap="1rem"
          ml="110px"
          _hover={{ cursor: "pointer" }}
        >
          <Box p="0 0 0 10px">
            <input type="checkbox" />
          </Box>
          <Box>Set as my default address</Box>
        </Flex>

        <Box
          onClick={() => {
            handleAddShipping(formData);
            navigate("/Payment");
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="50px"
          width="30%"
          border="1px solid #ffc439"
          mt="20px"
          color="#000"
          fontWeight="700"
          bg="#ffda00"
          fontSize="20px"
          p="8px"
          ml="115px"
          _hover={{ cursor: "pointer" }}
        >
          Confirm
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Address;
