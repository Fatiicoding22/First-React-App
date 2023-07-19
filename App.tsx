import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Buttons";
import ListGroup from "./components/listGroup";

function App() {
  {
    let yellow = "#ffc800";
  }
  let items = ["Apple", "Banana", "Mango", "Orange", "Kiwi"];
  const handleSelectItem = (items: String) => {
    console.log(items);
  };

  const [alertvisible, setAlertvisibility] = useState(false);
  return (
    <>
      <div>
        {alertvisible && (
          <>
            <Alert onClose={() => setAlertvisibility(false)}>My Alert</Alert>
          </>
        )}
        <ListGroup
          items={items}
          heading="My List"
          onSelectitem={handleSelectItem}
        />
        <center>
          <button color="yellow" onClick={() => setAlertvisibility(true)}>
            Click Here
          </button>
        </center>
      </div>
    </>
  );
}

export default App;
