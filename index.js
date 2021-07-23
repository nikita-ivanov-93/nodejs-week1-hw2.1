const express = require("express");
const app = express();
const LIMIT = process.env.LIMIT*1000;
const DELAY = process.env.DELAY*1000;
const PORT = 3000;

app.get("/date", (req, res, next) => {
  let now = "";
  console.log('got GET-request');
  res.setHeader("Content-Type", "text/html; charset=utf-8")
  res.setHeader("Transfer-Incoding", "chunked")
  const interval = setInterval(function run() {
    console.log(now);
    now = new Date();
  }, DELAY)
  setTimeout(function stop(){
    now = new Date();
    res.write(`Date: ${now}.\n`);
    clearInterval(interval);
    res.end();
  }, LIMIT)
})

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT} and waiting for GET-request`);
  console.log(`Delay: ${DELAY} ms`);
  console.log(`Limit: ${LIMIT} ms`);
})