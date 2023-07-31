export function About() {
  return (
    <div className="card mt-3">
      <h2 className="card-header">About 39 Boards</h2>
      <div className="card-body">
      <h3 className="card-subtitle mb-2 text-muted">Version 0.1</h3>
        <ul>
          <li>Enables Seasons CRUD</li>
          <li>Enables League Sessions CRUD</li>
        </ul>
        <h2>Up Next</h2>
        <ul>
          <li>Bug fixes</li>
          <li>League layer</li>
        </ul>
        <p>Developed by <a href="https://www.mikemccomb.net/" target="_blank" rel="noreferrer">Mike McComb</a></p>
      </div>
    </div>
  )
  
}