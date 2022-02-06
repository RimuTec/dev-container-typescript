import * as express from 'express';
const app = express();

// add route
app.use('/', (req: express.Request, res: express.Response) => res.send("<!DOCTYPE html>Hello, world!"));

// Start the web server
app.listen(3000, () => console.log("listening"));
