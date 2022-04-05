import { trains } from "infopasazer-wrapper";
import skmStations from "../../../skmStations";
import skmStationsList from "../../../public/skmStations.json";

export default async function handler(req, res) {
  const id = req.query.id;

  if (!skmStationsList.find((x) => x.id === id)) {
    res.status(404).send("Station not found");
    return;
  }

  const outgoingSKM = await trains.getTricitySKM(id);

  const result = outgoingSKM.filter(
    (x) =>
      skmStations.includes(x.route.end) && skmStations.includes(x.route.start)
  );

  res.json(result);
}
