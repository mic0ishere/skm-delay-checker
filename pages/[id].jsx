import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import useSWR from "swr";
import Footer from "../components/Footer";
import Table from "../components/Table";

import skmStations from "../skmStations";
import skmStationsList from "../public/skmStations.json";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Station({ id, name: stationName }) {
  const { data, error } = useSWR("/api/trains/" + id, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const trains = data.map((train) => ({
    ...train,
    direction:
      skmStations.indexOf(train.route.end) >
      skmStations.indexOf(train.route.start)
        ? "Gdańsk"
        : "Gdynia",
  }));

  return (
    <Container className="md-container">
      <Container>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h1>Welcome to SKM Delay Checker</h1>
          <Link href="/">
            <Button variant="primary" style={{ height: "2.5rem" }}>
              Home
            </Button>
          </Link>
        </div>
        <p>
          Checking timetable for <b>{stationName}</b>
        </p>

        <h5>Direction: Gdańsk</h5>
        <Table trains={trains.filter((x) => x.direction === "Gdańsk")} />
        <h5 className="mt-3">Direction: Gdynia</h5>
        <Table trains={trains.filter((x) => x.direction === "Gdynia")} />
      </Container>
      <Footer />
    </Container>
  );
}

export async function getStaticProps(context) {
  return {
    props: skmStationsList.find((x) => x.id === context.params.id),
  };
}

export async function getStaticPaths() {
  return {
    paths: skmStationsList.map((x) => ({
      params: { id: x.id },
    })),
    fallback: false,
  };
}
