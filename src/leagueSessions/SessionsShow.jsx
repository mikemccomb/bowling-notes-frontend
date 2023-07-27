import { useState } from "react";
/* eslint-disable react/prop-types */
export function SessionsShow(props) {
  console.log("SessionsShow", props);
  const [games, setGames] = useState({
    gameone: props.session.gameone,
    gametwo: props.session.gametwo,
    gamethree: props.session.gamethree,
  });

  const updateGame = (e) => {
    const game = e.target.name;
    setGames((existingValues) => ({ ...existingValues, [game]: +e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSession(props.session.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroySession(props.session);
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
                <input name="date" type="date" defaultValue={props.session.date} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Game 1:</label>
              </td>
              <td>
                <input
                  maxLength="3"
                  name="gameone"
                  type="number"
                  defaultValue={props.session.gameone}
                  onChange={updateGame}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Game 2:</label>
              </td>
              <td>
                <input
                  minLength="3"
                  name="gametwo"
                  type="number"
                  defaultValue={props.session.gametwo}
                  onChange={updateGame}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Game 3:</label>
              </td>
              <td>
                <input
                  minLength="3"
                  name="gamethree"
                  type="number"
                  defaultValue={props.session.gamethree}
                  onChange={updateGame}
                />
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
          </tbody>
        </table>
        <div className="container-fluid">
          <button className="btn btn-success" type="submit">
            Update Scores
          </button>
          <button className="btn btn-danger" onClick={handleClick}>
            Delete session
          </button>
          <button className="btn btn-secondary" onClick={() => props.handleClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
