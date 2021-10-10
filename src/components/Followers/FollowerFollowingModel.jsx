import {Avatar} from '@chakra-ui/avatar'
import {
    Box,
    Flex,
    Spacer,
    VStack,
    Text,
    Button
} from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {Link, useParams} from "react-router-dom"
import {followingRequestHadler, unfollowRequestHandler} from '../../apiRequests/followUnfollowApiRequests'
import {addLoggedInUserAsFollower, removeFollowerFromLoggedInUser, removeLoggedInUserFromUser} from '../../features/followers/followerSlice'
import {addFollowingToLoggedInUser, removeFollowingFromLoggedInUser, removeLoggedInUserFromFollowings} from '../../features/followings/followingSlice'
export default function FollowerFollowingModel({from, btnText, username, _id, profilePicture}) {
    const dispatch = useDispatch()
    const {accountId} = useParams()
    const {userId} = useSelector(state => state.profileSettings)
    const getLoggedInUser = useSelector(state => state.allUsers.allUsers
        ?.filter((user) => user._id === userId))
    const {token} = useSelector(state => state.authentication)

    async function followUnfollowHanlderFromSameProfile() {
        if (from === "followers" && !accountId) {
            dispatch(removeFollowerFromLoggedInUser({_id: _id}))
            dispatch(removeLoggedInUserFromFollowings({admin: userId, user: _id}))
        } else if (from === "following" && !accountId) {
            dispatch(removeLoggedInUserFromUser({admin: userId, user: _id}))
            dispatch(removeFollowingFromLoggedInUser({_id: _id}))
        }
        try {
            const response = await unfollowRequestHandler(_id, token)
            if (response.status === 200) {
                console.log("Yo successfull", response)
            }
        } catch (error) {
            console.log("request not successfull")
        }
    }

    async function followUnfollowHanlderFromDifferentProfile() {
        const ifIdExistsInUserFollowingList = userfollowings.find((user) => user._id === _id)
        if (!ifIdExistsInUserFollowingList) {
            dispatch(addFollowingToLoggedInUser({userToBeFollowed: _id, accountId: accountId}))
            dispatch(addLoggedInUserAsFollower({loggedInUser: getLoggedInUser[0], _id: _id}))
            try {

                const response = await followingRequestHadler(_id, token)
                if (response.status === 200) {
                    console.log("Yo successfull", response)
                    ///show toast if necessary
                }
            } catch (error) {
                console.log("reuquest no successffull")
            }
        } else if (ifIdExistsInUserFollowingList) {
            dispatch(removeLoggedInUserFromUser({admin: userId, user: _id}))
            dispatch(removeFollowingFromLoggedInUser({_id: _id}))
            try {

                const response = await unfollowRequestHandler(_id, token)
                if (response.status === 200) {
                    console.log("Yo successfull-->", response)
                    ///show toast if necessary
                    return true;
                }
            } catch (error) {
                console.log("reuquest no successffull")
            }
        } else {
            console.log("error occured")
        }

    }

    const {userfollowings} = useSelector(state => state.userFollowings)

    function buttonTextHandler(_id) {
        const ifIdExistsInUserFollowingList = userfollowings.find((user) => user._id === _id)

        if (ifIdExistsInUserFollowingList) {
            return "Following"
        }
        return "Follow"
    }
    return (
        <VStack spacing={4} align="stretch">
            <Flex >
                <Box p="4">
                    <Flex alignItems="center">
                        <Avatar size="md" src={profilePicture}/>
                        <Link to={`/profile/${_id}`}>
                            <Text ml={4} fontWeight="bold">{username}</Text>
                        </Link>
                    </Flex>
                </Box>
                <Spacer/>
                <Box p="4">
                    {_id === userId
                        ? " "
                        : <Button
                            onClick={!accountId
                            ? followUnfollowHanlderFromSameProfile
                            : followUnfollowHanlderFromDifferentProfile}
                            width={"110px"}>{from === "followers" && !accountId
                                ? btnText
                                : buttonTextHandler(_id)}</Button>
                                }
                </Box>
            </Flex>
        </VStack>
    )
}
