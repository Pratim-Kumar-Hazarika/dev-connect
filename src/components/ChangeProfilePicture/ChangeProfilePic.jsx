import {Avatar} from '@chakra-ui/avatar'
import {Center, Flex, Box, Text} from '@chakra-ui/layout'
import React ,{useState} from 'react'
import UplodImage from '../UplodImage'
import {useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { changeProfilePictureButtonClicked } from "../../features/settings/profileSettingsSlice";
export default function ChangeProfilePic() {
    const userprofileDetails = useSelector(state=>state.profileSettings)
    const [profileImgSrc,setprofileImgSrc] = useState()
    const dispatch = useDispatch()
    function handleCheck(e) {
        const file = e.target.files[0];
        previewFile(file);
    
    }

    function previewFile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setprofileImgSrc(reader.result)
            dispatch(changeProfilePictureButtonClicked({imageSrc:reader.result}))
        };
        
        
    }
    const {profilePicture} = useSelector(state=>state.profileSettings)
    console.log("yp the profile picture",{profilePicture})
       
    return (
        <Center mt={7}>
            <Box width="500px">
                <Flex justifyContent="space-around">
                    <Box width="20%">
                        <Avatar
                            cursor="pointer"
                            size="md"
                            name=""
                            src={profilePicture}/>
                    </Box>
                    <Box width="70%">
                        <Text fontSize="lg" fontWeight="medium">{userprofileDetails.username}</Text>
                      <UplodImage handeInputChange={handleCheck}/>
                    </Box>
                </Flex>
            </Box>
        </Center>
    )
}
