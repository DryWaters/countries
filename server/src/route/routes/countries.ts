import router from "../router";
import { Request, Response } from "express";
import axios from "axios";
import NodeCache from "node-cache";
import dotenv from "dotenv";

dotenv.config();

const MONTH_IN_SECONDS = 2.678e+6;
const cache = new NodeCache({ stdTTL: MONTH_IN_SECONDS });

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const cacheCheck = (req: Request, res: Response, next: (param?: unknown) => void): Response | void => {

    try {

        const { name } = req.params;
        if (!!name && cache.has(name)) {

            return res.status(304).json(cache.get(name));

        }

        return next();

    } catch (err) {

        throw new Error(err);
    }

}


router.get('/countries', (async (req: Request, res: Response) => {

        try {

            const { data } = await axios.get(`${API_URL}/all?access_key=${API_KEY}`);
            return res.status(200).json(data);

        } catch ({ response }) {

            // TODO:  Replace with a logging library
            console.error(`Error fetching countries with response: ${response}`)
            return res.status(500).json({ error: "Unable to fetch country data" });

        }
    })
);

router.get("/countries/:name", cacheCheck, (async (req: Request, res: Response) => {

        try {

            const { name } = req.params;
            const { data } = await axios.get(`${API_URL}/name/${name}?access_key=${API_KEY}&fullText=true`);
            cache.set(name, data);
            return res.status(200).json(data);

        } catch ({ response }) {

            // TODO:  Replace with a logging library
            console.error(`Error fetching country details for name: ${ req.params.name } with response: ${response}`)
            return res.status(500).json({ error: "Unable to fetch country details" });

        }

    })
);

export default router;