import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import getSong from "./getSong";
import { Song } from "./types";
import { config } from "dotenv";

config({
	path: ".env",
});

const app: Express = express()
	.use(bodyParser.json())
	.use(cors())
	.use(morgan("combined"));

const port: string = process.env.PORT || "8081";

app.get("/api/:songID", async (req: Request, res: Response) => {
	const songID = Number(req.params.songID);
	const song: Song | null = await getSong(songID);
	res.send(song);
});

app.listen(port, () => {
	console.log(`🀄 [server]: Server is running at http://localhost:${port}`);
});
