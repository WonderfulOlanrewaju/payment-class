import Axios from "axios";
import express from "express";
export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.status(201).json({
    message: "Payment class API",
  })
);

app.post("/paystack", async (req, res) => {
  try {
    // console.log(req.body);
    let response = await Axios.post(req.body.route, req.body.data, {
      headers: {
        Authorization: `Bearer ${process.env.paystackTestSecretKey}`,
        "Content-Type": "application/json",
      },
    });
    res.status(201).json({ response: response.data });
  } catch (error) {
    console.log(error.message);
    console.log(error);
    res.status(400).json({ error });
  }
});

app.post("/paystack/get", async (req, res) => {
  try {
    let response = await Axios.get(req.body.route, {
      headers: {
        Authorization: `Bearer ${process.env.paystackTestSecretKey}`,
        "Content-Type": "application/json",
      },
    });
    res.status(201).json({ response: response.data });
  } catch (error) {
    res.status(400).json({ error });
  }
});
