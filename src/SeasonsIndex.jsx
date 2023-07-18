import { SessionsIndex } from "./SessionsIndex";

export function SeasonsIndex(props) {
  return (
    <div className="card-body">
      <h2 className="card-title">Seasons</h2>
      {props.seasons.map((season) => (
        <div key={season.id}>
          <h3>{season.name}</h3>
          <p>
            Starts: {season.start_date} | Ends: {season.end_date} | {season.number_sessions} sessions
          </p>
          {/* <SessionsIndex sessions={season.league_sessions} /> */}
        </div>
      ))}
    </div>
  );
}
