const express = require("express");
const app = express();
const PORT = 3000;

let data = []
let now = "";
app.get("/date", (req, res, next) => {
  console.log('got GET-request');
  res.setHeader("Content-Type", "text/html; charset=utf-8")
  res.setHeader("Transfer-Incoding", "chunked")
  setTimeout(function stop(){
    data.map((res,i) => {
      now = new Date();
      res.write(`Hello ${i}! Date: ${now}.\n`);
      res.end();
    })
    data = [];
    process.exit(0);
    
  }, LIMIT)
  data.push(res);
  if (data.length===1) {
    setInterval(function run() {
      console.log(now);
      now = new Date();
    }, DELAY)
  }  
})

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT} and waiting for GET-request`);
  console.log(`Delay: ${DELAY} ms`);
  console.log(`Limit: ${LIMIT} ms`);
})