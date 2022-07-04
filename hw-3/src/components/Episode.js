import "./Episodes.css"
import {Link } from "react-router-dom";
function Episode({episode}) {
    return (
      <div className="episode">
        <h2 className="episode--title">{episode.name}</h2>
        <p className="episode--date">{episode.air_date}</p>
        <div className="episode--grid">
          <img className="episode--grid--image" src={require("./image.jpg")} />
          <ul className="episode--grid--characters">
            <h2 className="episode--grid--characters__title">Characters:</h2>
            {episode.characters.map(({ name }) => {
              return (
                <Link
                  to={"/" + name.replace(/\s+/g, "")}
                  className="episode--grid--characters__name"
                >
                  {name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
}
export default Episode;