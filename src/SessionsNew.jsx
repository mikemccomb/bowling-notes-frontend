import { useState } from "react";

export function SessionsNew() {
  const [series, setSeries] = useState(0);

  // Refer to Signup.jsx in Blog-Frontend, line 38
  const handleSeries = () => {
    console.log("handleSeries");
  };

  return (
    <div>
      <h1>New League Session</h1>
      <form>
        <div>
          Date: <input name="date" type="date" defaultValue={new Date()} />
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
      </form>
    </div>
  );
}
