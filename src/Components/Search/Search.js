import React, { useState } from "react";
import section from "./SectionValues";
import { Link } from "react-router-dom";
import './Search.css'

const Search = ({setSearch}) => {

    const [userChoice, setUserChoice] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setUserChoice(e.target.value);
    };

    const handleClick = (e) => {
        setSearch(userChoice);
        setUserChoice('')
    }

    const sectionList = section.map((el) => {
        return <option key={el}>{el}</option>
    })

    return (
        <div className="search-container">
            <form className="form">
                <input
                type="text"
                placeholder="Search by topic..."
                className="input-field"
                list="dropdown-menu"
                value={userChoice}
                onChange={handleChange}
                required
                ></input>
                <datalist id="dropdown-menu">
                    {sectionList}
                </datalist>
            </form>
                <div>
                    <Link to={`/filter`} style={{ textDecoration: 'none' }}>
                        <button onClick={handleClick} type="submit">
                            GO!
                        </button>
                    </Link>
                </div>
        </div>
    )
}

export default Search;