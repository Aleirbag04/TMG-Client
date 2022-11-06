import axios from 'axios';
import { Box, Heading, Text, VStack } from 'native-base';
import { useEffect, useState } from 'react';

const Data = () => {

  const[data, setData] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    axios.get("https://tmg-form-api.onrender.com/api/v1/data").then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
  }, []);


  return (
        <>
      <VStack
        width="90%"
        mx="3"
        maxW="600px"
        marginTop={5}
        direction={{ base: "column", md: "column" }}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            bg="white"
            shadow={1}
            rounded="lg"
            p={5}
            w="100%"
            mb={5}
          >
            <Heading
              size="md"
              mb={2}
              color= "muted.800"
              fontFamily= "Open Sans"

            >
              {item.firstName} {item.lastName}
            </Heading>
            <Text fontSize="sm" mb={2}               color= "muted.800"
              fontFamily= "Open Sans"
            >
              {item.email}
            </Text>
            <Text fontSize="sm" mb={2}               color= "muted.800"
              fontFamily= "Open Sans">
              {item.contactNumber}
            </Text>
            <Text fontSize="sm" mb={2}               color= "muted.800"
              fontFamily= "Open Sans">
              {item.message}
            </Text>
          </Box>
        ))}

      </VStack>
    </>
  );
};

export default Data;