
import {createSlice} from '@reduxjs/toolkit'

const windowSlice=createSlice({
    name:"window",
    initialState:{
        isWindow:false,
    },

    reducers:{
       
        closeWindow(state){
            state.isWindow=false
        },

        openWindow(state){
            const newWindow=window.open('https://friends-loop.onrender.com/auth/google',"_self")//,'_blank',"width=500,height=600"
            if(newWindow){
                state.isWindow=true
            }
        }

    }
})


export const windowActions=windowSlice.actions

export default windowSlice