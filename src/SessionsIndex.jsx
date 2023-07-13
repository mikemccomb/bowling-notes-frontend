export function SessionsIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All League Sessions</h1>
      {props.sessions.map((session) => (
        <div key={session.id}>
          <h2>{session.date}</h2>
          <p>Game One: {session.gameone}</p>
          <p>Game Two: {session.gametwo}</p>
          <p>Game Three: {session.gamethree}</p>
          <p>Series: {session.series}</p>
          <p>Notes: {session.notes}</p>
        </div>
      ))}
    </div>
  );
}
