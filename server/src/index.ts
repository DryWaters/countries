import express, {RequestHandler, Router} from "express";
import cors from "cors";
import router from "./route";

const app = express();

const port: number = Number(process.env.PORT) || 5004;

app.use(express.json() as RequestHandler);
app.use(cors());

const routes: Router[] = Object.values(router);

app.use("/api", routes);

app.listen( port, () => {
    console.log(`Backend listening at http://localhost:${port}` );
} );