import React, { useEffect, useState } from "react";
import './SingleView.css'
import { useParams } from 'react-router-dom'

const SingleView = (props) => {

    const { id } = useParams()
    // const [id, setID] = useState()

    useEffect(() => {
        console.log(`${id}`)
    },[])

    return (
        <div>
            {id}
        </div>
    )
}

export default SingleView;