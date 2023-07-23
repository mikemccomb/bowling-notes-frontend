export function SessionsShow(props) {
  console.log("SessionsShow", props);
  return (
    <div>
      <h1>Session Information</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col-4">Date</th>
            <th scope="col-2">Game 1</th>
            <th scope="col-2">Game 2</th>
            <th scope="col-2">Game 3</th>
            <th scope="col-2">Series</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.session.date}</th>
            <td>{props.session.gameone}</td>
            <td>{props.session.gametwo}</td>
            <td>{props.session.gamethree}</td>
            <td>{props.session.series}</td>
          </tr>
        </tbody>
      </table>
      <h3>Notes</h3>
      <p>{props.session.notes}</p>
      <button className="btn btn-secondary">Edit Session</button>
    </div>
  );
}
