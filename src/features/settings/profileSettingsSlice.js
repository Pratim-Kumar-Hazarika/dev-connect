import { createSlice ,current} from "@reduxjs/toolkit";

const profileSettingsSlice = createSlice({
    name:"profileSettings",
    initialState:{
        profilePicture: null
    },
    reducers:{
        changeProfilePictureButtonClicked(state,action){
            console.log("change pic button",current(state),action)
            state.profilePicture = action.payload.imageSrc
            console.log("change after button",current(state),action)
        },
    },
    extraReducers:{}
})
export const {changeProfilePictureButtonClicked} = profileSettingsSlice.actions
export default profileSettingsSlice.reducer;