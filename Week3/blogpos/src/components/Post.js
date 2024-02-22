import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, deletPost } from '../features/postSlice';

const Post = () => {
    const posts=useSelector((state)=>state.posts);
    const dispatch=useDispatch()

    const[formData,setFormData]=useState({title:'',content:''});

    const handleInputChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleAddPost=()=>{
        dispatch(addPost(formData))
        setFormData({title:'',content:''})
    }

    const handleDeletePost=(id)=>{
        dispatch(deletPost({id}))
    }
  return (
    <div className='blogs'>
        <h1>Blog Post</h1>
        <div className='add-data'>
            <h2>Add Post</h2>
            <label>Title:</label>
            <input type='text' name='title' placeholder='Enter the title' value={formData.title} onChange={handleInputChange} />

        <label>Content:</label>
        <textarea name='content' value={formData.content} onChange={handleInputChange} />
        <button onClick={handleAddPost} className='btn'>Add Post</button>
        </div>
      
      <div className='postview'>
        <h2>Posts</h2>
        <ul className='list-view'>

            {posts.map((post)=>(
                <li key={post.id} className='listdisplay'>
                <strong>Title:{post.title}</strong>
                <p>Content:{post.content}</p>
                <button onClick={()=>handleDeletePost(post.id)} className='btn'>Delete</button>
                </li>

            ))}
        </ul>
      </div>
    </div>
  )
}

export default Post
