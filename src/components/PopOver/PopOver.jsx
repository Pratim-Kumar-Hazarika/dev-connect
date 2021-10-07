import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Avatar,
    Box,
    Flex,
    Text
} from "@chakra-ui/react";
import React from "react";
import {IconParkOutlineSetting, RadixIconsAvatar, TeenyiconsHomeOutline} from "./PopOverIconsSvg";
import {Link,useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {logoutButtonPressed} from "../../features/auth/authSlice";
export function PopOver({imgSrc}) {
    const dispatch = useDispatch() 
    const {username} = useSelector(state => state.profileSettings)
    console.log("state is==>",{username})
    const navigate = useNavigate()
    function logoutHandler() {
        dispatch(logoutButtonPressed())
        navigate("/login")
    }
    return (
        <Popover >
            <PopoverTrigger>
                <Avatar
                    cursor="pointer"
                    size="sm"
                    name=""
                    src={imgSrc}/>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow/>
                <PopoverCloseButton/>
                <PopoverBody>
                    <Link to={`/account/${username}/`}>
                        <Flex alignItems="center">
                            <RadixIconsAvatar/>
                            <Text ml={3}>

                                Profile
                            </Text>
                        </Flex>
                    </Link>
                </PopoverBody>
                <PopoverBody>
                    <Link to="/">
                        <Flex>
                            <TeenyiconsHomeOutline/>
                            <Text ml={3}>
                                Home</Text>
                        </Flex>
                    </Link>
                </PopoverBody>
                <PopoverBody>
                    <Link to="/account/settings">
                        <Flex>
                            <IconParkOutlineSetting className="popover_icons"/>
                            <Text ml={3}>

                                Settings
                            </Text>
                        </Flex>
                    </Link>
                </PopoverBody>
                <PopoverBody>
                    <hr/>
                    <Button
                        onClick={logoutHandler}
                        mt={"2px"}
                        variant="ghost"
                        size="md"
                        fontSize="md"
                        fontWeight="medium">
                        Log Out
                    </Button>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
