import React, { useState } from "react";
import { Box, Flex, Input, useToast } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";

const init = {
  email: "",
  password: "",
};
const Sign = () => {
  const [loginData, setLoginData] = useState(init);
  const { signUp } = useContext(AppContext);
  const toast = useToast();
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    for (let i = 0; i < signUp.length; i++) {
      if (
        signUp[i].email == loginData.email &&
        signUp[i].password == loginData.password
      ) {
        toast({
          title: 'Login Successfull',
          description: "Now Enjoy Shopping With Us",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate("/")
        return;
      }
    }
    alert("Oops Wrong Cridentials!!!!!")
  };

  return (
    <>
      <Navbar />
      <Box
        p="10px"
        h="480px"
        w="500px"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        ml="860px"
        mt="40px"
      >
        <Box h="420px" w="420px" margin="auto">
          <Box
            h="30px"
            width="23%"
            fontWeight="bold"
            color="#000"
            fontSize="20px"
            mt="20px"
          >
            SIGN IN
          </Box>

          <Box h="40px" width="100%" border="1px solid #AAAAAA" mt="20px">
            <input
              name="email"
              onChange={handleChange}
              style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
              type="text"
              placeholder="Email"
            />
          </Box>
          <Box
            h="40px"
            width="100%"
            border="1px solid #AAAAAA"
            mt="20px"
            mb="20px"
          >
            <input
              name="password"
              onChange={handleChange}
              style={{ width: "100%", height: "100%", padding: "0 0 0 10px" }}
              type="password"
              placeholder="Password"
            />
          </Box>
          <Flex gap="2rem" alignItems="center">
            <Box p="0 0 0 10px">
              <input type="checkbox" />
            </Box>
            <Box color="#000">Keep me signed in</Box>
            <Box _hover={{cursor:"pointer",color:"blue.300"}} color="#000">Forgot your password</Box>
          </Flex>

          <Box
            onClick={handleLogin}
            _hover={{ cursor: "pointer" }}
            h="50px"
            width="100%"
            border="1px solid #ffc439"
            mt="20px"
            color="#000"
            fontWeight="700"
            bg="#ffda00"
            fontSize="20px"
            p="8px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Sign In
          </Box>
          <Box
            h="30px"
            width="27%"
            margin="auto"
            color="#000"
            mt="30px"
            fontSize="18px"
          >
            or connect via
          </Box>
          <Box
            h="50px"
            width="13%"
            border="1px solid #666"
            margin="auto"
            mt="20px"
            borderRadius="50%"
            p="10px"
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0icmYtbG9nbyByZi1sb2dvLS1nb29nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIzMjM2IDE2OSAxNiAxNiI+PGcgZGF0YS1uYW1lPSJHcm91cCAzIj48cGF0aCBkPSJNMzI1MS42OCAxNzcuMThhOS4xOTIgOS4xOTIgMCAwMC0uMTQ1LTEuNjM2SDMyNDR2My4wOTVoNC4zMDVhMy42OCAzLjY4IDAgMDEtMS42IDIuNDE0djIuMDA2aDIuNTg1YTcuOCA3LjggMCAwMDIuMzktNS44OHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzQyODVmNCIvPjxwYXRoIGQ9Ik0zMjQzLjk5NiAxODVhNy42MzggNy42MzggMCAwMDUuMjk0LTEuOTM4bC0yLjU4NS0yLjAwN2E0LjgyNiA0LjgyNiAwIDAxLTcuMTg1LTIuNTM1aC0yLjY3M3YyLjA3M2E4IDggMCAwMDcuMTUgNC40MDd6IiBkYXRhLW5hbWU9IlNoYXBlIiBmaWxsPSIjMzRhODUzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMzIzOS41MjQgMTc4LjUyYTQuNzMgNC43MyAwIDAxMC0zLjA0di0yLjA3MmgtMi42NzNhOC4wMSA4LjAxIDAgMDAwIDcuMTg1bDIuNjc0LTIuMDczeiIgZGF0YS1uYW1lPSJTaGFwZSIgZmlsbD0iI2ZiYmMwNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTMyNDMuOTk2IDE3Mi4xODJhNC4zMjIgNC4zMjIgMCAwMTMuMDU4IDEuMmwyLjI5NS0yLjI5NWE3LjY4OCA3LjY4OCAwIDAwLTUuMzU0LTIuMDg3IDggOCAwIDAwLTcuMTUgNC40MDdsMi42NzQgMi4wNzNhNC43NjggNC43NjggMCAwMTQuNDc2LTMuM3oiIGRhdGEtbmFtZT0iU2hhcGUiIGZpbGw9IiNlYTQzMzUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0zMjM2IDE2OWgxNnYxNmgtMTZ6IiBkYXRhLW5hbWU9IlNoYXBlIiBmaWxsPSJub25lIi8+PC9nPjwvc3ZnPg"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Sign;
