import {Button} from '@chakra-ui/button'
import {Box, Flex, Text} from '@chakra-ui/react'
import React from 'react'
import {ClarityHeartSolid, FaRegularComment} from '../Icons/Icons'

export default function PostLikeComment() {
    return (
        <Box ml={4} mt={5}>
            <Flex>
                <Box>
                    <Button
                        variant="ghost"
                        size="xs"
                        color="gray"
                        fontWeight="medium"
                        border="1px solid #F9FAFB">
                        <ClarityHeartSolid/>
                        <Text ml={2}>35</Text>
                    </Button>

                </Box>

                <Box ml={5}>
                    <Button
                        variant="ghost"
                        size="xs"
                        color="gray"
                        fontWeight="medium"
                        border="1px solid #F9FAFB">
                        <FaRegularComment/>
                        <Text ml={2}>35 comments</Text>
                    </Button>
                </Box>
            </Flex>
        </Box>

    )
}
