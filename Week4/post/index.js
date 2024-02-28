const mongoose=require('mongoose');
const postService=require('./services/postService')

//coonect to Db
mongoose.connect('mongodb://localhost:27017/fsdinternship')

async function performOp(){
    try{
        const newPost=await postService.createPost('Sample post','This is the content of sample post')
        console.log('Post created',newPost)

        //Read all posts
        const allPosts=await postService.getAllPosts();
        console.log('All post',allPosts)

        //delete posts
        const deletePosts=await postService.deletePostById(postIdToUpdate)
        console.log('Delete the post',deletePosts)
    }catch(err){
        console.log('Err',err)
    }
}
performOp()