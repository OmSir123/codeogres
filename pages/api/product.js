// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
export default function handler(req, res) {
  fs.readFile(`./items/${req.query.q}.json`, "utf-8", (err, data) => {
    let data1 = JSON.parse(data);
    res.status(200).json(data1[req.query.i]);
  });
}
