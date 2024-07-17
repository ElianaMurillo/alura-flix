import { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import List_Videos from "./List_Videos";

const Type_Video = () => {

    const [ categoriesVideos, setCategoriesVideos ] = useState([]);

return (<ul>
    {
        categoriesVideos.map( category => (
            <Link to={`/categories/${category.id}`} key= {category.id}>
                <li>{ category.name }</li>
            </Link>
        ) )
    }
</ul>)
}

export default Type_Video;