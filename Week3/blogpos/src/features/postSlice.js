import { createSlice } from '@reduxjs/toolkit'

const postSlice= createSlice({
    name: 'posts',
    initialState:[],
    reducers:{
        addPost:(state,action)=>{
            const newPost={
                id:Date.now(),
                title:action.payload.title,
                content:action.payload.content,
            }
            state.push(newPost)
        },
        deletPost:(state,action)=>{
            return state.filter((post)=>post.id!==action.payload.id)
        },
    }
})

export const{addPost,deletPost}=postSlice.actions
export default postSlice.reducer