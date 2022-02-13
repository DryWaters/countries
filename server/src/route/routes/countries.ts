import router from "../router";
import { Request, Response } from "express";
import axios from "axios";

router.route('/countries')
    .get(async (req: Request, res: Response) => {

        try {

            const { data } = await axios.get(`http://localhost:3004/api/countries`);
            return res.status(200).json(data);

        } catch (err) {

            return res.sendStatus(500);

        }
    });

router.route("/countries/:name")
    .get(async (req: Request, res: Response) => {

        try {

            const { name } = req.params;
            const { data } = await axios.get(`http://localhost:3004/api/name/${name}`);
            return res.status(200).json(data);

        } catch ({ response }) {

            return res.sendStatus(500);

        }

    });

export default router;