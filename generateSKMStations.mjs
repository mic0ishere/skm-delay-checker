import fs from "fs";
import { stations } from "infopasazer-wrapper";
import skmStations from "./skmStations";

const generateSKMStations = async () => {
  const finalStations = [];
  (await stations.getAllStations())
    .filter((x) => skmStations.includes(x.name))
    .forEach((x) => {
      finalStations.push(x);
    });

  console.log(
    finalStations,
    skmStations.filter(
      (x) => finalStations.filter((y) => y.name === x).length === 0
    )
  );
  console.log(finalStations.length, skmStations.length);

  fs.writeFileSync(
    "./public/skmStations.json",
    JSON.stringify(finalStations, null, 4)
  );
};

generateSKMStations();
