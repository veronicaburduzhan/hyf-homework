const express = require("express");
const app = express();
const router = express.Router();

app.use("/numbers", router);

router.get("/add", (req, res) => {
    const firstNumber = req.query.first;
    const secondNumber = req.query.second;
    res.send(`Sum is ${Number(firstNumber) + Number(secondNumber)}`);
});

router.get("/multiply/:firstNum/:secondNum", (req, res) => {
  res.send(`Result is ${Number(req.params.firstNum) * Number(req.params.secondNum)}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
