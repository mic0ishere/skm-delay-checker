import { Children, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Container, Dropdown, Overlay, Row, Tooltip } from "react-bootstrap";

import { CustomMenu, DropdownItem } from "../components/Dropdown";
import skmStations from "../public/skmStations.json";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();

  const target = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [show, setShow] = useState(false);

  const popularStationsIDs = [
    "5942",
    "5967",
    "7567",
    "5918",
    "6031",
    "7559",
    "6106",
  ];
  const popularStations = skmStations.filter((x) =>
    popularStationsIDs.includes(x.id)
  );

  return (
    <Container className="md-container">
      <Container
        onClick={() => {
          !hovering && setShow(false);
          !hovering && setClicked(false);
        }}
      >
        <h1>Welcome to SKM Delay Checker</h1>
        <div className="d-flex flex-row">
          <p className="mb-2">
            Get started by typing in station name or selecting one from the list
          </p>
          <svg
            viewBox="0 0 512 512"
            height={20}
            width={20}
            onClick={() => {
              if (clicked) {
                setClicked(false);
                setShow(false);
              } else {
                setClicked(true);
                setShow(true);
              }
            }}
            onMouseEnter={() => {
              setHovering(true);
              setShow(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
              !clicked && setShow(false);
            }}
            className="ml-2"
            ref={target}
          >
            <Overlay target={target.current} show={show} placement="left">
              {(props) => (
                <Tooltip {...props}>
                  Due to{" "}
                  <a
                    href="https://infopasazer.intercity.pl"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    infopasazer
                  </a>{" "}
                  not having accurate delays,
                  <br />
                  <strong>delay times might not be accurate</strong>
                </Tooltip>
              )}
            </Overlay>
            <polygon
              fill="#fdd100"
              points="272 32 240 32 16 440 16 480 496 480 496 440 272 32"
            />
            <rect width="40" height="40" x="236" y="376" fill="black" />
            <polygon
              fill="black"
              points="224 264 238 336 274 336 288 264 288 184 224 184 224 264"
            />
          </svg>
        </div>
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
