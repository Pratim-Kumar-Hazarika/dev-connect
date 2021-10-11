import axios from "axios"

export async function followingRequestHadler(_id, token) {
    return await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/following`, {
        userId: _id
    }, {
        headers: {
            authorization: token
        }
    })
}

export async function unfollowRequestHandler(_id, token) {
    return await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/unfollow`, {
        userId: _id
    }, {
        headers: {
            authorization: token
        }
    })
}
