import { Flex } from "@chakra-ui/layout";

export default function Wrapper({
    children,
    ...otherprops
}) {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            maxWidth={["", "", "", "1300px"]}
            width="100%"
            marginX="auto"
            position="relative"
            {...otherprops}>
            {children}
        </Flex>
    );
}