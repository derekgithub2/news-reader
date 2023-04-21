import React from "react";
import './SingleView.css'

const SingleView = ({currentStory}) => {

    return (
        <div className="story-container">
            <div className="current-story">
                <h2>{currentStory.title}</h2>
                <p>section: {currentStory.section}</p>
                <p>subsection: {currentStory.subsection ? currentStory.subsection : 'n/a'}</p>
                <p>{currentStory.abstract ? currentStory.abstract : 'n/a'}</p>
                <a href={currentStory.url ? currentStory.url : 'n/a'}>link to the article</a>
                <p>author: {currentStory.author ? currentStory.author : 'n/a'}</p>
                <img src={currentStory.multimedia[0].url} alt="story-image" className="story-image"/>
            </div>
        </div>
    )
}

export default SingleView;