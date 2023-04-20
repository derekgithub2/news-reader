import React, { useEffect, useState } from "react";
import SingleArticle from '../SingleArticle/SingleArticle'
import './ArticleContainer.css'
import {mockData} from "../../mockData"

const ArticleContainer = ({setCurrentArticle}) => {
    console.log(mockData)

    const topStories = mockData.results

    // const [topStories, setTopStories] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    // const getStories = () => {
    //     return fetch(""
    //         'https://c535730c-b76d-4a7f-a6f6-2d101629a2c4.mock.pstmn.io', {
    //         method: "GET",
    //         headers: {
    //             "api-key": "G0CtJOsSP065KA2Nzd4tz0wIMec1Sgv1"
    //         }}
    //     )
    //     .then(res => {
    //         if(res.ok) {
    //             return res.json()
    //         } else {
    //             throw new Error()
    //         }
    //     })
    //     .catch(err => {
    //         setError(err)
    //     })
    // }

    // useEffect(() => {
    //     setTopStories(mockData.results)
    //     // if(loading){
    //     //     setLoading(false)
    //     //     console.log(topStories)
    //     //     getStories()
    //     //     .then(data => {
    //     //         setTopStories(data)
    //     //     })
    //     // } 
    // },[topStories])

    // The possible section value are: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world.
    // pass in to use in fetch request?

    const stories = topStories.map((story) => {
        return <SingleArticle 
        setArticle={setCurrentArticle}
        story={story}
        key={story.short_url}
        shortURL={story.short_url}
        section={story.section}
        subsection={story.subsection}
        title={story.title}
        url={story.url}
        created_date={story.created_date}/>
    })
    

    return (
        <section className="main-container">
            <section className="top-main-container">
                TOP STORIES
            </section>
            <section className="bottom-container">
                <section className="top-stories-container">
                    {stories}
                </section>
            </section>
        </section>
    )
}

export default ArticleContainer;