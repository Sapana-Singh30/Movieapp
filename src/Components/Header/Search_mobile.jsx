import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search_mobile.css";
import { BiSearch } from "react-icons/bi";

const Search_mobile = () => {
    const [query_mobile, setQuery_mobile] = useState("");
    const navigate = useNavigate();

    const handleClick_mobile = (e) => {
        if (e.keyCode === 13) {
            sendQuery_mobile();
        }
    }

    const sendQuery_mobile = (id) => {
        navigate("/showSearchResult", {
            state: {
                id: query_mobile
            }

        }
       
        )
        setQuery_mobile("")
        // document.getElementsByClassName("search_input_mobile").style.display = "none";

    }
    const handlechange_mobile = (e) => {
        setQuery_mobile(e.target.value)
    }
    return (
        <>
            <div className='movie_search_mobile'>
                <div className='search_input_mobile'>
                    <input type="text" placeholder='Search movie'
                        value={query_mobile}
                        onChange={handlechange_mobile}
                        onKeyUp={handleClick_mobile}
                    />
                    < BiSearch className="mobile_searchIcon" />
                </div>
            </div>
        </>
    )
}

export default Search_mobile;

