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
                    <Flex alignItems="center">
                        <RadixIconsAvatar/>
                        <Text ml={3}>
                            Profile</Text>
                    </Flex>
                </PopoverBody>
                <PopoverBody>
                    <Flex>
                        <TeenyiconsHomeOutline/>
                        <Text ml={3}>
                            Home</Text>
                    </Flex>
                </PopoverBody>
                <PopoverBody>
                    <Flex>
                        <IconParkOutlineSetting className="popover_icons"/>
                        <Text ml={3}>
                            Settings</Text>
                    </Flex>
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
