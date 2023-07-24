export function SeasonsShow(props) {
  console.log("SeasonsShow", props);
  return (
    <div>
      <h1>Season Info</h1>
      {props.season.league_sessions.map((session) => (
        <div key={session.id}>
          <p>
            Date: {session.date} — 1: {session.gameone} | 2: {session.gametwo} | 3: {session.gamethree} | Series:{" "}
            {session.series}
          </p>
          <p>Notes: {session.notes}</p>
        </div>
      ))}
    </div>
  );
}
