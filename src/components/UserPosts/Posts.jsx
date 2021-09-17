import React from 'react'
import {Box, Grid, Image,Text} from "@chakra-ui/react"
import "./Posts.css"
import {Link,useParams} from "react-router-dom"
import {useSelector} from 'react-redux'
export default function Posts() {
    const posts = useSelector(state => state.post.post.filter((post)=>post.flag === "image-exists")) ||{}
    return (
        <Box className="posts">
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                {
                        posts?.map(({_id, image}) => (
                            <Box maxWidth="100%">
                                <Link to={`/post/${ _id}`}>
                                    <Image boxSize="100%" objectFit="cover"  src={image}/>
                                </Link>
                            </Box>
                        ))
            }
            </Grid>
        </Box>

    )
}
