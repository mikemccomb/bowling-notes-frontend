/* eslint-disable react/prop-types */
import axios from "axios";

export function SeasonEdit(props) {
  console.log("SeasonEdit", props);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleUpdateSeason(props.season.id, params, () => event.target.reset());
  };

  const handleUpdateSeason = (id, params, successCallback) => {
    console.log("handleUpdateSeason", params);
    axios.patch(`/seasons/${id}.json`, params).then((response) => {
      if (props.season.id === response.data.id) {
        return response.data;
      } else {
        return props.season;
      }
    });
    successCallback();
    window.location.reload(false);
  };

  const handleClick = () => {
    let text = "Are you sure you want to delete your season?";
    if (confirm(text)) {
      props.onDestroySeason(props.season);
    }
    window.location.reload(false);
  };

  return (
    <div className="card mt-3">
      <h1 className="card-header">Edit Season</h1>
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
            Update Season
          </button>
          <button className="btn btn-danger" onClick={handleClick}>
            Delete Season
          </button>
        </div>
      </form>
    </div>
  );
}
