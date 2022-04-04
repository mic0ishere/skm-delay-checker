import { trains } from "infopasazer-wrapper";
import skmStations from "../../../skmStations";

export default async function handler(req, res) {
  const id = req.query.id;

  const outgoingSKM = await trains.getTricitySKM(id);

  const result = outgoingSKM.filter(
    (x) =>
      skmStations.includes(x.route.end) && skmStations.includes(x.route.start)
  );

  res.json(result);
}
