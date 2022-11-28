import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  axios
    .get(
      "https://api.thingspeak.com/channels/1958211/feeds.json?api_key=" +
        process.env.API_KEY
    )
    .then(function (response) {
      // handle success
      res.json(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

app.listen(9000, () => console.log("Server started at port 9000"));
