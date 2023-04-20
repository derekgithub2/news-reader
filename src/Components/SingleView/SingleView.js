import React from "react";
import './SingleView.css'

const SingleView = ({currentStory}) => {

    return (
        <div className="current-story">
            <h2>{currentStory.title}</h2>
            <p>section: {currentStory.section}</p>
            <p>subsection: {currentStory.subsection}</p>
            <p>preview: {currentStory.abstract}</p>
            <a href={currentStory.link}>link to the article</a>
            <p>author: {currentStory.author}</p>
            <p>date published: {currentStory.published_date}</p>
            <p>date created: {currentStory.created_date}</p>
            <p>date updated: {currentStory.updated_date}</p>
            <img src={currentStory.multimedia[0].url} alt="story-image" className="story-image"/>
        </div>
    )
}

export default SingleView;