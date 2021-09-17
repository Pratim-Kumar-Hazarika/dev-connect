import React from 'react'
import {Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import {MdiGrid, RiVideoLine, UilBookmarkFull} from '../Svgs'
import Posts from '../UserPosts/Posts'
import UserTweets from '../UserPosts/UserTweets'

export default function UserPosts() {
    return (
        <Tabs mt={8}>
            <TabList justifyContent="space-around">
                <Tab><MdiGrid/>Media</Tab>
                <Tab><RiVideoLine/>Tweets</Tab>
                <Tab><UilBookmarkFull/>Saved</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Posts/>
                </TabPanel>
                <TabPanel>
                   <UserTweets/>
                </TabPanel>
                <TabPanel>
                    <p>Saved Posts !!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
