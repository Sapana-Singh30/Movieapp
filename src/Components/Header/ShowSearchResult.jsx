import React, { useEffect , useState} from 'react'
import { useLocation } from 'react-router-dom';
import Fard from '../Card/Fard';


const ShowSearchResult = () => {
  const location = useLocation();
  const [hello, setHello] = useState([]);

useEffect( () => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=a471d602091bc4350ae9376899f4158d&language=en-US&query=${location.state.id}&page=1&include_adult=false`)
    .then(res => res.json())
   .then(data => setHello(data.results))
},[location]);


    
    console.log(location);
    console.log(hello);
  return (
    <>
    <div className='show_result_heading'>
      <h4>See result about : </h4>
      {/* <h2>{movie movie.original_title}</h2> */}
      </div>
 <div className="list_cards">
                    {
                        hello.map(movie => (
                            <Fard movie={movie} />
                        ))
                    }
                </div> 
                </>
  )
}

export default ShowSearchResult;