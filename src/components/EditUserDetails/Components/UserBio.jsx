import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Flex } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";

export default function UserBio({labelName,placeholder,inputHandler,value}){
    return(
      <Box >
      <FormControl id="email"  >
      <Flex  justifyContent="space-around">
      <Box  width="20%">
          <FormLabel>{labelName}</FormLabel>
          </Box>
          <Box  width="70%">
          <Textarea placeholder={placeholder} value={value} onChange={inputHandler} />
          </Box>
      </Flex>
  </FormControl>
      </Box>
    )
}
