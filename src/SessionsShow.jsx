import { useState } from "react";
/* eslint-disable react/prop-types */

// Need to add handleSubmit; you can probably fix series in here?
export function SessionsShow(props) {
  const [games, setGames] = useState({
    gameone: props.session.gameone,
    gametwo: props.session.gametwo,
    gamethree: props.session.gamethree,
  });
  const [isSessionEditActive, setIsSessionEditActive] = useState(false);

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

  const handleEditSession = () => {
    console.log("handleEditSession");
    setIsSessionEditActive(!isSessionEditActive);
  };

  if (isSessionEditActive) {
    return (
      <div>
        <h1>Session Information</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Date:</label>
            <input name="date" type="date" defaultValue={props.session.date} />
          </div>
          <div>
            <label>Game One: </label>
            <input
              maxLength={0}
              name="gameone"
              type="number"
              defaultValue={props.session.gameone}
              onChange={updateGame}
            />
          </div>
          <div>
            <label>Game Two: </label>
            <input
              minLength={0}
              name="gametwo"
              type="number"
              defaultValue={props.session.gametwo}
              onChange={updateGame}
            />
          </div>
          <div>
            <label>Game Three: </label>
            <input
              minLength={0}
              name="gamethree"
              type="number"
              defaultValue={props.session.gamethree}
              onChange={updateGame}
            />
          </div>
          <div>
            <label>Series:</label>
            <input name="series" type="number" value={games.gameone + games.gametwo + games.gamethree} readOnly />
          </div>
          <div>
            <label>Notes:</label>
            <input name="notes" type="text" defaultValue={props.session.notes} />
          </div>
          <div>
            <button type="submit">Update Scores</button>
          </div>
        </form>
        <button onClick={handleClick}>Delete session</button>
        <button onClick={handleEditSession}>Cancel</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Session Information</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col-4">Date</th>
              <th scope="col-2">Game 1</th>
              <th scope="col-2">Game 2</th>
              <th scope="col-2">Game 3</th>
              <th scope="col-2">Series</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{props.session.date}</th>
              <td>{props.session.gameone}</td>
              <td>{props.session.gametwo}</td>
              <td>{props.session.gamethree}</td>
              <td>{props.session.series}</td>
            </tr>
          </tbody>
        </table>
        <p>Notes: {props.session.notes}</p>
        <button onClick={handleEditSession}>Edit Session</button>
      </div>
    );
  }
}
