import { Table as BootstrapTable } from "react-bootstrap";

function Table({ trains }) {
  function changeTimezone(date, ianatz) {
    const invdate = new Date(
      date.toLocaleString("en-US", {
        timeZone: ianatz,
      })
    );
    const diff = date.getTime() - invdate.getTime();

    return new Date(date.getTime() - diff);
  }

  const there = changeTimezone(
    new Date(trains[0].departure.real),
    "Europe/Warsaw"
  );
  console.log(there);
  return (
    <BootstrapTable striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Departing</th>
          <th>Delay</th>
        </tr>
      </thead>
      <tbody>
        {trains.map((train) => (
          <tr key={train.id}>
            <td className="col-sm-4">{train.route.start}</td>
            <td className="col-sm-4">{train.route.end}</td>
            <td className="col-sm-3">
              {new Date(train.departure.real).toLocaleTimeString(
                navigator.language,
                { hour: "2-digit", minute: "2-digit" }
              )}
            </td>
            <td className="col-sm-1">{train.departure.delay / 60} min</td>
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
}

export default Table;
