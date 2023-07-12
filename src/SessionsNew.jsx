import { DebounceInput } from "react-debounce-input";
import { useState, useEffect } from "react";

export function SessionsNew() {
  const [games, setGames] = useState({ gameone: 0, gametwo: 0, gamethree: 0 });
  const [series, setSeries] = useState(0);

  const setFirstGame = (e) => {
    setGames((existingValues) => ({ ...existingValues, gameone: +e.target.value }));
  };

  const setSecondGame = (e) => {
    setGames((existingValues) => ({ ...existingValues, gametwo: +e.target.value }));
  };

  const setThirdGame = (e) => {
    setGames((existingValues) => ({ ...existingValues, gamethree: +e.target.value }));
  };

  console.log(games);

  return (
    <div>
      <h1>New League Session</h1>
      <form>
        <div>
          Date: <input name="date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
        </div>
        <div>
          Game One:{" "}
          <DebounceInput minLength={0} name="gameone" type="number" debounceTimeout={300} onChange={setFirstGame} />
        </div>
        <div>
          Game Two:{" "}
          <DebounceInput minLength={0} name="gametwo" type="number" debounceTimeout={300} onChange={setSecondGame} />
        </div>
        <div>
          Game Three:{" "}
          <DebounceInput minLength={0} name="gamethree" type="number" debounceTimeout={300} onChange={setThirdGame} />
        </div>
        <div>
          Series: <input name="series" type="number" value={games.gameone + games.gametwo + games.gamethree} readOnly />
        </div>
        <div>
          <button type="submit">Enter Scores</button>
        </div>
      </form>
    </div>
  );
}
