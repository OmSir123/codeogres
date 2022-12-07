// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
export default function handler(req, res) {
  fs.readFile(`./items/${req.query.q}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json(data);
  });
}
