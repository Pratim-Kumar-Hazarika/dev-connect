import {Box, Grid, Image, Text} from "@chakra-ui/react"
import { Link } from "react-router-dom"
export function UserTweetView({_id, caption}) {
    return (
        <Box
            maxWidth="90%"
            height="120px"
            overflowY="scroll"
            border="1px solid #dbdbdb"
            p={3}
            borderRadius="5px">

            <Link to={`/post/${_id}`}>
                <Text>{caption}</Text>
            </Link>
        </Box>
    )

}