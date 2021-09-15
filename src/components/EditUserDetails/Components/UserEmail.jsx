import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";

export default function UserEmail({labelName,email}){
    return(
      <Box>
      <FormControl id="email"  >
      <Flex  justifyContent="space-around">
      <Box  width="20%">
          <FormLabel>{labelName}</FormLabel>
          </Box>
          <Box  width="70%">
              <Input type="name" value={email} disabled={true} color="black"/>
          </Box>
      </Flex>
  </FormControl>
      </Box>
    )
}