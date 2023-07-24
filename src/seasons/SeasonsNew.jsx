export function SeasonsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSeason(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Season</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <label>Name:</label>
              </td>
              <td>
                <input type="text" name="name" placeholder="2021-2022 Example League" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Start date:</label>
              </td>
              <td>
                <input type="date" name="start_date" />
              </td>
            </tr>
            <tr>
              <td>
                <label>End date:</label>
              </td>
              <td>
                <input type="date" name="end_date" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Number of sessions:</label>
              </td>
              <td>
                <input type="number" name="number_sessions" />
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
  );
}
