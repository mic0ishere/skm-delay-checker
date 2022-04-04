import { Children } from "react";
import { useRouter } from "next/router";
import { Container, Dropdown } from "react-bootstrap";

import { CustomMenu, DropdownItem } from "../components/Dropdown";
import skmStations from "../public/skmStations.json";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();

  const popularStationsIDs = ["5942", "5967", "7567", "5918", "6031", "6106"];
  const popularStations = skmStations.filter((x) =>
    popularStationsIDs.includes(x.id)
  );

  return (
    <Container className="md-container">
      <Container>
        <h1>Welcome to SKM Delay Checker</h1>
        <p>
          Get started by typing in station name or selecting one from the list
        </p>
        <Dropdown as={CustomMenu} sm={10} className="mr-2 w-full">
          <Dropdown.Header className="px-0">Popular</Dropdown.Header>
          {Children.toArray(
            popularStations.map((station) => (
              <DropdownItem station={station} router={router} popular />
            ))
          )}
          <Dropdown.Divider />
          {Children.toArray(
            skmStations.map((station) => (
              <DropdownItem station={station} router={router} />
            ))
          )}
        </Dropdown>
      </Container>
      <Footer />
    </Container>
  );
}
