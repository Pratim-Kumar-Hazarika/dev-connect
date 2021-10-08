import React from 'react'
import {Box, Grid, Image,Text} from "@chakra-ui/react"
import "./Posts.css"
import {Link,useParams} from "react-router-dom"
import {useSelector} from 'react-redux'

export  function ProfilePostsImageView({_id,image}){
    return (
        <Box maxWidth="100%">
            <Link to={`/post/${ _id}`}>
            <Image boxSize="100%" objectFit="cover"  src={image}/>
            </Link>
         </Box>
    )
}

export default function Posts({_id}) {

    const posts = useSelector(state => state.post.post.filter((post)=>post.flag === "image-exists")) ||[]
  
    const getUserPosts = useSelector(state=>state.post.feedPosts.filter(posts=>posts._id._id === _id))

    const filterOutUserPicPosts = getUserPosts[0]?.posts.filter((posts)=>posts.flag === "image-exists")|| []
   
  
    return (
        <>
        {
            filterOutUserPicPosts.length === 0 ?<h1>No Media</h1> :  <Box className="posts">
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                {
                    _id === "admin" ?  posts?.map(({_id, image}) => (
                        <ProfilePostsImageView _id={_id} image={image}/>
                    )) :  filterOutUserPicPosts?.map(({_id, image}) => (
                        <ProfilePostsImageView _id={_id} image={image}/>
                    ))
                }
                
    
            </Grid>
        </Box>
        }
</>
    )
}
