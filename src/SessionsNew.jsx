import { useState, useEffect } from "react";

export function SessionsNew() {
  const [series, setSeries] = useState(0);
  const [scores, setScores] = useState({
    gameone: 0,
    gametwo: 0,
    gamethree: 0,
  });

  // let date = new Date(date).toISOString().split("T")[0];

  // useEffect(() => getSeries(), [scores]);

  // Refer to Signup.jsx in Blog-Frontend, line 38

  return (
    <div>
      <h1>New League Session</h1>
      <form>
        <div>
          Date: <input name="date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
        </div>
        <div>
          Game One: <input name="gameone" type="number" />
        </div>
        <div>
          Game Two: <input name="gametwo" type="number" />
        </div>
        <div>
          Game Three: <input name="gamethree" type="number" />
        </div>
        <div>
          Series: <input name="series" type="number" />
        </div>
        <div>
          <button type="submit">Enter Scores</button>
        </div>
      </form>
    </div>
  );
}
