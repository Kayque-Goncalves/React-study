import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {

    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlogs] = useState([
        { title: 'Blog 01', body: 'Lorem ipsum...', author: 'Kayque', id: 1 }, 
        { title: 'Blog 02', body: 'Lorem ipsum...', author: 'Thiago', id: 2 }, 
        { title: 'Blog 03', body: 'Lorem ipsum...', author: 'Kayque', id: 3 } 
    ])

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Kayque')} title="Kayque's blogs" />
        </div>
     )
}

export default Home