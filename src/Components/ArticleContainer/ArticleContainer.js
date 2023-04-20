import React, { useEffect, useState } from "react";
import SingleArticle from '../SingleArticle/SingleArticle'
import './ArticleContainer.css'
// import {mockData} from '../../mockData'

const ArticleContainer = ({sectionValue, setCurrentArticle}) => {
    
    const [topStories, setTopStories] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            let home = 'home'
            const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${sectionValue ? sectionValue : home}.json?api-key=G0CtJOsSP065KA2Nzd4tz0wIMec1Sgv1`)
            const newData = await res.json()
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
            setTopStories(newData.results)
        }
        fetchData();
        setLoading(false)
    },[sectionValue])

    if (!loading) {
        return (
            <>
                <section className="main-container">
                    <section className="top-main-container">
                        <h3>Top Articles</h3>
                    </section>
                    <section className="bottom-container">
                        <section className="top-stories-container">
                            {topStories.map((story) => {
                                return <SingleArticle 
                                setArticle={setCurrentArticle}
                                story={story}
                                key={story.url}
                                shortURL={story.short_url}
                                section={story.section}
                                subsection={story.subsection}
                                title={story.title}
                                url={story.url}
                                created_date={story.created_date}/>
                            })}
                        </section>
                    </section>
                </section>
            </>
        )
    } else {
        {loading && <div className="loading-div">Loading component here
        </div>}
    }
}

export default ArticleContainer;