import { Dropdown, FormControl } from "react-bootstrap";
import { useState, forwardRef, Children } from "react";

const CustomMenu = forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="my-2 w-full"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled pr-5">
          {Children.toArray(children).filter(
            (child) =>
              !value ||
              (child.props.station?.name
                .toLowerCase()
                .includes(value.toLowerCase()) &&
                !child.props.popular)
          )}
        </ul>
      </div>
    );
  }
);

function DropdownItem({ station, router, popular }) {
  return (
    <Dropdown.Item
      key={station.id}
      eventKey={station.name}
      className="pl-2.5 w-full pe-pointer"
      onClick={() => {
        router.push(station.id);
      }}
      as={"div"}
    >
      {station.name}
    </Dropdown.Item>
  );
}

export { DropdownItem, CustomMenu };
