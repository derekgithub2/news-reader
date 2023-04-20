import React, { useEffect, useState } from "react";
import SingleArticle from '../SingleArticle/SingleArticle'
import './ArticleContainer.css'

const ArticleContainer = () => {

    const [topStories, setTopStories] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const getStories = () => {
        return fetch(""
            // 'https://c535730c-b76d-4a7f-a6f6-2d101629a2c4.mock.pstmn.io', {
            // method: "GET",
            // headers: {
            //     "api-key": "G0CtJOsSP065KA2Nzd4tz0wIMec1Sgv1"
            // }}
        )
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error()
            }
        })
        .catch(err => {
            setError(err)
        })
    }

    useEffect(() => {
        if(loading){
            setLoading(false)
            getStories()
            .then(data => {
                setTopStories(data)
                console.log(topStories)
            })
        } 
    },[])

    // The possible section value are: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world.
    // pass in to use in fetch request?



    return (
        <section className="main-container">
            <section className="top-main-container">
                TOP STORIES
            </section>
            <section className="bottom-container">
                <section className="top-stories-container">

                    {/* <SingleArticle /> */}

                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                    <p className="placeholder">
                        PLACEHOLDER
                    </p>
                </section>
                <section className="all-articles">
                    <p>All Articles:</p>
                    <ol>
                        <li>Article 1 </li>
                        <li>Article 2 </li>
                        <li>Article 3 </li>
                        <li>Article 4 </li>
                        <li>Article 5 </li>
                        <li>Article 6 </li>
                    </ol>
                </section>
            </section>
        </section>
    )
}

export default ArticleContainer;