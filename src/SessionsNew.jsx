import { useState } from "react";
import axios from "axios";

export function SessionsNew() {
  const [errors, setErrors] = useState([]);
  const [games, setGames] = useState({ gameone: 0, gametwo: 0, gamethree: 0 });
  const [status, setStatus] = useState(null);

  const updateGame = (e) => {
    const game = e.target.name;
    setGames((existingValues) => ({ ...existingValues, [game]: +e.target.value }));
  };
  console.log(games);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const params = new FormData(e.target);
    axios
      .post("http://localhost:3000/league_sessions.json", params)
      .then((response) => {
        console.log(response.data);
        e.target.reset();
        localStorage.setItem("flashMessage", "League session added");
        window.location.href = "/";
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div>
      <h1>New League Session</h1>
      <ul>
        {status ? <img src={`https://httpstatusdogs.com/img/${status}.jpg`} /> : null}
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Date: <input name="date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
        </div>
        <div>
          Game One: <input minLength={0} name="gameone" type="number" onChange={updateGame} />
        </div>
        <div>
          Game Two: <input minLength={0} name="gametwo" type="number" onChange={updateGame} />
        </div>
        <div>
          Game Three: <input minLength={0} name="gamethree" type="number" onChange={updateGame} />
        </div>
        <div>
          Series: <input name="series" type="number" value={games.gameone + games.gametwo + games.gamethree} readOnly />
        </div>
        <div>
          Notes: <input name="notes" type="text" defaultValue={""} />
        </div>
        <div>
          <button type="submit">Enter Scores</button>
        </div>
      </form>
    </div>
  );
}
