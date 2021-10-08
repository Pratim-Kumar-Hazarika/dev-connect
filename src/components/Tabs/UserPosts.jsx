import React from 'react'
import {Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import {MdiGrid, RiVideoLine, UilBookmarkFull} from '../Svgs'
import Posts from '../UserPosts/Posts'
import UserTweets from '../UserPosts/UserTweets'

export default function UserPosts({_id}) {
    return (
        <Tabs mt={8}>
            <TabList justifyContent="space-around">
                <Tab><MdiGrid/>Media</Tab>
                <Tab><RiVideoLine/>Tweets</Tab>
                <Tab><UilBookmarkFull/>Saved</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Posts _id ={_id}/>
                </TabPanel>
                <TabPanel>
                   <UserTweets _id ={_id}/>
                </TabPanel>
                <TabPanel>
                    <p>Comming Soon xD</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
