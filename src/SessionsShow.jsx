export function SessionsShow(props) {
  return (
    <div>
      <h1>Session Information</h1>
      <p>Session Date: {props.session.date}</p>
      <p>Game One: {props.session.gameone}</p>
      <p>Game Two: {props.session.gametwo}</p>
      <p>Game Three: {props.session.gamethree}</p>
      <p>Series: {props.session.series}</p>
      <p>Notes: {props.session.notes}</p>
    </div>
  );
}
