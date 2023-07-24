export function SeasonsContent() {
  const seasons = [
    { id: 1, name: "League 1", start_date: "2023-01-02", end_date: "2023-12-31", number_sessions: 12 },
    { id: 2, name: "League 2", start_date: "2023-01-02", end_date: "2023-12-31", number_sessions: 12 },
  ];

  return (
    <div>
      <SeasonsContent seasons={seasons} />
    </div>
  );
}
