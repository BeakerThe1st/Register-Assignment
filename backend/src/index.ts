import express from "express";
import { MongoClient } from "mongodb";
require("dotenv").config();

const app = express();

import cors from "cors";

app.use(express.json());
app.use(cors());

app.get("/item/:name", async (req: express.Request, res: express.Response) => {
  if (!process.env.DB_URI) {
    throw new Error("DB URI is undefined.");
  }
  console.log(`Received request`, req.params);
  if (!req.params || !req.params.name) return;
  const dbClient = new MongoClient(process.env.DB_URI);
  try {
    await dbClient.connect();
    const items = dbClient.db("register").collection("items");
    const itemSearch = await items.findOne({
      name: req.params.name.toLowerCase(),
    });
    if (!itemSearch) {
      res.sendStatus(404);
    } else {
      res.status(200).send(itemSearch);
    }
  } catch (error) {
    console.log(error);
  } finally {
    await dbClient.close();
  }
});

const port = 9000;

app.listen(port, () => {
  console.log("Server started");
});
