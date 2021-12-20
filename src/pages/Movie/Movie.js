import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
import "./Movie.scss";
import axios from "axios";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [build, setBuild] = useState(false);


  const getMoviesById = async () => {
    await axios.get("/movie/findUnique/{id}").then((response) => {
      if (build) {
        setMovies(response.data);
      }
    });
  };
  return (
    <div className="movie">
      <div className="card">
        <img src={cover} alt="img" />
        <span>{title}</span>
      </div>
    </div>
  );
}
