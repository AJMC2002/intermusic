import express from "express";
import type { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import getSong from "./getSong";
import type { Song } from "./types";
import { config } from "dotenv";

config({
	path: ".env.local",
});

const app: Express = express()
	.use(bodyParser.json())
	.use(cors())
	.use(morgan("combined"));

const port: string = process.env.PORT || "8081";

app.get("/api/:songID", async (req: Request, res: Response) => {
	const songID = Number(req.params.songID);
	getSong(songID).then((song: Song | null) => {
		res.send(song);
	});
});

app.listen(port, () => {
	console.log(`🀄 [server]: Server is running at http://localhost:${port}`);
});
