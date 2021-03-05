import { useParams } from 'react-router-dom'

const BlogDetais = () => {
    const { id } = useParams()

    return ( 
        <div className="blog-details">
            <h2> Blog Details - { id }</h2>
        </div>
     )
}
 
export default BlogDetais