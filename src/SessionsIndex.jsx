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
      {props.sessions.map((session) => (
        <div key={session.id} className="card-text">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <label>{session.date}</label>
              <button onClick={() => props.onShowSession(session)} className="btn btn-warning">
                Session Info
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
