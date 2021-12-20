import "./Frame.scss";
export default function Frame(props) {
  return (
    <div className="frame">
      <div className="frame__textline">
        <h2>{props.text}</h2>
      </div>
    </div>
  );
}
