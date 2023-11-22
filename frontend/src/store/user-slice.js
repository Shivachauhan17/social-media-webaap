import {createSlice} from '@reduxjs/toolkit'


const userSlice=createSlice({
    name:"user",
    initialState:{
        bio:{
            profession:"",
            hobby:"",
            birthday:"",
            love_to_do:""
        },
        username:""
    },
    reducers:{
        setUsername(state,payload){
            state.username=payload.username
        },


        setBio(state,payload){
            state.bio.profession=payload.profession;
            state.bio.hobby=payload.hobby;
            state.bio.birthday=payload.birthday;
            state.bio.love_to_do=payload.love_to_do;
        }

    }

})

export const userActions=userSlice.actions;
export default userSlice;