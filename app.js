import express from "express";
import "express-async-errors";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobsRoutes.js";

const app = express();
app.use(express.json());

//routes

//Middleware

app.get("/api/v1", (req, res) => {
  res.json({ msg: "hello there API" });
});
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome-job-search</h1>");
// });
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
export default app;
