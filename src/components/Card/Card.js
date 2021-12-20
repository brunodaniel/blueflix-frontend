import "./Card.scss";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();

  const gotoMovie = () => {
    navigate("/movie", { state: props.id });
  };

  return (
    <div className="card" onClick={gotoMovie}>
      <img src={props.image} alt="img" />
      <span>{props.name}</span>
    </div>
  );
}
