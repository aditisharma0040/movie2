import "./Container.css";
import React, { useEffect } from "react";
import Movielist from "./Movielist";
import {useState} from "react" ;
let API_KEY="&api_key=9f1f91b42997a7af60c83cdce4a32b6c";
let base_url="https://api.themoviedb.org/3";
let url= base_url+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"+API_KEY;
const Container=()=>{
  const [movieData,setData]=useState([]);
  const [url_set,setUrl]=useState(url);
  const [search,setSearch]=useState("");
  useEffect(()=>{
    fetch(url_set).then(res=>res.json()).then(data=>{
      console.log(data.results);
      setData(data.results);
    });
  },[url_set])
  const searchMovie=(evt)=>{
    if(evt.key=="Enter"){
      url=base_url+"/search/movie?api_key=9f1f91b42997a7af60c83cdce4a32b6c&query="+search;
      setUrl(url);
      setSearch(" ");

    }

  }
 return(
 <>
  <div className="header">
    <div className="name"> 
    < img className="movimg" src="https://cdn.dribbble.com/users/5605145/screenshots/12927217/media/28fc4b266a55a9bfad1145365d162c4f.jpg?resize=400x300&vertical=center"/>
    Movizz</div>
    <div className="searchBox">
      <img className="searchicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6dE6xrH7Gwjmvd-mi4fVYzTd4sjLpaqOCw&s"/>
      <input type="text" className="searchinput" placeholder="search movies here..." onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyUp={searchMovie}></input>
    </div>
  </div>
  <div className='listdis'>{
    movieData?.length? movieData.map((res,pos)=>{
      return(
        <Movielist info={res} key={pos}/>
      )
    }):<p className="notfound">Not Found</p>
  }

  </div>
</>
 )
  
}
export default Container;