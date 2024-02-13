import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState:{
        info: null,
        hobbies: null,
        gender: null,
        file: null,
    },
    reducers:{
        addInfo: (state, action)=>{
            state.info = action.payload;
        },
        addHobbies: (state, action)=>{
            state.hobbies = action.payload
        },
        addGender: (state, action)=>{
            state.gender = action.payload
        },
        addFile:(state, action)=>{
            state.file = action.payload
        }
        
    }
})

export const {addInfo , addHobbies, addGender} = userSlice.actions
export default userSlice.reducer