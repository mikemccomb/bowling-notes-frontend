import { useState } from "react";
/* eslint-disable react/prop-types */

// Need to add handleSubmit; you can probably fix series in here?
export function SessionsShow(props) {
  const [games, setGames] = useState({
    gameone: props.session.gameone,
    gametwo: props.session.gametwo,
    gamethree: props.session.gamethree,
  });

  const updateGame = (e) => {
    const game = e.target.name;
    setGames((existingValues) => ({ ...existingValues, [game]: +e.target.value }));
  };
  console.log(games);

  return (
    <div>
      <h1>Session Information</h1>
      <p>Session Date: {props.session.date}</p>
      <p>Game One: {props.session.gameone}</p>
      <p>Game Two: {props.session.gametwo}</p>
      <p>Game Three: {props.session.gamethree}</p>
      <p>Series: {props.session.series}</p>
      <p>Notes: {props.session.notes}</p>
      <form>
        <div>
          Date: <input name="date" type="date" defaultValue={props.session.date} />
        </div>
        <div>
          Game One:{" "}
          <input
            maxLength={0}
            name="gameone"
            type="number"
            defaultValue={props.session.gameone}
            onChange={updateGame}
          />
        </div>
        <div>
          Game Two:{" "}
          <input
            minLength={0}
            name="gametwo"
            type="number"
            defaultValue={props.session.gametwo}
            onChange={updateGame}
          />
        </div>
        <div>
          Game Three:{" "}
          <input
            minLength={0}
            name="gamethree"
            type="number"
            defaultValue={props.session.gamethree}
            onChange={updateGame}
          />
        </div>
        <div>
          Series: <input name="series" type="number" value={games.gameone + games.gametwo + games.gamethree} readOnly />
        </div>
        <div>
          Notes: <input name="notes" type="text" defaultValue={props.session.notes} />
        </div>
        <div>
          <button type="submit">Update Scores</button>
        </div>
      </form>
    </div>
  );
}
