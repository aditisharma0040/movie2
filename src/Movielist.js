import "./Movielist.css";
const Movielist =(movie)=>{
  let img_path="https://image.tmdb.org/t/p/w500"
  return(
   <div className="Moviecont">
    <img className="Coverimg" src={img_path+movie.info.poster_path}/>
  
    <div className="Moviename">{movie.info.title}</div>
    <div className="info">
      <div className="movieinfo">{movie.info.overview}</div>
    </div>
   </div>
  )
}
export default Movielist;