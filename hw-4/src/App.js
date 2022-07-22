import "./App.css";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider, connect } from "react-redux";
import {useState,useEffect} from 'react';


function promiseReducer(state, { type, status, name, payload, error }) {

  if (state === undefined) {
    return {};
  }

  if (type === "PROMISE") {
    return {
      ...state,
      [name]: { status, payload, error },
    };
  }

  return state;
}

const actionPending = (name) => ({
  type: "PROMISE",
  status: "PENDING",
  name,
});
const actionFulfilled = (name, payload) => ({
  type: "PROMISE",
  status: "FULFILLED",
  name,
  payload,
});
const actionRejected = (name, error) => ({
  type: "PROMISE",
  status: "REJECTED",
  name,
  error,
});
const actionPromise =
  (name, promise) =>
  
  async (dispatch) => {
    dispatch(actionPending(name));
    try {
      let payload = await promise;
      dispatch(actionFulfilled(name, payload));
      return payload;
    } catch (err) {
      dispatch(actionRejected(name, err));
    }
  };

let fetchAll = async (urls, set) => {
  const res = await Promise.all(urls.map((u) => fetch(u)));
  const jsons = await Promise.all(res.map((r) => r.json()));
  set(jsons);
};

  function Person({person,src}) {
    const [films, setFilms] = useState()
    const [starships, setStarships] = useState();
    person && fetchAll(person.films, setFilms);
    person && fetchAll(person.starships, setStarships);
    return (
      person && (
        <>
          <h2 className="personTitle">{person.name}</h2>
          <section className="personInfo">
            <img src={require(`${src}`)} className="personImg" />
            <div className="personReview">
              <p>Height: {person.height}</p>
              <p>Mass: {person.mass} kg</p>
              <p>Hair color: {person.hair_color}</p>
              <p>Skin color: {person.skin_color}</p>
              <p>Eye color: {person.eye_color}</p>
              <p>Birth year: {person.birth_year}</p>
              <p>Gender: {person.gender}</p>
              <p>Eye color: {person.eye_color}</p>
            </div>
          </section>
          <section className="personInfo">
            <div>
              <h2 className="subTitle">Films:</h2>
              {films && (
                <ul>
                  {films.map((f) => (
                    <li key={f.episode_id}>{f.title}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h2 className="subTitle">Starships:</h2>
              {starships && (
                <ul>
                  {starships.map((s) => (
                    <li key={s.model}>{s.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </>
      )
    );
  }
    const Film = ({ film, src }) => {
      const [characters, setCharacters] = useState();
      const [planets, setPlanets] = useState();
      film && fetchAll(film.characters, setCharacters);
      film && fetchAll(film.planets, setPlanets);
      return (
        film && (
          <div className="filmWrapper">
            <h2 className="personTitle">{film.title}</h2>
            <img src={require(`${src}`)} className="filmImg" />
            <p>{film.opening_crawl}</p>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
            <p>Release date: {film.release_date}</p>
            <div>
              <p className="subTitle">Characters:</p>
              {characters && (
                <ul>
                  {characters.map((c) => (
                    <li key={c.name}>{c.name}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className="subTitle">Planets:</p>
              {planets && (
                <ul>
                  {planets.map((p) => (
                    <li key={p.name}>{p.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )
      );
    };
  const store = createStore(promiseReducer, applyMiddleware(thunk));
  store.dispatch(
    actionPromise(
      "getObi",
      fetch("https://swapi.dev/api/people/10").then((res) => res.json())
    )
  );
  store.dispatch(
    actionPromise(
      "getFilm",
      fetch("https://swapi.dev/api/films/1/").then((res) => res.json())
    )
  );
  
  const ObiWan = connect((state) => ({ person: state.getObi.payload }))(Person);
  const FirstFilm = connect((state) => ({ film: state.getFilm.payload }))(Film);
    function App() {
      return (
        <Provider store={store}>
          <ObiWan src={`./Ben_Kenobi.png`} />
          <FirstFilm src={`./starwars.jpg`} />
        </Provider>
      );
    }

export default App;
