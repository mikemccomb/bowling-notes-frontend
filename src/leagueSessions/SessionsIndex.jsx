export function SessionsIndex(props) {
  return (
    <div className="card-body">
      <h3>League Sessions</h3>
      <table className="table card-text">
        <thead>
          <tr>
            <th>Date</th>
            <th>Game 1</th>
            <th>Game 2</th>
            <th>Game 3</th>
            <th>Series</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        {props.sessions.map((session) => (
          <tbody key={session.id}>
            <tr>
              <th scope="row">{session.date}</th>
              <td>{session.gameone}</td>
              <td>{session.gametwo}</td>
              <td>{session.gamethree}</td>
              <td>{session.series}</td>
              <td>{session.notes}</td>
              <td>
                <button onClick={() => props.onShowSession(session)}>More</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}