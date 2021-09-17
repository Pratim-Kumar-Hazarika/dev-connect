import {Box, Text} from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
export default function PostCaption({caption,_id}) {
    return (
        <Box mt={2} ml={4}>
              <Link to={`post/${ _id}`}>
            <Text fontSize="sm" fontWeight="medium">{caption}</Text>
            </Link>
        </Box>
    )
}
