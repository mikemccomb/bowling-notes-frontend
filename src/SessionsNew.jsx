import { useState } from "react";

export function SessionsNew(props) {
  const [games, setGames] = useState({ gameone: 0, gametwo: 0, gamethree: 0 });
  // const [status, setStatus] = useState(null);

  const updateGame = (e) => {
    const game = e.target.name;
    setGames((existingValues) => ({ ...existingValues, [game]: +e.target.value }));
  };
  console.log(games);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSession(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New League Session</h1>

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
