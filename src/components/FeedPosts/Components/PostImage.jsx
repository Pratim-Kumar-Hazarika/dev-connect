import {Box, Grid, Image} from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

export default function PostImage({imageSrc,_id}) {
    return (
        <Grid templateColumns="repeat(1, 1fr)" gap={1}>
            <Box maxWidth="100%" ml={4} mt={5}>
                <Link to={`post/${ _id}`}>
                    <Image
                        boxSize="100%"
                        objectFit="cover"
                        src={imageSrc}/>

                </Link>
            </Box>
        </Grid>
    )
}
