import React, { useState } from "react";
import section from "./SectionValues";
import { Link } from "react-router-dom";

const Search = ({setSearch}) => {

    const [userChoice, setUserChoice] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setUserChoice(e.target.value);
    };

    const handleClick = (e) => {
        setSearch(userChoice);
    }

    const sectionList = section.map((el) => {
        return <option key={el}>{el}</option>
    })

    return (
        <div>
            <form className="form">
                <input
                type="text"
                placeholder="Search..."
                className="input-field"
                list="dropdown-menu"
                value={userChoice}
                onChange={handleChange}
                required
                ></input>
                <datalist id="dropdown-menu">
                    {sectionList}
                </datalist>
                <div>
                    <Link to={`/filter`} style={{ textDecoration: 'none' }}>
                        <button onClick={handleClick} type="submit">
                            GO!
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Search;