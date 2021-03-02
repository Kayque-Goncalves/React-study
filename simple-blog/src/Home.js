import { useState } from 'react'

const Home = () => {
    // const [name, setName] = useState('Thiago')

    // const HandleClick = () => {
    //     setName('Kayque')
    // }

    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlogs] = useState([
        { title: 'Blog 01', body: 'Lorem ipsum...', author: 'Kayque', id: 1 }, 
        { title: 'Blog 02', body: 'Lorem ipsum...', author: 'Thiago', id: 1 }, 
        { title: 'Blog 03', body: 'Lorem ipsum...', author: 'Pedro', id: 3 } 
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className='blog-preview' key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
            {/* <p>{ name }</p> */}
            {/* <button onClick={ HandleClick }>Click me</button> */}
        </div>
     )
}

export default Home