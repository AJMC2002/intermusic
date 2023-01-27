import express, { Express, Request, Response } from 'express';
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"
import {getLyrics} from "./functions"

const app:Express = express()
	.use(bodyParser.json())
	.use(cors())
	.use(morgan("combined"));

const port = process.env.PORT || 8081;

app.get("/genius", async (req:Request, res:Response) => {
	const lyrics: string|null = await getLyrics("https://genius.com/Almendra-fermin-lyrics");
	res.send({ lyrics: lyrics });
});

app.listen(port, () => {
	console.log(`🀄 [server]: Server is running at http://localhost:${port}`);
});
