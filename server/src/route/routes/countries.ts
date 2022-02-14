import router from "../router";
import { Request, Response } from "express";
import axios from "axios";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 2592000 });

const cacheCheck = (req: Request, res: Response, next: (param?: unknown) => void): Response | void => {

    try {

        const { name } = req.params;
        if (!!name && cache.has(name)) {

            return res.status(200).json(cache.get(name));

        }

        return next();

    } catch (err) {

        throw new Error(err);
    }

}


router.get('/countries', (async (req: Request, res: Response) => {

        try {

            const { data } = await axios.get(`http://localhost:3004/api/countries`);

            return res.status(200).json(data);

        } catch (err) {

            return res.sendStatus(500);

        }
    })
);

router.get("/countries/:name", cacheCheck, (async (req: Request, res: Response) => {

        try {

            const { name } = req.params;
            const { data } = await axios.get(`http://localhost:3004/api/name/${name}`);

            cache.set(name, data);

            return res.status(200).json(data);

        } catch ({ response }) {

            return res.sendStatus(500);

        }

    })
);

export default router;