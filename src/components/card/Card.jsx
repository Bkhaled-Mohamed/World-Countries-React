import "./card.css";

function Card(props) {
  const { darkMode } = props;
  return (
    <div className={`card ${darkMode ? "dark" : ""}`}>
      <img src={props.flag} alt={props.name} />
      <div className="text">
        <h2>{props.name}</h2>
        <p>Population : {props.population}</p>
        <p>Region : {props.region}</p>
        <p>Capital : {props.capital}</p>
      </div>
    </div>
  );
}

export default Card;
