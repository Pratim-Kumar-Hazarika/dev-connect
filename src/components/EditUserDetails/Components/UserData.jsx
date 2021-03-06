import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/layout";

 export default function UserData({labelName,placeholder,value,inputHandler}){
    return<>
     <Box width="500px" >
              <FormControl id="email"  >
              <Flex  justifyContent="space-around">
              <Box  width="20%">
                  <FormLabel>{labelName}</FormLabel>
                  </Box>
                  <Box width="70%">
                      <Input type="name" placeholder={placeholder} value={value} onChange={inputHandler}/>
                  </Box>
              </Flex>
          </FormControl>
              </Box>
    </>
}