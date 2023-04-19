import React from "react";
import SingleArticle from '../SingleArticle/SingleArticle'
import './ArticleContainer.css'

const ArticleContainer = () => {
    return (
        <section className="main-container">
            <section className="top-stories-container">
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
                {/* <SingleArticle /> */}
            </section>
            <section className="other-container">

            </section>
        </section>
    )
}

export default ArticleContainer;