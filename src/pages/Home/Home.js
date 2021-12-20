import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Frame from "../../components/Frame/Frame";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [build, setBuild] = useState(false);

  const getMovies = async () => {
    await axios.get("/movie/findmany").then((response) => {
      if (build) {
        setMovies(response.data);
      }
    });
  };
  useEffect(() => {
    setBuild(true);
    getMovies();
  }, [build]);

  return (
    <div className="home">
      <Navbar />
      <Frame text="Blueflix" />
      <div className="home__cards">
        {movies.map((item) => (
          <Card
            id={item.id}
            image={item.cover}
            name={item.title}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
