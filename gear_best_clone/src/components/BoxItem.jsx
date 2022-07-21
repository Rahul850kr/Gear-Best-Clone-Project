import { Box,Collapse,Image,Text } from '@chakra-ui/react'
import React from 'react'

const BoxItem = ({name,stPrice,price,image}) => {

    const [show, setShow] = React.useState(false);

    const handleToggle = () => setShow(!show);
  
  return (
    <Box _hover={{boxShadow:""}} h="318px" w="177px">
            <Image
              w="100%"
              src={image}
            />
            <Collapse startingHeight={20} in={show}>
             {name}
            </Collapse>
            <Text cursor="pointer" as="u" size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? "Less" : "More"}
            </Text>
            <Text >RRP: <span><Text as="s" >{stPrice}</Text></span> </Text>
            <Text fontSize="20px" color="#F30240" >{price}</Text>
          </Box>
  )
}

export default BoxItem;