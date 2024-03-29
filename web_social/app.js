import express from "express";
import expressLayout from "express-ejs-layouts";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import appConfig from "./config/appConfig.js";
import route from "./routes/index.js";

const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

const pr = ['/feed', '/blog', '/messages', '/video', '/event', '/pages', '/groups', '/market', '/blog', '/setting', '/timeline', '/upgrade'];

app.use(pr, expressLayout);

route(app);
appConfig(app, __dirname);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})