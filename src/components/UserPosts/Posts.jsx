import React from 'react'
import {Box, Grid, Image} from "@chakra-ui/react"
import "./Posts.css"
import {Link} from "react-router-dom"
export default function Posts() {
    return (
        <Box className="posts">
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                <Box maxWidth="100%">
                    <Link to={`/post/${1783920347491}`}>
                    <Image
                        boxSize="100%"
                        objectFit="cover"
                        src="https://images.genius.com/621bdd4975845663c246fc8b8fdcee9c.1000x1000x1.jpg"/>
                 </Link>
                </Box>
            </Grid>
        </Box>

    )
}
