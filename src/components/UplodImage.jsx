
import { Button } from "@chakra-ui/button";
import { FormLabel ,Text} from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { MdiFileImageBox } from "./Tweet/Icons/Icons";
import {useLocation} from "react-router-dom"

export default function UplodImage({handeInputChange}) {

    const query = useLocation()
    return <Box>
        <Button
            size="xs"
            alignItems="center"
            variant="ghost"
            color="gray"
            fontWeight="medium"
            border="1px solid #dbdbdb">
            <FormLabel mt={2} mr={1} cursor="pointer">
                <Tooltip label={ query.pathname === "/account/settings" ? '': 'Add Image'} aria-label="A tooltip">
                    <Box color="gray">
                        { query.pathname === "/account/settings" ?  <Text fontSize="md" fontWeight="medium" color="#0095f6">Change Profile Picture</Text> :   <MdiFileImageBox />}
                     
                    </Box>
                </Tooltip>
                <Input type="file" display="none" onChange={handeInputChange} />
            </FormLabel></Button>
    </Box>
}
