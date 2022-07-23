import React from "react";
import { Badge, Box, Collapse, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ProductItem = ({ name, image, price }) => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  

  return (
    <>
      <Image w="100%" src={image} />
      <Collapse zIndex="2"  mt="10px" startingHeight={20} in={show}>
        {name}
      </Collapse>

      <Text cursor="pointer" as="u" size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Text>

      <Text fontSize="20px" color="#F30240">
        $ {price}
      </Text>
      <Badge colorScheme="red">Flash Sale</Badge>
    </>
  );
};

export default ProductItem;
