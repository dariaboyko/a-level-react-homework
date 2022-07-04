import "./Episodes.css";
function Character({ character }) {
  return (
    <section className="character">
      <h1 className="episode--title">{character.name}</h1>
      <img src={character.image} />
      <h2 className="episode--title">Episodes:</h2>
      <ul>
        {character.episode.map(({ name, air_date }) => {
          return (
            <li className="episode--grid--characters__title">
              {name}
              <br />
              <span className="episode--date">{air_date}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Character;
