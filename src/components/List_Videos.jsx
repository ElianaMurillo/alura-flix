import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { buscar } from "../api/api.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const List_Videos = ({ url }) => {

    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        buscar(url, setVideos)
    }, [url])

    console.log("llegué aquí" + videos);

    return (
        <section>
            {
                videos.map(video => {
                    const { id, title, image, description } = video;
                    return <Link to={`/videos/${id}`} key={id}>
                        <div>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <img>{image}</img>
                        </div>
                    </Link>
                })
            }
        </section>
    )

}

export default List_Videos;
