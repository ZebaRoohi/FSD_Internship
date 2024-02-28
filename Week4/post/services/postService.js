const Post=require('../models/postModel')

async function createPost(title,content){
try{
    const newPost=new Post({title,content})
    await newPost.validate();
    await newPost.save();
    return newPost;
}catch(err){
    throw err
}
}
async function getAllPosts(){
    try{
        return await Post.find();
    }catch(err){
        throw err
    }
}
async function deletePostById(postId){
    try{
        return await Post.findByIdAndDelete(postId)
    }catch(err){
        throw err
    }
}

module.exports={createPost,getAllPosts,deletePostById}