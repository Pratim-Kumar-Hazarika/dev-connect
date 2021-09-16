
import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { MdiFileImageBox } from "./Tweet/Icons/Icons";

export default function UplodImage({handeInputChange}) {
    return <Box>
        <Button
            size="xs"
            alignItems="center"
            variant="ghost"
            color="gray"
            fontWeight="medium"
            border="1px solid #dbdbdb">
            <FormLabel mt={2} mr={1} cursor="pointer">
                <Tooltip label="Add Image" aria-label="A tooltip">
                    <Box color="gray">
                        <MdiFileImageBox />
                    </Box>
                </Tooltip>
                <Input type="file" display="none" onChange={handeInputChange} />
            </FormLabel></Button>
    </Box>
}
