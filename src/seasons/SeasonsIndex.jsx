export function SeasonsIndex(props) {
  return (
    <div>
      <h1>All Seasons</h1>
      {props.seasons.map((season) => (
        <div key={season.id}>
          <h2>{season.name}</h2>
          <p>
            {season.start_date} thru {season.end_date}
          </p>
          <p>{season.number_sessions} sessions</p>
        </div>
      ))}
    </div>
  );
}
