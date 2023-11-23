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
        setUsername(state,action){
            
            const username=action.payload;
            state.username=username;
        },


        setBio(state,action){
            state.bio.profession=action.payload.profession;
            state.bio.hobby=action.payload.hobby;
            state.bio.birthday=action.payload.birthday;
            state.bio.love_to_do=action.payload.love_to_do;
        }

    }

})

export const userActions=userSlice.actions;
export default userSlice;