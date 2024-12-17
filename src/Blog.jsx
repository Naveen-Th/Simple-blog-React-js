import React,{useState} from "react";
import './App.css'

export const Blog = () => {
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const [posts,setPosts] = useState([]);

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleCreate = () => {
        setPosts([...posts,{title,desc}]);
        console.log(posts)
        setTitle('');
        setDesc('');
    }

    const handleDelete = (id) => {
        const newPosts = posts.filter((_,index) => index !== id);
        setPosts(newPosts);
        console.log(posts)
    }
    return(
        <>
            <CreatePost title={title} desc={desc} onTitle={handleTitle} onDesc={handleDesc} handleCreate={handleCreate}></CreatePost>
            <Posts posts={posts} handleDelete={handleDelete}></Posts>
        </>
    )
}
const CreatePost = ({title,desc,onDesc,onTitle,handleCreate}) => {
    return(
        <>
            <div className="container">
                <input placeholder="Title" value={title} onChange={onTitle}/>
                <textarea placeholder="Description" value={desc} onChange={onDesc}></textarea>
                <button onClick={handleCreate}>Create</button>
            </div>
        </>
    )
}



const Posts = ({posts,handleDelete}) => {
    return(
        <>  
            <div className="card">
                <PostsLists posts={posts} handleDelete={handleDelete}></PostsLists>
            </div>
        </>
    )
}

const PostsLists = ({posts,handleDelete}) => {
    return(
        posts.map((item,key)=> (
            <div className="card-body" key={key}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button onClick={() => handleDelete(key)}>Delete</button>
            </div>
        ))
    )
}
