import { useState } from "react";
/* eslint-disable react/prop-types */

export function SessionsEdit(props) {
  console.log("SessionsEdit", props);

  const [games, setGames] = useState({
    gameone: props.session.gameone,
    gametwo: props.session.gametwo,
    gamethree: props.session.gamethree,
  });

  const updateGame = (event) => {
    const game = event.target.name;
    setGames((existingValues) => ({ ...existingValues, [game]: +event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSession(props.session.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    let text = "Are you sure you want to delete your session?";
    if (confirm(text) == true) {
      props.onDestroySession(props.session);
    }
  };

  return (
    <div>
      <h1>Edit Session</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <label>Date:</label>
              </td>
              <td>
                <input name="date" type="date" defaultValue={props.session.date}></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Game 1:</label>
              </td>
              <td>
                <input
                  name="gameone"
                  type="number"
                  maxLength="3"
                  defaultValue={props.session.gameone}
                  onChange={updateGame}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Game 2:</label>
              </td>
              <td>
                <input
                  name="gametwo"
                  type="number"
                  maxLength="3"
                  defaultValue={props.session.gametwo}
                  onChange={updateGame}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Game 3:</label>
              </td>
              <td>
                <input
                  name="gamethree"
                  type="number"
                  maxLength="3"
                  defaultValue={props.session.gamethree}
                  onChange={updateGame}
                ></input>
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
                <input name="notes" type="textarea" defaultValue={props.session.notes} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Season:</label>
              </td>
              <td>
                <input name="season_id" type="number" defaultValue={props.session.season_id} />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-success">
          Update Session
        </button>
        <button className="btn btn-danger" onClick={handleClick}>
          Delete Session
        </button>
      </form>
    </div>
  );
}
