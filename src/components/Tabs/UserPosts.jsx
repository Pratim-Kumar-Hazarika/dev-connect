import React from 'react'
import {Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import {MdiGrid, RiVideoLine, UilBookmarkFull} from '../Svgs'
import Posts from '../UserPosts/Posts'

export default function UserPosts() {
    return (
        <Tabs mt={8}>
            <TabList justifyContent="space-around">
                <Tab><MdiGrid/>Posts</Tab>
                <Tab><RiVideoLine/>Videos</Tab>
                <Tab><UilBookmarkFull/>Saved</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Posts/>
                </TabPanel>
                <TabPanel>
                    <p>Videos will appear here !!</p>
                </TabPanel>
                <TabPanel>
                    <p>Saved Posts !!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
