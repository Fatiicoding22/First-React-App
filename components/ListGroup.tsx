import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectitem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectitem }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <center>
        <h1>{heading}</h1>
      </center>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
              onSelectitem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
