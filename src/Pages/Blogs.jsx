import {useEffect, useState} from "react";


export const Blogs = () => {
    
    const[blogs,SetBlogs]=useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=> res.json())
            .then( data => SetBlogs(data))

        console.log(blogs);

        
    }, []);
    return (
        <>
           <div>
                 <p>{blogs.length}</p>
               {
                   blogs.map(blog => <div>
                       <h2>{blog.title}</h2>
                   </div>)
               }
           </div>
        </>
    )
}