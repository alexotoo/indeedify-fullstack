import app from "./app.js";
import { createServer } from "http";

const PORT = process.env.PORT || 8000;
const server = createServer(app);

server.listen(PORT, () => console.log(`server listening on port: ${PORT}...`));