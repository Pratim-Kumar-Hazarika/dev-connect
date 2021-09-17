import React from 'react'
import {Box, Grid, Image, Text} from "@chakra-ui/react"
import "./Posts.css"
import {Link, useParams} from "react-router-dom"
import {useSelector} from 'react-redux'
export default function UserTweets() {
    const posts = useSelector(state => state.post.post.filter(post => post.flag !== "image-exists")) || {}
    return (
        <Box className="posts">
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                {posts
                    ?.map(({_id, image, caption}) => (
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
                    ))
}
            </Grid>
        </Box>

    )
}
