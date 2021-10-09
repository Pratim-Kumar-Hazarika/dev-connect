import {Avatar} from '@chakra-ui/avatar'
import {
    Box,
    Flex,
    Spacer,
    VStack,
    Text,
    Button
} from '@chakra-ui/react'
import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {Link, useParams} from "react-router-dom"
import {addLoggedInUserAsFollower, removeFollowerFromLoggedInUser, removeLoggedInUserFromUser} from '../../features/followers/followerSlice'
import {addFollowingToLoggedInUser, removeFollowingFromLoggedInUser, removeLoggedInUserFromFollowings} from '../../features/followings/followingSlice'
export default function FollowerFollowingModel({from, btnText, username, _id, profilePicture}) {
    const dispatch = useDispatch()
    const {accountId} = useParams()
    const {userId} = useSelector(state => state.profileSettings)
    const getLoggedInUser = useSelector(state => state.allUsers.allUsers?.filter((user) => user._id === userId))

    function followingUnfollowingHandler() {
        if (!accountId) {
            if (from === "following") {
                dispatch(removeLoggedInUserFromUser({admin: userId, user: _id}))
                dispatch(removeFollowingFromLoggedInUser({_id: _id}))
            } else {
                dispatch(removeFollowerFromLoggedInUser({_id: _id}))
                dispatch(removeLoggedInUserFromFollowings({admin: userId, user: _id}))
            }
        } else {
            dispatch(addFollowingToLoggedInUser({userToBeFollowed: _id, accountId: accountId}))
            dispatch(addLoggedInUserAsFollower({loggedInUser: getLoggedInUser[0], _id: _id}))
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
                    <Button onClick={followingUnfollowingHandler} width={"110px"}>{from === "followers" && !accountId
                            ? btnText
                            : buttonTextHandler(_id)}</Button>
                </Box>
            </Flex>
        </VStack>
    )
}
