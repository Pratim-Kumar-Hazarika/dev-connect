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
import {Link} from "react-router-dom"
export function PopOver() {

    return (
        <Popover >
            <PopoverTrigger>
                <Avatar
                    cursor="pointer"
                    size="sm"
                    name="Ryan Florence"
                    src="https://static.highsnobiety.com/thumbor/vQLL2siTyzzbG_eq0wWUMFudvDs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2018/07/25125520/ronaldo-medical-stats-01.jpg"/>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow/>
                <PopoverCloseButton/>
                <PopoverBody>
                <Link to="/account">
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
                    <Button mt={"2px"} variant="ghost" size="md" fontSize="md" fontWeight="medium">
                        Log Out
                    </Button>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
