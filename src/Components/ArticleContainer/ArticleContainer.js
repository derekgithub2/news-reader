import React, { useEffect, useState } from "react";
import SingleArticle from '../SingleArticle/SingleArticle'
import './ArticleContainer.css'

const ArticleContainer = ({setCurrentArticle}) => {

    const [topStories, setTopStories] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('')

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.nytimes.com/svc/${filter}/v2/home.json?api-key=G0CtJOsSP065KA2Nzd4tz0wIMec1Sgv1`)
            const data = await res.json()
            .catch((error) => {
                setError(error)
            })
            setTopStories(data)
            setLoading(false)
        }
        fetchData();
    },[filter])

    if (!loading) {
        return (
            <section className="main-container">
                <section className="top-main-container">
                    TOP STORIES
                    <button onClick={handleFilter} value='topstories'>Top Stories</button>
                    <button onClick={handleFilter} value='home'>Home</button>
                </section>
                <section className="bottom-container">
                    <section className="top-stories-container">
                        {topStories.map((story) => {
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
                        })}
                    </section>
                </section>
            </section>
        )
    }

}

export default ArticleContainer;