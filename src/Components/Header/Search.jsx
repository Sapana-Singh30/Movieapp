import React, { useState } from 'react';
import "./Search.css";
// import Cards from '../Card/Cards';
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const [query, setQuery] = useState("");
    // const [hello, setHello] = useState([]);
const navigate = useNavigate();

    // const handleclick= ()=>{
    //      fetch(`https://api.themoviedb.org/3/search/movie?api_key=a471d602091bc4350ae9376899f4158d&language=en-US&query=${query}&page=1&include_adult=false`)

    //     .then(res => res.json())
    //      .then(data => setHello(data.results))

    //     //console.log(data.results)
    //     //setHello(data.results)
    //     // console.log(hello);
    //     //console.log(query);
    //     // setSearch(!search);
    //     setQuery("");
    // }

    // window.onload = function () {

    const handleClick = (e) => {
        // let input = document.querySelector('input');
        // input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {

                // fetch(`https://api.themoviedb.org/3/search/movie?api_key=a471d602091bc4350ae9376899f4158d&language=en-US&query=${query}&page=1&include_adult=false`)

                //     .then(res => res.json())
                //     .then(data => setHello(data.results))

                //console.log(data.results)
                //setHello(data.results)
                // console.log(hello);
                //console.log(query);
                // setSearch(!search);

                sendQuery();
            }
            // setQuery("");
        }


const sendQuery = (id) => {
    navigate("/showSearchResult",{
        state:{
    id: query
        }
        
    })

    setQuery("")
}


            
        // })
    
    // }



    const handlechange = (e) => {
        setQuery(e.target.value)
    }

    //console.log("query");
    // useEffect(() => {
    //     // getData()
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=a471d602091bc4350ae9376899f4158d&language=en-US&query=${query}&page=1&include_adult=false`)
    //         .then(res => res.json())
    //       .then(data => setHello(data.results))
    //     console.log(hello)

    // }, [search])


    // const getData = () => {
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=a471d602091bc4350ae9376899f4158d&language=en-US&query=${query}&page=1&include_adult=false`)
    //         .then(res => res.json())
    //         .then(data => setQuery(data.results))
    // }



    return (
        <>
            <div className='movie_search'>
                <div className='search_input'>
                    <input type="text" placeholder='Search movie'
                        value={query}
                        onChange={handlechange}
                        onKeyUp={handleClick}
                    />

                    {/* <button onClick={handleclick}>search</button> */}

                </div>

                {/* <div className="search_cards">
                    {
                        hello.map(movie => (
                            <Cards movie={movie} />
                        ))
                    }
                </div> */}
            </div>

        </>
    )
}

export default Search;

/*  <div className="list_cards">
                    {
                        hello.map(movie => (
                            <Cards movie={movie} />
                        ))
                    }
              </div> */