import * as express from "express";
import middleware from "../middleware";
import {Router} from "express/ts4.0";

const router: Router = express.Router();

router.use(Object.values(middleware));

export default router;