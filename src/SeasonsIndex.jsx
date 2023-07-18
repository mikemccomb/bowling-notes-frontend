export function SeasonsIndex(props) {
  return (
    <div>
      <h1>All seasons</h1>
      {props.seasons.map((season) => (
        <div key={season.id}>
          <h2>{season.name}</h2>
          <p>Season starts: {season.start_date}</p>
          <p>Season ends: {season.end_date}</p>
          <p># of sessions: {season.number_sessions}</p>
        </div>
      ))}
    </div>
  );
}
