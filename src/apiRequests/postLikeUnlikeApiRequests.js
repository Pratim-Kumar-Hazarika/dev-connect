import axios from "axios"

export async function postLikeApiRequest(postId, loggedInUser, postBelongingToUser, token) {
    return await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/post/like`, {
        postId: postId,
        userWhoLikedId: loggedInUser,
        postBelongingToUserId: postBelongingToUser
    }, {
        headers: {
            authorization: token
        }
    })
}

export async function postUnlikeApiRequest(postId, loggedInUser, postBelongingToUser, token) {
    return await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/post/unlike`, {
        postId: postId,
        userWhoUnLikedId: loggedInUser,
        postBelongingToUserId: postBelongingToUser
    }, {
        headers: {
            authorization: token
        }
    })
}
