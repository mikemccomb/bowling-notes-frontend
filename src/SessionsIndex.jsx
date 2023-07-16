/* eslint-disable react/prop-types */
export function SessionsIndex(props) {
  console.log(props);
  return (
    <div className="card mt-3">
      <h1 className="card-header">League Name</h1>
      <div className="card-body">
        <h3 className="card-title">League Information</h3>
        <p className="card-text">Day, Time, Center, Other Info</p>
      </div>
      <h3 className="card-body">League Sessions</h3>
      <table className="table card-text">
        <thead>
          <tr>
            <th>Date</th>
            <th>Game 1</th>
            <th>Game 2</th>
            <th>Game 3</th>
            <th>Series</th>
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
              <td>
                <button onClick={() => props.onShowSession(session)} className="btn btn-warning">
                  Notes
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
