import { postLikeApiRequest, postUnlikeApiRequest } from "../apiRequests/postLikeUnlikeApiRequests"
import { likePost, unlikePost } from "../features/post/postSlice"

export async function likeButtonPressedByUser({dispatch,likedUsers,loggedInUser,postId,username,profilePicture,token,postBelongingToUser}) {
    const ifLiked = likedUsers.find(({_id}) => _id === loggedInUser)
    if (ifLiked) {
        dispatch(unlikePost({postId: postId, userId: loggedInUser}))
        try {
            const response = await postUnlikeApiRequest(postId, loggedInUser, postBelongingToUser, token)
        } catch (error) {
            console.log(error)
        }
    } else {
        dispatch(likePost({postId: postId,
            user: {
                _id: loggedInUser,
                username: username,
                profilePicture: profilePicture
            }
        }))
        console.log("Then like it")
        try {
            const response = await postLikeApiRequest(postId, loggedInUser, postBelongingToUser, token) 
        } catch (error) {
            console.log(error)
        }
    }

}