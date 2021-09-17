import {Box, Grid, Image} from '@chakra-ui/react'
import React from 'react'

export default function DisplayPostImage({imageSrc}) {
    return (
        <Grid templateColumns="repeat(1, 1fr)" gap={1}>
            <Box maxWidth="100%" ml={4} mt={5}>
                <Image
                    boxSize="100%"
                    objectFit="cover"
                    src={imageSrc}/>
            </Box>
        </Grid>
    )
}
