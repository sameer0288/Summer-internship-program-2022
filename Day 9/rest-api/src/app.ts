import express, { Application, Response, Request } from "express";
import routers from "./routers/users";

const app: Application = express();
const PORT: number = 4040;

app.use(express.json());
app.use("/api", routers);

app.listen(PORT, (): void => {
  console.log(`Server is up and listening on: ${PORT}`);
});