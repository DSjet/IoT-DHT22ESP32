import React from "react";
import TemperatureChart from "./components/TemperatureLineChart";
import HumidityChart from "./components/HumidityLineChart";

function App() {
  // const [reading, setReading] = useState();

  // const getReading = async () => {
  //   const response = await Axios.get("http://localhost:9000/api");
  //   setReading(response.data.feeds);
  // };

  // useEffect(() => {
  //   getReading();
  // }, []);

  // const handle = () => {
  //   console.log(reading);
  // };

  return (
    <div
      className="App"
      style={{
        textAlign: "Left",
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <div
        id="header"
        style={{
          textAlign: "center",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <h1>Dashboard</h1>
        <hr></hr>
      </div>
      <br></br>

      <div id="tempHumid" style={{ display: "flex", justifyContent: "center" }}>
        <div
          id="temp"
          style={{
            width: 700,
            borderRadius: 50,
            backgroundColor: "#F2E7D5",
            flex: true,
            marginTop: 50,
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 50,
          }}
        >
          <h1
            style={{
              color: "#393E46",
              paddingTop: 20,
              marginTop: 0,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20,
            }}
          >
            Temperature Readings
          </h1>
          <div
            style={{
              paddingTop: 0,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20,
            }}
          >
            <TemperatureChart />
          </div>
        </div>

        <div
          id="humid"
          style={{
            width: 700,
            borderRadius: 50,
            backgroundColor: "#F2E7D5",
            flex: true,
            marginTop: 50,
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 50,
          }}
        >
          <h1
            style={{
              color: "#393E46",
              paddingTop: 20,
              marginTop: 0,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20,
            }}
          >
            Humidity Readings
          </h1>
          <div
            style={{
              paddingTop: 0,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20,
            }}
          >
            <HumidityChart />
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="App" onClick={handle()}>
  //     <h1>Temperature</h1>
  //     {reading ? <div>{reading.feeds[2].field1}°C</div> : <div>gaada</div>}

  //     <h1>Humidity</h1>
  //     {reading ? <div>{reading.feeds[2].field2}%</div> : <div>gaada</div>}
  //   </div>
  //   <div className="App" onClick={handle()}>
  //     <LineChart data={reading} />
  //   </div>
  // );
}

export default App;
