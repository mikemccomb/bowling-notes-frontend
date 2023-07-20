/* eslint-disable react/prop-types */
import { useState } from "react";

export function SessionsNew(props) {
  const [games, setGames] = useState({ gameone: 0, gametwo: 0, gamethree: 0 });

  const updateGame = (e) => {
    const game = e.target.name;
    setGames((existingValues) => ({ ...existingValues, [game]: +e.target.value }));
  };
  console.log(games);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSession(params, () => event.target.reset());
    event.target.reset();
    window.location.href = "/";
  };

  return (
    <div className="card mt-3">
      <h1 className="card-header">New League Session</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <table className="table">
          <tr>
            <td>
              <label>Date:</label>
            </td>
            <td>
              <input name="date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Game 1:</label>
            </td>
            <td>
              <input maxLength="3" name="gameone" type="number" onChange={updateGame} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Game 2:</label>
            </td>
            <td>
              <input minLength="3" name="gametwo" type="number" onChange={updateGame} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Game 3:</label>
            </td>
            <td>
              <input minLength="3" name="gamethree" type="number" onChange={updateGame} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Series:</label>
            </td>
            <td>
              <input name="series" type="number" value={games.gameone + games.gametwo + games.gamethree} readOnly />
            </td>
          </tr>
          <tr>
            <td>
              <label>Notes:</label>
            </td>
            <td>
              <input name="notes" type="textarea" defaultValue={""} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Season:</label>
            </td>
            <td>
              <input name="season_id" type="number" />
            </td>
          </tr>
        </table>
        <div>
          <button className="btn btn-success" type="submit">
            Enter Scores
          </button>
        </div>
      </form>
    </div>
  );
}
