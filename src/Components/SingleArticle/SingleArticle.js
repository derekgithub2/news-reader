import React from "react";
import './SingleArticle.css'
import { Link } from "react-router-dom";

const SingleArticle = ({setArticle, story, shortURL, section, subsection, title, url, created_date}) => {

    const shorterURL = shortURL.replace('https://nyti.ms/', '')
    
    const handleClick = (event) => {
        event.preventDefault()
        setArticle(story)
    }

    return (
        <div className="card">
            <h3>{title}</h3>
            {/* <p>section: {section}</p>
            <p>subsection: {subsection}</p>
            <a href={url}>go to the article!</a> */}
            <Link to={`/${shorterURL}`}>
                <button onClick={(event) => {handleClick(event)}}>More infomation on the article</button>
            </Link>
        </div>
    )
}

export default SingleArticle;