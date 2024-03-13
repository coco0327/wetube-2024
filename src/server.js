import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

//variable funtion

/* arrow includes return so it is basically same as
(req, res) => {return res.send("I still love you");} */
const home = (req, res) => res.send("I still love you");

app.use(logger);
app.get("/", home);

const handleListning = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListning);

// //inline function
// /*use -> get*/

// //middleware logger
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// //privateMiddleware function
// app.use((req, res, next) => {
//   if (req.url === "/protected") {
//     return res.send("<h1>Not Allowed</h1>");
//   }
//   console.log("Allwed, you may continue");
//   next();
// });

// //Hnadle Home
// app.get("/", (req, res) => {
//   return res.send("I still love you");
// });

// //handle protected
// app.get("/protected", (req, res) => {
//   return res.send("Welcome to the private lounge");
// });

// app.listen(PORT, () => {
//   console.log(`Server listenting on port http://localhost:${PORT}`);
// });
