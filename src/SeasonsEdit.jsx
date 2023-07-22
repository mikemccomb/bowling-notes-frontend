import { useState } from "react";

export function SeasonsEdit(props) {
  console.log("SeasonsEdit", props);
  const [seasons, setSeasons] = useState([]);

  const handleSubmit = () => {};

  return (
    <div>
      <div className="card mt-3">
        <h1 className="card-header">New Season</h1>
        <form className="form-control" onSubmit={handleSubmit}>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <label>Name:</label>
                </td>
                <td>
                  <input type="text" name="name" defaultValue={props.season.name} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Start date:</label>
                </td>
                <td>
                  <input type="date" name="start_date" defaultValue={props.season.start_date} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>End date:</label>
                </td>
                <td>
                  <input type="date" name="end_date" defaultValue={props.season.end_date} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Number of sessions:</label>
                </td>
                <td>
                  <input type="number" name="number_sessions" defaultValue={props.season.number_sessions} />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button className="btn btn-success" type="submit">
              Create Season
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
