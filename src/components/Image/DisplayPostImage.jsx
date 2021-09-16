import {Box, Grid, Image} from '@chakra-ui/react'
import React from 'react'

export default function DisplayPostImage() {
    return (
        <Grid templateColumns="repeat(1, 1fr)" gap={1}>
            <Box maxWidth="100%" ml={4} mt={5}>
                <Image
                    boxSize="100%"
                    objectFit="cover"
                    src="https://images.genius.com/621bdd4975845663c246fc8b8fdcee9c.1000x1000x1.jpg"/>
            </Box>
        </Grid>
    )
}
