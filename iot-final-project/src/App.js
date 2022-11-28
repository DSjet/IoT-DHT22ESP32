import Axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [reading, setReading] = useState();

  const getReading = async () => {
    const response = await Axios.get("http://localhost:9000/api");
    setReading(response.data);
  };

  useEffect(() => {
    getReading();
  }, []);

  return <div className="App">{reading}</div>;
}

export default App;
