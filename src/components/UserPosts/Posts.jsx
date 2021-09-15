import React from 'react'
import {Box, Grid, Image} from "@chakra-ui/react"
import "./Posts.css"
export default function Posts() {
    return (
        <Box className="posts">
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                <Box maxWidth="100%">
                    <Image
                        boxSize="100%"
                        objectFit="cover"
                        src="https://images.genius.com/621bdd4975845663c246fc8b8fdcee9c.1000x1000x1.jpg"/>
                </Box>
            </Grid>
        </Box>

    )
}
