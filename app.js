import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();
app.use(express.json());

//Middleware
app.use(notFoundMiddleware);

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
export default app;
