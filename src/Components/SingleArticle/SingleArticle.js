import React from "react";
import './SingleArticle.css'
import { Link } from "react-router-dom";

const SingleArticle = ({setArticle, story, shortURL, section, subsection, title, url, created_date}) => {

    const shorterURL = shortURL.replace('https://nyti.ms/', '')

    const handleClick = (action) => {
        action(story)
    }

    return (
        <div className="card">
            <h3>{title}</h3>
            <Link to={`/details`}>
                <button className="info-btn" onClick={() => {handleClick(setArticle)}}>More infomation on the article</button>
            </Link>
        </div>
    )
}

export default SingleArticle;